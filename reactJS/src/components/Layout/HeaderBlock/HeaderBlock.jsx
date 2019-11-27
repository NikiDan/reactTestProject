import React from 'react'

import { Layout } from 'antd'
import './HeaderBlock.scss'

const { Header } = Layout

const HeaderBlock = ({ children }) => {
  return (
    <Header className='header'>{children}</Header>
  )
}

export default HeaderBlock
