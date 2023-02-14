import {
  Answer,
  Entity,
  EntityType,
  Field,
  FieldType,
  InputField,
  Overwrite,
  SelectField,
} from './types'

type EntityWithoutAnswers = Overwrite<
  Entity,
  { type: Exclude<EntityType, 'select'> }
>

type EntityWithAnswers = Overwrite<Entity, { type: 'select' }>

const isSelectType = (type: string): type is 'select' => type === 'select'
const isCompatibleType = (type: string): type is 'text' | 'email' =>
  ['text', 'email'].includes(type)

const validate = (entities: Entity[], answers: Answer[]) => {
  const entityIds = entities
    .filter(({ type }) => type === 'select')
    .map(({ id }) => id)
  const uniqueAnswerIds = [...new Set(answers.map(({ entityId }) => entityId))]

  const entityIdsWithoutAnswers = entityIds.filter(
    id => !uniqueAnswerIds.includes(id),
  )
  const notMatchedAnswerIds = uniqueAnswerIds.filter(
    id => !entityIds.includes(id),
  )

  const [shouldThrowEntityError, shouldThrowAnswerError] = [
    entityIdsWithoutAnswers.length > 0,
    notMatchedAnswerIds.length > 0,
  ]

  if (shouldThrowEntityError) {
    throw new Error(
      `Found at least one entity without matched answer, for entity ids: ${entityIdsWithoutAnswers.join(
        ', ',
      )}.`,
    )
  }

  if (shouldThrowAnswerError) {
    throw new Error(
      `Found at least one answer without matched entity, for answer ids: ${notMatchedAnswerIds.join(
        ', ',
      )}.`,
    )
  }
}

const mapEntityType = (
  type: Exclude<EntityType, 'select'>,
): Exclude<FieldType, 'select'> => {
  const map = {
    area: 'textarea',
    float: 'number',
    integer: 'number',
    money: 'number',
  } as const

  if (isCompatibleType(type)) {
    return type
  }

  return map[type as 'area' | 'float' | 'integer' | 'money'] || 'text'
}

const mergeEntityWithAnswers = (
  answer: Answer,
  entities: Entity[],
): EntityWithAnswers & Answer => {
  const matchedEntity = entities.find(
    entity => entity.id === answer.entityId,
  ) as EntityWithAnswers
  return { ...answer, ...matchedEntity }
}

const mapDataToFields = (entities: Entity[], answers: Answer[]): Field[] => {
  const { entitiesWithAnswers, entitiesWithoutAnswers } = entities.reduce(
    (acc, entity) => {
      if (isSelectType(entity.type)) {
        acc.entitiesWithAnswers.push({ ...entity, type: entity.type })
      } else {
        acc.entitiesWithoutAnswers.push({ ...entity, type: entity.type })
      }
      return acc
    },
    {
      entitiesWithoutAnswers: [] as EntityWithoutAnswers[],
      entitiesWithAnswers: [] as EntityWithAnswers[],
    },
  )

  const inputFields: InputField[] = entitiesWithoutAnswers.map(
    ({ id, name, type }) => ({
      id,
      label: name,
      fieldType: mapEntityType(type),
    }),
  )

  const selectFields = answers
    .map(answer => mergeEntityWithAnswers(answer, entitiesWithAnswers))
    .reduce((acc, data) => {
      const existingQuestion = acc.find(a => a.id === data.id)

      if (existingQuestion) {
        existingQuestion.answers = [
          ...existingQuestion.answers,
          { variantId: data.variantId, value: data.value },
        ]
        return acc
      }

      const newQuestion = {
        id: data.id,
        label: data.name,
        fieldType: data.type,
        answers: [{ variantId: data.variantId, value: data.value }],
      }
      return [...acc, newQuestion]
    }, [] as SelectField[])

  return [...selectFields, ...inputFields].sort((a, b) => a.id - b.id)
}

export const getFields = (entities: Entity[], answers: Answer[]): Field[] => {
  validate(entities, answers)

  return mapDataToFields(entities, answers)
}
