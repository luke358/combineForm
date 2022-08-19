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
