import { Button, Col, Form, Row, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { cloneDeep, isEmpty, isObject } from 'lodash'
import { getFilterFields } from '../../constants'
import type { FilterType } from '../../constants/public'
import * as FormRender from '../FormRender'

interface SearchFormProps {
  onSubmit: (params: any) => void
  columns: any[]
  currentTab: string
  currentBusiness: string
  extraBtn: React.ReactNode[]
  loading: boolean
}

const FormItem = Form.Item
const Option = Select.Option
export default function SearchForm({ onSubmit, columns, currentTab, currentBusiness, extraBtn, loading }: SearchFormProps) {
  const [filterList, setFilterList] = useState<FilterType[]>([])
  const [form] = Form.useForm()
  useEffect(() => {
    setFilterList(getFilterFields(currentTab, currentBusiness))
    form.resetFields()
  }, [currentTab, currentBusiness])

  const renderComponent = (component: FilterType) => {
    const domType = component.domType as keyof typeof FormRender
    const options = component.options || {}
    const searchSqlType = component.type
    const placeholder = component.placeholder

    const COMPONENT = FormRender[domType]

    if (domType === 'Input')
      return <COMPONENT placeholder={placeholder} />

    if (domType === 'Select') {
      const selectOptions = options.selectOptions || []
      const selectMode = options.selectMode || ''

      return (
        <Select mode={selectMode} showSearch allowClear placeholder={placeholder}>
          {selectOptions.map((item: any) => (
            <Option value={item.value} key={item.key}>
              {item.key}
            </Option>
          ))}
        </Select>
      )
    }
    if (domType) {
      return (
        <COMPONENT
          currentTab={currentTab}
          currentBusiness={currentBusiness}
          placeholder={placeholder}
          type={searchSqlType}
          style={{ width: '100%' }}
          {...options}
        />
      )
    }

    return null
  }

  // TODO: 定义 base 基础表单, 可以通过第二个参数来指定表单
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const customForm = (items: FilterType[], type = 'base') => {
    return <Row gutter={24} >
      {items.map((item) => {
        const formItemStyle = item.formItemStyle || {}
        return <Col span={8} key={item.key}>
          <FormItem label={item.desc} style={formItemStyle} name={item.key}>
            {renderComponent(item)}
          </FormItem>
        </Col>
      })}
    </Row>
  }
  /**
   *
   * @param handleType search download ...
   */
  const handleFormSubmit = (handleType: string) => {
    if (columns.length === 0) {
      message.error('请先设置表头')
      return
    }
    const filtesArr = [/* ...baseFilterList 基础过滤条件 */...filterList]

    form.validateFields().then((values) => {
      const params = cloneDeep(values)

      const newParams: any[] = []
      Object.keys(params).forEach((item) => {
        if (isEmpty(item)) { delete params[item] }
        // 业务特殊组件
        else if (isObject(params[item]) && params[item].type && params[item].value) {
          newParams.push({
            key: item,
            ...params[item],
          })
        }
        else {
          const obj = filtesArr.find(fi => fi.key === item)
          const type = obj ? obj.type : null
          newParams.push({
            key: item,
            value: params[item],
            type,
          })
        }
      })

      switch (handleType) {
        case 'search':
          onSubmit(newParams)
          break
        case 'download':
          // eslint-disable-next-line no-console
          console.log('download')
      }
    })
  }

  const handleFormReset = () => {
    form.resetFields()
  }

  const renderButtons = () => {
    return <Row>
      <Col span={24} style={{ textAlign: 'right' }}>
        {extraBtn || null}
        <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>
          重置
        </Button>
        <Button
          loading={loading}
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => handleFormSubmit('search')}
        >
          {loading ? 'Loading' : '查询'}
        </Button>
      </Col>
    </Row>
  }
  return (
    <>
      <Form form={form}>
        {customForm(filterList, 'base')}
        {renderButtons()}
      </Form>
    </>
  )
}
