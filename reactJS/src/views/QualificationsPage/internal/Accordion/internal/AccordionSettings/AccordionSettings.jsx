import React, { Fragment, useState } from 'react'

import * as p from '../../../../../../permissions'
import { checkPermission } from '../../../../../../helpers'
import { Icon, Popconfirm } from 'antd'

import { ModalBox } from '../../../../internal'

const AccordionSettings = props => {
  const {
    user: { permissions },
    qualification,
    removeQualificationType,
    updateQualificationType
  } = props

  const [isVisible, setVisible] = useState(false)
  const [newName, setNewName] = useState('')

  const showModal = () => {
    setVisible(!isVisible)
  }

  const handleCancel = () => {
    setVisible(!isVisible)
  }

  const update = () => {
    qualification.name = newName
    updateQualificationType(qualification.id, qualification)
  }

  return (
    <Fragment>
      {checkPermission(permissions, [p.QUALIFICATION_TYPES_WRITE]) &&
        <Icon
          style={{ marginRight: 10 }}
          type='edit'
          onClick={e => {
            e.stopPropagation()
            showModal()
          }}
        />
      }
      {checkPermission(permissions, [p.QUALIFICATION_TYPES_DELETE]) &&
        <Popconfirm
          title='Are you sure delete this item?'
          onConfirm={e => {
            e.stopPropagation()
            removeQualificationType(qualification.id)
          }}
          okText='Yes'
          cancelText='No'
        >
          <Icon
            type='delete'
            onClick={e => e.stopPropagation()}
          />
        </Popconfirm>
      }
      <ModalBox
        title='edit qualification'
        visible={isVisible}
        onCancel={handleCancel}
        onOk={update}
      >
        <input
          type='text'
          onChange={e => { setNewName(e.target.value) }}
          defaultValue={qualification.name}
        />
      </ModalBox>
    </Fragment>
  )
}

export default AccordionSettings
