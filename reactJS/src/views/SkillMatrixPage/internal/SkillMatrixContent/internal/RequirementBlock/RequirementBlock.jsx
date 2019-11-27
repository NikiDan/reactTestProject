import React, { Fragment, useState, useEffect } from 'react'
import { Popconfirm, Divider } from 'antd'

import * as p from '../../../../../../permissions'
import { checkPermission } from '../../../../../../helpers'
import { Heading, Modal, InputGroup, Loading } from '../../../../../../components'
import { RequirmentWrapp } from './styled'

const RequirementBlock = props => {
  const {
    user: { permissions },
    requirements: { list, isFetching },
    activeQualificationId,
    requirementsTypes,
    getRequirement,
    editRequirement,
    createRequirement,
    removeRequirement
  } = props

  useEffect(() => {
    getRequirement(activeQualificationId)
  }, [])

  const defaultRequirementState = {
    activeRequirementId: null,
    type_id: null,
    description: '',
    requirement: ''
  }

  const [isVisible, setVisible] = useState(false)

  const [requirement, setRequirement] = useState({ ...defaultRequirementState })

  const updateField = (field, value) => {
    setRequirement({
      ...requirement,
      [field]: value
    })
  }

  const showModal = item => {
    setVisible(!isVisible)
    if (item) {
      setRequirement({
        activeRequirementId: item.id,
        type_id: item.type ? item.type.id : null,
        description: item.description,
        requirement: item.requirement
      })
    }
  }

  const handleCancel = () => {
    setVisible(!isVisible)
    setRequirement({ ...defaultRequirementState })
  }

  const handleOk = () => {
    setVisible(!isVisible)
    return Promise.resolve()
      .then(() => {
        if (requirement.activeRequirementId) {
          return editRequirement(activeQualificationId, requirement)
        }
        return createRequirement(activeQualificationId, requirement)
      })
      .then(() => {
        setRequirement({ ...defaultRequirementState })
      })
  }

  const activeQualificationLevel = list.find(level => level.id === activeQualificationId)

  return (
    <Fragment>
      <Divider>
        <Heading style={{ marginBottom: 0 }}>Level Requirements</Heading>
      </Divider>
      <RequirmentWrapp>
        {isFetching && <Loading />}
        <RequirmentWrapp.List>
          {activeQualificationLevel && activeQualificationLevel.requirements.map(item =>
            <RequirmentWrapp.Item key={item.id}>
              <RequirmentWrapp.ItemName>
                {item.requirement}
              </RequirmentWrapp.ItemName>
              <RequirmentWrapp.ItemDescr>
                {item.type ? item.type.description : ''}
              </RequirmentWrapp.ItemDescr>
              <RequirmentWrapp.Settings>
                {checkPermission(permissions, [p.REQUIREMENTS_WRITE]) &&
                  <RequirmentWrapp.Button onClick={() => showModal(item)}>edit</RequirmentWrapp.Button>
                }
                {checkPermission(permissions, [p.REQUIREMENTS_DELETE]) &&
                  <Popconfirm
                    title='Are you sure delete this requirement'
                    okText='Yes'
                    cancelText='No'
                    onConfirm={() => { removeRequirement(item.id) }}
                  >
                    <RequirmentWrapp.Button>delete</RequirmentWrapp.Button>
                  </Popconfirm>
                }
              </RequirmentWrapp.Settings>
            </RequirmentWrapp.Item>
          )
          }
        </RequirmentWrapp.List>
        {checkPermission(permissions, [p.REQUIREMENTS_WRITE]) &&
          <RequirmentWrapp.Button onClick={() => showModal()}>Add new item</RequirmentWrapp.Button>
        }
      </RequirmentWrapp>
      { isVisible && <Modal
        title={`${requirement.activeRequirementId ? 'Update' : 'Create'} requirement`}
        visible
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputGroup
          kind='select'
          label='type'
          onChange={v => updateField('type_id', v)}
          defaultValue={requirement.activeRequirementId ? requirement.type_id : null}
          options={requirementsTypes}
        />
        <InputGroup
          kind='input'
          label='requirement'
          type='text'
          onChange={e => updateField('requirement', e.target.value)}
          defaultValue={requirement.activeRequirementId ? requirement.requirement : ''}
        />
        <InputGroup
          label='Description'
          kind='textarea'
          onChange={e => updateField('description', e.target.value)}
          autosize={{ minRows: 4, maxRows: 8 }}
          defaultValue={requirement.activeRequirementId ? requirement.description : ''}
        />
      </Modal>
      }
    </Fragment>
  )
}

export default RequirementBlock
