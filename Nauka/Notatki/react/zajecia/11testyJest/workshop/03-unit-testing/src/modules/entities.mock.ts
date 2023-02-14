import { Answer, Entity } from './types'

export const answers: Answer[] = [
  {
    entityId: 100,
    variantId: 1,
    value: 'Computer Science',
  },
  {
    entityId: 100,
    variantId: 2,
    value: 'Renewable Energy and Energy Management: Sustainable Energy Systems',
  },
  {
    entityId: 100,
    variantId: 3,
    value: 'Geophysics',
  },
  {
    entityId: 101,
    variantId: 1,
    value: 'Artificial Intelligence and Data Analysis',
  },
  {
    entityId: 101,
    variantId: 2,
    value: 'Remote Sensing and GIS',
  },
  {
    entityId: 101,
    variantId: 3,
    value: 'Economic Geology',
  },
]

export const entities: Entity[] = [
  { id: 100, name: 'Master degree programme', type: 'select' },
  { id: 101, name: 'Master degree specialty', type: 'select' },
  { id: 102, name: 'Student loan value', type: 'money' },
  { id: 103, name: 'Year of graduation', type: 'integer' },
  { id: 104, name: 'Location of the academic department', type: 'location' },
  { id: 105, name: 'Description of the thesis topic', type: 'area' },
  { id: 106, name: 'Student full name', type: 'text' },
]
