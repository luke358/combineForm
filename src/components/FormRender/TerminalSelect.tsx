import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import { createRandomSelect } from '../../utils/fakerData'

const Option = Select.Option
export default function TerminalSelect({ onChange, placeholder }: any) {
  const [selectOptions, setSelectOptions] = useState<any[]>([])
  useEffect(() => {
    setSelectOptions(Array.from({ length: 10 }).map(() => createRandomSelect()))
  }, [])

  const handleChange = (value: any) => {
    onChange && onChange(value)
  }
  return (
    <Select onChange={handleChange}
      mode="multiple"
      placeholder={placeholder}
    >
      {selectOptions.map(item => <Option key={item.key} value={item.value}>
        {item.value}
      </Option>)}
    </Select>
  )
}
