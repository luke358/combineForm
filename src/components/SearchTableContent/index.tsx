import React from 'react'

interface SearchTableContentType {
  searchRender?: React.ReactNode | undefined
  tableRender?: React.ReactNode | undefined
  searchShow?: boolean | undefined
  tableShow?: boolean | undefined
  tableFlex?: boolean | undefined
  tableStyle?: React.CSSProperties
  searchStyle?: React.CSSProperties
}

const SearchTableContent: React.FC<SearchTableContentType> = ({
  searchRender,
  tableRender,
  tableStyle = {},
  searchStyle = {},
}) => {
  return (
    <>
      {searchRender && <div className="search-container" style={tableStyle}>{searchRender}</div>}
      {tableRender && (
        <div
          className="table-container"
          // style={{ height: tableFlex ? 'calc(100% - 104px' : 'auto' }}
          style={searchStyle}
        >
          {tableRender}
        </div>
      )}
    </>
  )
}

export default SearchTableContent
