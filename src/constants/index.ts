import * as common from './public'

export const SCENEENUM: Record<string, string> = {
  TERMINAL: '终端',
  TAG: '标签筛选',
  LOG: '维护日志',
}

export const BUSINESS_CATEGORY: Record<string, string> = {
  PUBLIC: '公共',
  TEST: '测试',
}
export const SCENE_BUSINESS_CATEGORY: Record<string, Array<string>> = {
  TERMINAL: ['PUBLIC'],
  TAG: ['PUBLIC'],
  LOG: ['TEST', 'PUBLIC'],
}

export const TERMINAL_FILTER = {
  PUBLIC: common.TERMINAL_FILTER,
}

export const TAG_FILTER = {
  PUBLIC: common.TAG_FILTER,
}

export const LOG_FILTER = {
  PUBLIC: common.LOG_FILTER,
  TEST: common.TEST_FILTER,
}

export const TYPE_FILTER: Record<string, any> = {
  TERMINAL: TERMINAL_FILTER,
  TAG: TAG_FILTER,
  LOG: LOG_FILTER,
}

export const getFilterFields = (currentTab: string, currentBusiness: string) => TYPE_FILTER[currentTab][currentBusiness]
