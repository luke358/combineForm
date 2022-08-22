export interface FilterType {
  key: string
  desc: string
  domType: string
  type: string
  placeholder?: string
  options?: any
  formItemStyle?: StyleSheet
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
  // {
  //   key: 'submit_platform',
  //   desc: '处理平台',
  //   domType: 'SubmitPlatform',
  //   placeholder: '请选择处理类型',
  //   type: 'IN',
  // },
]

export const TAG_FILTER = [
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
  // {
  //   key: 'tags',
  //   desc: '标签',
  //   domType: 'FetchSelect',
  //   placeholder: '请选择标签',
  //   type: 'IN',
  //   fetchFn: 'fetchTags',
  // },
  // {
  //   key: 'flhd',
  //   desc: '费率标签值',
  //   domType: 'FetchSelect',
  //   placeholder: '请选择普惠活动',
  //   type: 'IN',
  //   fetchFn: 'fetchRateTag',
  // },
]

export const TERMINAL_FILTER = [
  {
    key: 'terminal_name',
    desc: '终端名称',
    domType: 'TerminalSelect',
    placeholder: '请选择终端名称',
    type: 'IN',
  },
  {
    key: 'device_fingerprint',
    desc: '终端SN',
    domType: 'Input',
    placeholder: '请输入终端SN',
    type: 'EQUAL',
  },
  // {
  //   key: 'ctime',
  //   desc: '终端绑定时间',
  //   domType: 'DateRangeSelector',
  //   type: 'BETWEEN',
  // },
  // {
  //   key: 'trans_date',
  //   desc: '终端交易时间',
  //   domType: 'MonthRangerPicker',
  //   type: 'BETWEEN',
  // },
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
  // {
  //   key: 'tags',
  //   desc: '标签',
  //   domType: 'FetchSelect',
  //   placeholder: '请选择标签',
  //   type: 'IN',
  //   fetchFn: 'fetchTags',
  // },
  // {
  //   key: 'flhd',
  //   desc: '费率标签值',
  //   domType: 'FetchSelect',
  //   placeholder: '请选择普惠活动',
  //   type: 'IN',
  //   fetchFn: 'fetchRateTag',
  // },
]
