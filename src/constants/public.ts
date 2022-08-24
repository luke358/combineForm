export interface FilterType {
  key: string
  desc: string
  domType: string
  type: string
  placeholder?: string
  options?: any
  formItemStyle?: StyleSheet
  fetchFn?: string
  mode?: 'multiple' | 'tags' | undefined
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

export const TEST_FILTER = [
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
]
