import React from 'react'
import { Spin } from 'antd'

import { LoadingWrapp } from './styled'

const Loading = () => {
  return (
    <LoadingWrapp><Spin /></LoadingWrapp>
  )
}

export default Loading
