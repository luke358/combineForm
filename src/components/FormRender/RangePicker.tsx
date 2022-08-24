import React from 'react'
import { DatePicker, TimePicker } from 'antd'
import moment from 'moment'
import type { FilterType } from '../../constants/public'
const RangePicker = DatePicker.RangePicker

interface RangePickerProps {
  componentInfo?: FilterType
  onChange?: (values?: [string, string]) => void
}

const baseFormat = 'YYYY-MM-DD HH:mm:ss'
export default function DateRangePicker({ onChange, componentInfo }: RangePickerProps) {
  const format = componentInfo?.picker === 'date' ? componentInfo?.format ?? baseFormat : undefined
  const handleChange = (values: any, dataStrings: any) => {
    if (!values) {
      onChange && onChange(undefined)
      return
    }
    if (componentInfo?.picker === 'date')
      onChange && onChange([moment(values[0]).format(format), moment(values[1]).format(format)])
    else
      onChange && onChange(dataStrings)
  }

  if (componentInfo?.picker === 'time') {
    return <TimePicker onChange={handleChange}
      showHour={componentInfo?.showHour ?? false}
      showSecond={componentInfo?.showSecond ?? false}
      showMinute={componentInfo?.showMinute ?? false}
      showNow={componentInfo?.showNow ?? false}
    />
  }

  return (
    <RangePicker
      picker={componentInfo?.picker ?? 'date'}
      format={format}
      showTime={componentInfo?.showTime ?? false}
      showNow={componentInfo?.showNow ?? false}
      placeholder={componentInfo?.placeholder as [string, string]}
      style={{ width: '100%' }}
      onChange={handleChange}
    />
  )
}
