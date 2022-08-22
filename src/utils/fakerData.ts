import { faker } from '@faker-js/faker'

export function createRandomSelect() {
  return {
    value: `终端${faker.name.firstName()}`,
    key: faker.datatype.uuid(),
  }
}
