import React, { Fragment, useState } from 'react'
import { Divider } from 'antd'

import { Heading, Loading, Modal, InputGroup } from '../../../../../../components'
import { MaterialItem } from './internal'
import { MaterialWrapp } from './styled'
import { checkPermission } from '../../../../../../helpers'
import * as p from '../../../../../../permissions'

const defaultState = {
  isVisible: false,
  type: 'material',
  activeItemId: null,
  modalName: '',
  modalDescription: '',
  modalLink: ''
}

const MaterialBlock = props => {
  const {
    user: { permissions },
    skill,
    fetch,
    createMaterial,
    createCriteria,
    updateMaterial,
    updateCriteria } = props

  const { materials = [], criteria = [], id } = skill || {}

  const [state, setState] = useState({ ...defaultState })
  const { isVisible, type, activeItemId, modalName, modalDescription, modalLink } = state

  const openModal = (modalType, item) => {
    let newState = {
      ...state,
      isVisible: true,
      type: modalType
    }

    if (item) {
      newState = {
        ...newState,
        activeItemId: item.id,
        modalLink: item.link,
        modalName: item.name,
        modalDescription: item.description
      }
    }
    setState({ ...newState })
  }

  const handleCancel = () => {
    setState({ ...defaultState })
  }

  const handleInput = (field, value) => {
    setState({
      ...state,
      [field]: value
    })
  }

  const handleOkMaterial = () => {
    setState({
      ...state,
      isVisible: false
    })
    const data = {
      skill_id: skill.id,
      name: modalName,
      link: modalLink
    }
    return Promise.resolve()
      .then(() => {
        if (activeItemId) {
          console.log(data)
          return updateMaterial(activeItemId, data)
        } else {
          return createMaterial(data)
        }
      })
      .then(() => {
        setState({ ...defaultState })
      })
  }

  const handleOkCriteria = () => {
    setState({
      ...state,
      isVisible: false
    })
    const data = {
      skill_id: skill.id,
      description: modalDescription
    }
    return Promise.resolve()
      .then(() => {
        if (activeItemId) {
          console.log(activeItemId, data)
          updateCriteria(activeItemId, data)
        } else {
          return createCriteria(data)
        }
      })
      .then(() => {
        setState({ ...defaultState })
      })
  }

  return (
    <Fragment>
      <MaterialWrapp>
        {fetch && <Loading /> }
        <MaterialWrapp.GeneralItem>
          {!!materials.length && <Divider orientation='left'>
            <Heading style={{ marginBottom: 0 }}>Material</Heading>
          </Divider>
          }

          {id && !materials.length &&
          <MaterialWrapp.HelpBlock>
            <Divider orientation='left'>
              <Heading style={{ marginBottom: 0 }}>Material</Heading>
            </Divider>
            <MaterialWrapp.HelpText>The list of materials is empty. Add new material</MaterialWrapp.HelpText>
          </MaterialWrapp.HelpBlock>
          }

          <MaterialWrapp.List>
            {materials.map(item =>
              <MaterialItem
                key={item.id}
                item={item}
                type='material'
                onClick={() => openModal('material', item)}
              />
            )}
          </MaterialWrapp.List>

          {checkPermission(permissions, [p.MATERIALS_WRITE]) &&
            <Fragment>
              {id && <MaterialWrapp.Button onClick={() => openModal('material')}>add new</MaterialWrapp.Button>}
            </Fragment>
          }
        </MaterialWrapp.GeneralItem>
        <MaterialWrapp.GeneralItem>
          {!!criteria.length && <Divider orientation='left'>
            <Heading style={{ marginBottom: 0 }}>Success criteria</Heading>
          </Divider>
          }

          {id && !criteria.length &&
          <MaterialWrapp.HelpBlock>
            <Divider orientation='left'>
              <Heading style={{ marginBottom: 0 }}>Success criteria</Heading>
            </Divider>
            <MaterialWrapp.HelpText>The list of success criteria is empty. Add new criteria</MaterialWrapp.HelpText>
          </MaterialWrapp.HelpBlock>
          }

          <MaterialWrapp.List>
            {criteria.map(item =>
              <MaterialItem
                key={item.id}
                item={item}
                type='criteria'
                onClick={() => openModal('criteria', item)}
              />
            )}
          </MaterialWrapp.List>

          {checkPermission(permissions, [p.SKILL_SUCCESS_CRITERIAS_WRITE]) &&
            <Fragment>
              {id && <MaterialWrapp.Button onClick={() => openModal('criteria')}>add new</MaterialWrapp.Button>}
            </Fragment>
          }
        </MaterialWrapp.GeneralItem>
      </MaterialWrapp>
      {isVisible && <Modal
        title={`${activeItemId ? 'Update' : 'Create'} ${type}`}
        visible
        onOk={type === 'material' ? handleOkMaterial : handleOkCriteria}
        onCancel={handleCancel}
      >
        {type === 'material'
          ? <Fragment>
            <InputGroup
              type='text'
              kind='input'
              label='Material name'
              onChange={e => handleInput('modalName', e.target.value)}
              value={modalName}
            />
            <InputGroup
              type='text'
              kind='input'
              label='Material link'
              onChange={e => handleInput('modalLink', e.target.value)}
              value={modalLink}
            />
          </Fragment>
          : <InputGroup
            type='text'
            kind='textarea'
            label='Criteria description'
            autosize={{ minRows: 4, maxRows: 8 }}
            onChange={e => handleInput('modalDescription', e.target.value)}
            value={modalDescription}
          />
        }
      </Modal>
      }
    </Fragment>
  )
}

export default MaterialBlock
