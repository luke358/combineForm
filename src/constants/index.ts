import * as common from './public'
import type { FilterType } from './public'

/**
 * 配置步骤
 * 1. 定义展示tab: SCENEENUM，或者在已有tab中进行添加业务
 * 2. 定义业务菜单: BUSINESS_CATEGORY， 如果存在已有业务直接跳过
 * 3. 展示tab中导入业务菜单: SCENE_BUSINESS_CATEGORY [业务1, 业务2 ....]
 * 4. 定义业务查询筛选条件: 参考 TERMINAL_FILTER, 最后在 TYPE_FILTER 中注入
 * 5. 如果已有组件不能满足需求, 可以在 components/FormRender 中添加组件， 然后在 SearchForm 中的 renderComponent 方法中进行特定处理
 * 通过上述配置可以快速生成业务表单，极大减少开发时间
 */

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

export const TERMINAL_FILTER: Record<string, FilterType[]> = {
  PUBLIC: common.TERMINAL_FILTER,
}

export const TAG_FILTER: Record<string, FilterType[]> = {
  PUBLIC: common.TAG_FILTER,
}

export const LOG_FILTER: Record<string, FilterType[]> = {
  PUBLIC: common.LOG_FILTER,
  TEST: common.TEST_FILTER,
}

export const TYPE_FILTER: Record<string, Record<string, FilterType[]>> = {
  TERMINAL: TERMINAL_FILTER,
  TAG: TAG_FILTER,
  LOG: LOG_FILTER,
}

export const getFilterFields = (currentTab: string, currentBusiness: string) => TYPE_FILTER[currentTab][currentBusiness]
