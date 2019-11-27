import React, { Fragment, useState, useEffect } from 'react'

import { Button, Preloader, Heading, Modal, InputGroup } from '../../components'
import { Accordion } from './internal'
import * as p from '../../permissions'
import { checkPermission } from '../../helpers'

const QualificationsPage = props => {
  const {
    user: { permissions },
    qualifications: { list, isFetching },
    getQualificationsTypes,
    createQualificationType,
    removeQualificationType,
    updateQualificationType,
    createQualification,
    removeQualification,
    updateQualification
  } = props
  const [isVisible, setVisible] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    getQualificationsTypes()
  }, [])

  const showModal = () => {
    setVisible(!isVisible)
  }
  const handleCancel = () => {
    setVisible(!isVisible)
  }

  const create = () => {
    createQualificationType({ name })
    setName('')
    setVisible(false)
  }

  return (
    <Fragment>
      <Heading>Qualifications</Heading>
      { isFetching
        ? <Preloader />
        : <Fragment>
          <Accordion
            updateQualificationType={updateQualificationType}
            removeQualificationType={removeQualificationType}
            createQualification={createQualification}
            removeQualification={removeQualification}
            updateQualification={updateQualification}
            data={list}
          />
          {checkPermission(permissions, [p.QUALIFICATION_TYPES_WRITE]) &&
            <Button style={{ marginTop: 20 }} onClick={showModal}>+add new</Button>
          }
        </Fragment>
      }
      <Modal
        title='add new qualification type'
        visible={isVisible}
        onOk={create}
        onCancel={handleCancel}
      >
        <InputGroup
          type='text'
          kind='input'
          placeholder='qualification type name'
          onChange={e => { setName(e.target.value) }}
          value={name}
          label='Qualification name'
        />
      </Modal>
    </Fragment>
  )
}

export default QualificationsPage
