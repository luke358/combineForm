import { faker } from '@faker-js/faker'
import { getTableHeader } from './table'

export function createRandomSelect() {
  return {
    value: `终端${faker.name.firstName()}`,
    key: faker.datatype.uuid(),
  }
}

export function createRandomTableData() {
  return getTableHeader().map((item: any) => ({
    [item.key]: `table${faker.name.firstName()}`,
  })).reduce((acc, cur) => ({ ...acc, ...cur }))
}

