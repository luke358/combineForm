import { createFetchSelect, createRandomSelect } from './utils/fakerData'

export const fetchSelect1: any = () => {
  const data = []
  // 模拟数据
  for (let i = 0; i < 10; i++)
    data.push(createFetchSelect())
  return data
}

export const fetchSelect2 = (): { key: string; value: string }[] => {
  // 模拟数据
  const data = Array.from({ length: 10 }).map(() => createRandomSelect())
  return data
}

