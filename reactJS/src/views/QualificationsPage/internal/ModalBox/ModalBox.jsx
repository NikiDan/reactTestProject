import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

const ModalBox = ({ children, ...rest }) => {
  return (
    <Modal closable={false} {...rest}>{children}</Modal>
  )
}

ModalBox.propTypes = {
  children: PropTypes.node
}

export default ModalBox
