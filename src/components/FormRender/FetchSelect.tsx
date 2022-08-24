import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import type { FilterType } from '../../constants/public'
import * as services from '../../services'
interface FetchSelectProps {
  componentInfo?: FilterType
  onChange?: (value: any) => void
  value?: string | string[]
  currentTab?: string
  currentBusiness?: string
}
interface OptType {
  key: string
  value: string
}

const Option = Select.Option
export default function FetchSelect({ componentInfo, onChange, value }: FetchSelectProps) {
  const [opts, setOpt] = useState<OptType[]>([])

  const getListData = async () => {
    const { fetchFn } = componentInfo!
    if (fetchFn && services[fetchFn as keyof typeof services]) {
      const resp = await services[fetchFn as keyof typeof services]()
      setOpt(resp)
    }
  }
  const handleChange = (value: string[] | string) => {
    onChange && onChange(value)
  }

  useEffect(() => {
    getListData()
  }, [])
  return (
    <Select
      mode={componentInfo?.mode}
      showSearch
      allowClear
      optionFilterProp="children"
      placeholder={componentInfo?.placeholder}
      onChange={handleChange}
      value={value}
    >
      {(opts || []).map((item) => {
        return (
          <Option key={item.key} value={item.key}>
            {item.value}
          </Option>
        )
      })}
    </Select>
  )
}
