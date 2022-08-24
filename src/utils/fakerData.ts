import { faker } from '@faker-js/faker'
import { getTableHeader } from './table'

export function createRandomSelect(label = '终端') {
  return {
    value: `${label}${faker.name.firstName()}`,
    key: faker.datatype.uuid(),
  }
}

export function createRandomTableData() {
  return getTableHeader().map((item: any) => ({
    [item.key]: `table${faker.name.firstName()}`,
  })).reduce((acc, cur) => ({ ...acc, ...cur }))
}

export function createFetchSelect() {
  return createRandomSelect('处理事项')
}

