export type Overwrite<T, U> = Omit<T, keyof U> & U

export type EntityType =
  | 'float'
  | 'integer'
  | 'money'
  | 'text'
  | 'area'
  | 'email'
  | 'select'
  | 'location'

export type FieldType = 'number' | 'text' | 'textarea' | 'email' | 'select'

export type Answer = {
  entityId: number
  variantId: number
  value: string
}

export type Entity = {
  id: number
  name: string
  type: EntityType
}

export type FieldCommon = {
  id: number
  label: string
}

export type InputField = FieldCommon & {
  fieldType: Exclude<FieldType, 'select'>
}

export type SelectField = FieldCommon & {
  fieldType: Extract<FieldType, 'select'>
  answers: Omit<Answer, 'entityId'>[]
}

export type Field = InputField | SelectField
