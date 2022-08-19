export const LOG_FILTER = [
  {
    key: 'ctime',
    desc: '日志提交时间',
    domType: 'DateRangeSelector',
    type: 'BETWEEN',
  },
  {
    key: 'submitter_name',
    desc: '提交人',
    domType: 'Input',
    placeholder: '请输入提交人',
    type: 'EQUAL',
  },
  {
    key: 'submitter_level5_name',
    desc: '提交人团队',
    domType: 'Input',
    placeholder: '请输入提交人团队',
    type: 'EQUAL',
  },
  {
    key: 'result',
    desc: '处理结果',
    domType: 'Select',
    placeholder: '请选择',
    type: 'EQUAL',
    options: {
      selectOptions: ['已解决', '未解决'],
    },
  },
  {
    key: 'submit_platform',
    desc: '处理平台',
    domType: 'SubmitPlatform',
    placeholder: '请选择处理类型',
    type: 'IN',
  },
  {
    key: 'event',
    desc: '维护类型',
    domType: 'StoreMainEvent',
    placeholder: '请选择维护类型',
    type: 'IN',
  },
]

export const TAG_FILTER = [
  {
    key: 'tag7',
    desc: '小掌柜认领状态',
    domType: 'Select',
    placeholder: '请选择认领状态',
    type: 'EQUAL',
    options: {
      selectOptions: ['是', '否'],
    },
  },
  {
    key: 'tags',
    desc: '标签',
    domType: 'FetchSelect',
    placeholder: '请选择标签',
    type: 'IN',
    fetchFn: 'fetchTags',
  },
  {
    key: 'flhd',
    desc: '费率标签值',
    domType: 'FetchSelect',
    placeholder: '请选择普惠活动',
    type: 'IN',
    fetchFn: 'fetchRateTag',
  },
]

export const TERMINAL_FILTER = [
  {
    key: 'terminal_name',
    desc: '终端名称',
    domType: 'TerminalSelect',
    placeholder: '请输入终端名称',
    type: 'IN',
  },
  {
    key: 'device_fingerprint',
    desc: '终端SN',
    domType: 'Input',
    placeholder: '请输入终端SN',
    type: 'EQUAL',
  },
  {
    key: 'ctime',
    desc: '终端绑定时间',
    domType: 'DateRangeSelector',
    type: 'BETWEEN',
  },
  {
    key: 'trans_date',
    desc: '终端交易时间',
    domType: 'MonthRangerPicker',
    type: 'BETWEEN',
  },
]
