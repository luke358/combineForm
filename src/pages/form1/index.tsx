import React, { useState } from 'react'
import { Button, Divider, Radio, Tabs } from 'antd'
import DownloadModal from '../../components/DownloadModal'
import SearchTableContent from '../../components/SearchTableContent'
import TableHeaderModal from '../../components/TableHeaderModal'
import { BUSINESS_CATEGORY, SCENEENUM, SCENE_BUSINESS_CATEGORY } from '../../constants'
import SearchForm from '../../components/SearchForm'

const TabPane = Tabs.TabPane

export default function index() {
  const [loading, setLoading] = useState(false)
  const [currentTab, setCurrentTab] = useState(Object.keys(SCENEENUM)[0])
  const [currentBusiness, setCurrentBusiness] = useState(SCENE_BUSINESS_CATEGORY[currentTab][0])
  // const [tableVisiable, setTableVisiable] = useState(false)

  const changeTab = (key: string) => {
    setCurrentTab(key)
    setCurrentBusiness(SCENE_BUSINESS_CATEGORY[key][0])
  }
  const changeBusiness = (e: any) => {
    // console.log(e.target.value);
    setCurrentBusiness(e.target.value)
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
  const handleSubmitFilter = (searchParams: any) => {
    const params = {
      currentTab,
      currentBusiness,
      searchParams,
    }
    setLoading(true)
    console.log(params)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  const renderFilter = () => {
    return (<>
      <p>筛选条件</p>
      <SearchForm
        onSubmit={handleSubmitFilter}
        columns={[]}
        currentTab={currentTab}
        currentBusiness={currentBusiness}
        loading={loading}
        extraBtn={[
          <Button
            key="headSetting"
            style={{ marginLeft: 8 }}
            // onClick={() => setTableVisiable(true)}
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
  return (
    <>
      <SearchTableContent
        searchRender={searchRender()}
      />
      <DownloadModal />
      <TableHeaderModal />
    </>
  )
}
