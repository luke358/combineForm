import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Modal } from 'antd'
import { find, isFunction, map } from 'lodash'
import { useSyncState } from '../../hooks/useSyncState'
import { getTableHeader } from '../../utils/table'

const CheckboxGroup = Checkbox.Group

interface TableHeaderModalProps {
  currentTab: string
  currentBusiness: string
  visible: boolean
  onCancel: () => void
  onOk: (val: any) => void
}
// tableHeader 可以进行扩展 [...tableHeader, ...baseHeader] 同筛选条件
export default function TableHeaderModal({ visible, onOk, onCancel, currentBusiness, currentTab }: TableHeaderModalProps) {
  const [checkedFileds, setCheckedFileds] = useSyncState<any[]>([])
  const [tableHeader, setTableHeader] = useState<any[]>([])

  const handleSelectAll = () => {
    setCheckedFileds(tableHeader.map((item: any) => item.key))
  }

  const handleCancelAll = () => {
    setCheckedFileds([])
  }

  const onChange = (val: any) => {
    setCheckedFileds(val)
  }

  const handleOk = () => {
    const columns = map(checkedFileds.current, item =>
      find(tableHeader, lItem => lItem.key === item),
    ).map(val => ({
      title: val.desc,
      dataIndex: val.key,
      desc: val.desc,
      key: val.key,
    }))
    if (isFunction(onOk))
      onOk(columns)
  }
  const initTableHeader = () => {
    // 根据业务发送请求获取表头，这里直接写死
    const header = getTableHeader(currentBusiness, currentTab)
    setTableHeader(header)
    return header
  }
  useEffect(() => {
    initTableHeader()
  }, [currentTab, currentBusiness])

  useEffect(() => {
    const fileds = tableHeader.map((item: any) => item.key)
    setCheckedFileds(fileds)
    handleOk()
  }, [tableHeader])

  const renderCheckbox = () => {
    return tableHeader.map((item, index) => {
      return (
        <Checkbox
          style={index === 0 ? { marginLeft: 8, marginBottom: 10 } : { marginBottom: 10 }}
          value={item.key}
          key={item.key}
        >
          {item.desc}
        </Checkbox>
      )
    })
  }

  return (
    <Modal
      visible={visible}
      title="表头设置"
      onOk={handleOk}
      onCancel={onCancel}
      width="80%"
      footer={[
        <Button key="selectAll" onClick={handleSelectAll}>
          全选
        </Button>,
        <Button key="selectNone" onClick={handleCancelAll}>
          全不选
        </Button>,
        <Button key="sure" type="primary" onClick={handleOk}>
          确定
        </Button>,
      ]}
    >
      <CheckboxGroup value={checkedFileds.current} onChange={onChange}>
        <div style={{ marginTop: 24 }}>{renderCheckbox()}</div>
      </CheckboxGroup>
    </Modal>
  )
}
