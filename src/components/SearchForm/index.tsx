import { Button, Col, Form, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { getFilterFields } from '../../constants'
import type { FilterType } from '../../constants/public'
import * as FormRender from '../FormRender'

interface SearchFormProps {
  onSubmit: () => void
  columns: any[]
  currentTab: string
  currentBusiness: string
  extraBtn: React.ReactNode[]
  loading: boolean
}

const FormItem = Form.Item
const Option = Select.Option
export default function SearchForm({ onSubmit, currentTab, currentBusiness, extraBtn, loading }: SearchFormProps) {
  const [filterList, setFilterList] = useState([])
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

  // TODO: 定义 base 基础表单
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

  const handleFormSubmit = (handleType: string) => {
    form.validateFields().then((values) => {
      console.log(values, handleType)

      switch (handleType) {
        case 'search':
          onSubmit()
          break
        case 'download':
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
