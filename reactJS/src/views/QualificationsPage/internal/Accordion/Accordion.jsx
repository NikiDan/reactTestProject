import React, { Fragment, useState } from 'react'
import { Collapse, Icon, Modal, Input, Select, Popconfirm } from 'antd'

import * as p from '../../../../permissions'
import { checkPermission } from '../../../../helpers'
import { TableList, AccordionSettings } from './internal'
import { AntAccordeon } from './styled'
import { Button } from '../../../../components'
import { dataImg } from './img'

const Accordion = props => {
  const {
    user: { permissions },
    data,
    removeQualificationType,
    updateQualificationType,
    createQualification,
    removeQualification,
    updateQualification
  } = props

  const columns = [{
    title: 'Qualification Level',
    dataIndex: 'name'
  },
  {
    title: 'Previous Qualification Level',
    dataIndex: 'previous.name'
  },
  {
    title: 'Qualification Description',
    dataIndex: 'description'
  },
  {
    title: 'Actions',
    render: (level) => {
      return (
        <Fragment>
          {checkPermission(permissions, [p.QUALIFICATIONS_WRITE]) &&
            <Icon style={{ marginRight: 10 }} onClick={() => { showEditModal(level) }} type='edit' />
          }
          {checkPermission(permissions, [p.QUALIFICATIONS_DELETE]) &&
            <Popconfirm
              title='Are you sure delete this item?'
              onConfirm={() => removeQualification(level.id)}
            >
              <Icon type='delete' />
            </Popconfirm>
          }
        </Fragment>
      )
    }
  }]

  const [isShow, setShow] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [activeTypeId, setActiveTypeId] = useState(null)
  const [previousQualificationLevelId, setPreviousLevelId] = useState('')
  const [qualificationDescription, setQualificationDescription] = useState('')
  const [activeType, setActiveType] = useState(null)
  const [editedQual, setEditedQual] = useState({})
  const [activeAccordionKey, setActiveAccordionKey] = useState('')

  const showEditModal = obj => {
    setShow(!isShow)
    setPreviousLevelId(null)
    setEditedQual(obj)
  }

  const closeEditModal = () => {
    setActiveType(null)
    setActiveTypeId(null)
    setPreviousLevelId(null)
    setShow(false)
  }

  const showModal = type => {
    setActiveType(type)
    setActiveTypeId(type.id)
    setVisible(!isVisible)
  }

  const handleCancel = () => {
    setVisible(!isVisible)
    setActiveType(null)
    setActiveTypeId(null)
    setPreviousLevelId(null)
  }

  const create = () => {
    createQualification(activeTypeId, { name, previous_qualification_level_id: previousQualificationLevelId, description: qualificationDescription })
    setName('')
    setActiveType(null)
    setActiveTypeId(null)
    setPreviousLevelId(null)
    setVisible(false)
  }

  const update = () => {
    const data = {
      name: name !== '' ? name : editedQual.name,
      previous_qualification_level_id: previousQualificationLevelId !== null ? previousQualificationLevelId : editedQual.previous.id,
      description: qualificationDescription
    }
    updateQualification(editedQual.id, data)
    setName('')
    setActiveType(null)
    setActiveTypeId(null)
    setPreviousLevelId(null)
    setShow(false)
  }

  const Panel = Collapse.Panel
  const Option = Select.Option
  const { TextArea } = Input

  const activeQualifications = (data.find(i => i.id === Number(activeAccordionKey)) || {}).qualifications
  console.log(previousQualificationLevelId)
  return (
    <Fragment>
      <AntAccordeon accordion onChange={setActiveAccordionKey} activeKey={activeAccordionKey}>
        {data.map((qualification, index) =>
          <Panel
            key={qualification.id}
            header={qualification.name}
            extra={
              <AccordionSettings
                qualification={qualification}
                removeQualificationType={removeQualificationType}
                updateQualificationType={updateQualificationType}
              />
            }>
            <TableList
              pagination={false}
              dataSource={qualification.qualifications}
              rowKey='id'
              columns={columns}
              size='middle'
              locale={{ emptyText: (<span>
                  No qualifications found
                <img src={dataImg} alt='' />
              </span>)
              }}
            />
            {checkPermission(permissions, [p.QUALIFICATIONS_WRITE]) &&
              <Button style={{ marginTop: 20 }} onClick={() => showModal(qualification)}>+add new</Button>
            }
          </Panel>
        )}
      </AntAccordeon>
      {isShow &&
      <Modal
        title='edit qualification'
        visible
        onCancel={closeEditModal}
        onOk={update}
      >
        <p>Qualification name</p>
        <Input
          type='text'
          onChange={e => setName(e.target.value)}
          defaultValue={editedQual.name}
        />
        <p>Previous Qualification</p>
        <Select
          style={{ width: 300 }}
          placeholder='Select a previous qualification level'
          onChange={(value) => setPreviousLevelId(value)}
          defaultValue={editedQual.previous ? editedQual.previous.id : ''}
        >
          {(activeQualifications || []).map(option =>
            <Option value={option.id} key={option.id}>{option.name}</Option>
          )}
        </Select>
        <p>Qualification Description</p>
        <TextArea
          defaultValue={editedQual.description}
          onChange={e => setQualificationDescription(e.target.value)}
        />
      </Modal>
      }

      <Modal
        title='add new qualification'
        visible={isVisible}
        onOk={create}
        onCancel={handleCancel}
      >
        <Input
          type='text'
          placeholder='qualification name'
          onChange={e => { setName(e.target.value) }}
          value={name}
        />
        <Select
          style={{ width: 300 }}
          placeholder='Select a previous qualification level'
          onChange={(value) => setPreviousLevelId(value)}
        >
          {activeType && activeType.qualifications && activeType.qualifications.map(option =>
            <Option value={option.id} key={option.id}>{option.name}</Option>
          )}
        </Select>
        <TextArea
          onChange={e => setQualificationDescription(e.target.value)}
        />
      </Modal>
    </Fragment>
  )
}

export default Accordion
