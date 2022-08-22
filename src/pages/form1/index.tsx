import React, { useState } from 'react'
import { Button, Divider, Radio, Table, Tabs } from 'antd'
// import DownloadModal from '../../components/DownloadModal'
import SearchTableContent from '../../components/SearchTableContent'
import TableHeaderModal from '../../components/TableHeaderModal'
import { BUSINESS_CATEGORY, SCENEENUM, SCENE_BUSINESS_CATEGORY } from '../../constants'
import SearchForm from '../../components/SearchForm'
import { createRandomTableData } from '../../utils/fakerData'
const TabPane = Tabs.TabPane

export default function index() {
  const [loading, setLoading] = useState(false)
  const [currentTab, setCurrentTab] = useState(Object.keys(SCENEENUM)[0])
  const [currentBusiness, setCurrentBusiness] = useState(SCENE_BUSINESS_CATEGORY[currentTab][0])
  const [tableModalVisiable, setTableModalVisiable] = useState(false)
  const [columns, setColumns] = useState<any[]>([])
  const [list, setList] = useState<any[]>([])
  const [total, setTotal] = useState<number>(0)

  const clearData = () => {
    setList([])
    setTotal(0)
    setColumns([])
  }

  const changeTab = (key: string) => {
    setCurrentTab(key)
    setCurrentBusiness(SCENE_BUSINESS_CATEGORY[key][0])
    clearData()
  }
  const changeBusiness = (e: any) => {
    // console.log(e.target.value);
    setCurrentBusiness(e.target.value)
    clearData()
  }

  const renderBusinessCategory = () => <div>
    <p>业务分类</p>
    <Radio.Group
      onChange={changeBusiness}
      value={currentBusiness}
    >
      {SCENE_BUSINESS_CATEGORY[currentTab].map((item: string, index: number) => (
        <Radio key={index} value={item}>
          {BUSINESS_CATEGORY[item]}
        </Radio>
      ))}
    </Radio.Group>
  </div>

  const initData = () => {
    const data = []
    for (let i = 0; i < 46; i++)
      data.push(createRandomTableData())
    setList(data)
    setTotal(46)
  }

  const handleSubmitFilter = (searchParams: any) => {
    const params = {
      currentTab,
      currentBusiness,
      searchParams,
    }
    setLoading(true)
    // eslint-disable-next-line no-console
    console.log(params)
    setTimeout(() => {
      setLoading(false)
      // 发送网络请求，查询
      initData()
    }, 2000)
  }

  const renderFilter = () => {
    return (<>
      <p>筛选条件</p>
      <SearchForm
        onSubmit={handleSubmitFilter}
        columns={columns}
        currentTab={currentTab}
        currentBusiness={currentBusiness}
        loading={loading}
        extraBtn={[
          <Button
            key="headSetting"
            style={{ marginLeft: 8 }}
            onClick={() => setTableModalVisiable(true)}
          >
            表头设置
          </Button>,
        ]}
      ></SearchForm>
    </>)
  }

  const searchRender = () =>
    <>
      <Tabs defaultActiveKey={currentTab} onChange={changeTab} animated={true}>
        {Object.keys(SCENEENUM).map((item: string) => (
          <TabPane tab={SCENEENUM[item]} key={item} />
        ))}
      </Tabs>
      {renderBusinessCategory()}
      <Divider />
      {renderFilter()}
    </>
  const tableRender = () => {
    const pagination = { total }
    return columns.length
      ? (
        <div className="combine-table-container" style={{ overflow: 'auto' }}>
          <Table
            loading={loading}
            rowKey={(item: any) => item.id}
            dataSource={list}
            columns={columns}
            pagination={pagination}
            className="combine-table"
          />
          <p className="total-num">总{total}条数据</p>
        </div>
        )
      : null
  }

  const handleOk = (val: any) => {
    setColumns(val)
    setTableModalVisiable(false)
  }

  return (
    <>
      <SearchTableContent
        searchRender={searchRender()}
        tableRender={tableRender()}
      />
      <TableHeaderModal
        currentTab={currentTab}
        currentBusiness={currentBusiness}
        visible={tableModalVisiable}
        onCancel={() => setTableModalVisiable(false)}
        onOk={handleOk}
      />
      {/* <DownloadModal /> */}
    </>
  )
}
