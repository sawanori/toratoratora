import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <h1>ヘッダー</h1>
      {children}
      <h1>フッター</h1>
    </div>
  )
}

export default Layout
