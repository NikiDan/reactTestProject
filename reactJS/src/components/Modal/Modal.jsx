import React from 'react'

import { AntModal } from './styled'

const Modal = ({ children, ...rest }) => {
  return (
    <AntModal closable={false} {...rest}>{children}</AntModal>
  )
}

export default Modal
