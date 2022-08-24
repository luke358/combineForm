export interface FilterType {
  key: string
  desc: string
  domType: string
  type: string
  placeholder?: string | [string, string]
  options?: any
  formItemStyle?: any
  fetchFn?: string
  mode?: 'multiple' | 'tags' | undefined
  rangeMode?: 'time' | 'date' | 'month' | 'year' | 'decade' | 'quarter' | 'week'
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year' | 'time'
  span?: 8 | 12 | 16
  format?: string

  showHour?: boolean
  showMinute?: boolean
  showNow?: boolean
  showSecond?: boolean
  showTime?: boolean | Object

}
export const LOG_FILTER: FilterType[] = [
  // {
  //   key: 'ctime',
  //   desc: '日志提交时间',
  //   domType: 'DateRangeSelector',
  //   type: 'BETWEEN',
  // },
  {
    key: 'submitter_name1',
    desc: '提交人',
    domType: 'Input',
    placeholder: '请输入提交人',
    type: 'EQUAL',
  },
  {
    key: 'submitter_level5_name1',
    desc: '提交人团队',
    domType: 'Input',
    placeholder: '请输入提交人团队',
    type: 'EQUAL',
  },
  {
    key: 'result1',
    desc: '处理结果',
    domType: 'Select',
    placeholder: '请选择',
    type: 'EQUAL',
    options: {
      selectOptions: [{ key: '已解决', value: 'resolved' }, { key: '未解决', value: 'unresolved' }],
    },
  },
]

export const TAG_FILTER: FilterType[] = [
  {
    key: 'tag7',
    desc: '认领状态',
    domType: 'Select',
    placeholder: '请选择认领状态',
    type: 'EQUAL',
    options: {
      selectOptions: [{ key: '是', value: true }, { key: '否', value: false }],
    },
  },
  {
    key: 'eventmultiple',
    desc: '处理事项多选',
    domType: 'FetchSelect',
    placeholder: '请选择处理事项',
    type: 'IN',
    fetchFn: 'fetchSelect1',
    mode: 'multiple',
  },
  {
    key: 'event',
    desc: '处理事项单选',
    domType: 'FetchSelect',
    placeholder: '请选择处理事项',
    type: 'EQUAL',
    fetchFn: 'fetchSelect1',
  },
]

export const TERMINAL_FILTER: FilterType[] = [
  {
    key: 'terminal_name',
    desc: '终端名称',
    domType: 'FetchSelect',
    placeholder: '请选择终端名称',
    type: 'IN',
    fetchFn: 'fetchSelect2',
    mode: 'multiple',
  },
  {
    key: 'device_fingerprint',
    desc: '终端SN',
    domType: 'Input',
    placeholder: '请输入终端SN',
    type: 'EQUAL',
  },
]

export const TEST_FILTER: FilterType[] = [
  {
    key: 'testtag7',
    desc: '认领状态',
    domType: 'Select',
    placeholder: '请选择认领状态',
    type: 'EQUAL',
    options: {
      selectOptions: [{ key: '是', value: true }, { key: '否', value: false }],
    },
  },
  {
    key: 'DatePicker',
    desc: 'DatePicker',
    domType: 'RangePicker',
    // showTime: false,
    type: 'BETWEEN',
    span: 12,
    picker: 'date',
    format: 'YYYY-MM-DD',
    placeholder: ['开始时间', '结束时间'],
    formItemStyle: {
      width: '100%',
    },
  },
  {
    key: 'WeekPicker',
    desc: 'WeekPicker',
    picker: 'week',
    domType: 'RangePicker',
    type: 'BETWEEN',
    span: 12,
    placeholder: ['开始周', '结束周'],
    formItemStyle: {
      width: '100%',
    },
  },
  {
    key: 'MonthPicker',
    desc: 'MonthPicker',
    picker: 'month',
    domType: 'RangePicker',
    type: 'BETWEEN',
    span: 12,
    placeholder: ['开始月份', '结束月份'],
    formItemStyle: {
      width: '100%',
    },
  },
  {
    key: 'quarterPicker',
    desc: 'quarterPicker',
    picker: 'quarter',
    domType: 'RangePicker',
    type: 'BETWEEN',
    span: 12,
    placeholder: ['开始季度', '结束季度'],
    formItemStyle: {
      width: '100%',
    },
  },
  {
    key: 'YearPicker',
    desc: 'YearPicker',
    picker: 'year',
    domType: 'RangePicker',
    type: 'BETWEEN',
    span: 12,
    placeholder: ['开始年份', '结束年份'],
    formItemStyle: {
      width: '100%',
    },
  },
  {
    key: 'timePicker',
    desc: 'timePicker',
    picker: 'time',
    showHour: true,
    showMinute: true,
    showSecond: true,
    domType: 'RangePicker',
    type: 'BETWEEN',
    span: 12,
    placeholder: ['开始', '结束'],
    formItemStyle: {
      width: '100%',
    },
  },
]
