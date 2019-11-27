import React, { Fragment, useState, useEffect } from 'react'

import _ from 'lodash'
import { Avatar, Icon } from 'antd'

import { checkPermission, createDepartmentRoad } from '../../helpers'
import * as p from '../../permissions'
import { Table, Heading, InputGroup, Modal } from '../../components'
import { FlexRow, ModalItem } from './styled'

const defaultState = {
  activeUserId: null,
  activeRole: '',
  activeDepartmentRoad: [],
  activeDepartmentId: [],
  activeRoleId: null
}

const ManageUsersPage = props => {
  const {
    getUsers,
    getDepartments,
    getRoles,
    updateUserById,
    user,
    users: { isFetching, data },
    departments: { list },
    roles } = props

  useEffect(() => {
    getUsers({ perpage: 10, page: 1 })
    getDepartments()
    getRoles()
  }, [getUsers, getDepartments, getRoles])

  const roleArray = roles.list

  const [state, setState] = useState({ ...defaultState })
  const [isVisible, setVisible] = useState(false)

  const columns = [
    {
      title: 'Employee',
      key: 'employee',
      render: level => {
        return (
          <Fragment>
            <Avatar size='medium' style={{ marginRight: 10 }} src={level.picture && level.picture} />
            <span>{level.name}</span>
          </Fragment>
        )
      }
    }, {
      title: 'Department',
      key: 'department',
      render: level => {
        return (
          <Fragment>
            {level.department === null ? '' : createDepartmentRoad(level.department, 'name').reverse().join(' / ')}
          </Fragment>
        )
      }
    }, {
      title: 'Role',
      key: 'role',
      render: level => {
        return (
          <Fragment>
            {level.roles[0] && level.roles[0].name}
          </Fragment>
        )
      }
    }, {
      title: 'Actions',
      key: 'actions',
      render: level => {
        return (
          <Fragment>
            {checkPermission(user.permissions, [p.USERS_WRITE])
              ? <Fragment>
                <Icon onClick={() => handleOpen(level)} type='setting' style={{ marginRight: 10 }} />
                <Icon type='delete' />
              </Fragment>
              : <p>No access</p>
            }
          </Fragment>
        )
      }
    }]

  const handleOpen = (item) => {
    setVisible(true)
    setState({
      ...state,
      activeUserId: item.id,
      activeRole: item.roles[0].name,
      activeRoleId: item.roles[0].id,
      activeDepartmentRoad: createDepartmentRoad(item.department, 'id').reverse()
    })
  }

  const updateField = (field, value) => {
    setState({
      ...state,
      [field]: value
    })
  }
  const handleOk = () => {
    setVisible(!isVisible)
    const depId = state.activeDepartmentId.length > 0 ? state.activeDepartmentId : state.activeDepartmentRoad
    const userData = {
      'department_id': depId.pop(),
      'role_id': state.activeRoleId
    }
    return Promise.resolve()
      .then(() => {
        return updateUserById(state.activeUserId, userData)
      })
      .then(() => {
        setState({ ...defaultState })
      })
  }
  const handleCancel = () => {
    setVisible(!isVisible)
    setState({ ...defaultState })
  }

  const handleSearch = value => {
    if (value.length) {
      getUsers({ perpage: 10, page: 1, search: value })
    } else {
      getUsers({ perpage: 10, page: 1 })
    }
  }

  const handleDepartment = value => {
    const depId = [...value].pop()
    getUsers({ perpage: 10, page: 1, department_id: depId })
  }

  const paginationSettings = {
    total: data ? data.total : 0,
    onChange: page => {
      getUsers({ perpage: 10, page: page })
    }
  }

  return (
    <Fragment>
      <Heading>Employee</Heading>
      {checkPermission(user.permissions, [p.USERS_WRITE]) &&
        <FlexRow>
          {user.roles[0].name === 'Admin' &&
          <FlexRow.Item>
            <p>Filter by department:</p>
            <InputGroup
              kind='cascader'
              placeholder='Choose department'
              fieldNames={{ label: 'name', value: 'id', children: 'children' }}
              optionsList={list}
              onChange={_.debounce(handleDepartment, 500)}
            />
          </FlexRow.Item>
          }
          <FlexRow.Item>
            <p>Filter by keywords:</p>
            <InputGroup
              kind='input'
              placeholder='Type smth'
              onChange={e => _.debounce(handleSearch, 500)(e.target.value)}
            />
          </FlexRow.Item>
        </FlexRow>
      }
      <Table
        dataSource={data ? data.data : []}
        rowKey='id'
        columns={columns}
        loading={isFetching}
        pagination={paginationSettings}
      />
      {isVisible &&
        <Modal
          title='Change deparment or role'
          onOk={handleOk}
          onCancel={handleCancel}
          visible
        >
          <ModalItem>
            {list &&
            <InputGroup
              kind='cascader'
              label='Change department'
              fieldNames={{ label: 'name', value: 'id', children: 'children' }}
              optionsList={list}
              onChange={value => updateField('activeDepartmentId', value)}
              defaultValue={state.activeUserId ? state.activeDepartmentRoad : []}
              changeOnSelect
            />
            }
          </ModalItem>
          <ModalItem>
            {roleArray &&
            <InputGroup
              kind='select'
              options={roleArray}
              label='Change role'
              defaultValue={state.activeUserId ? state.activeRole : ''}
              onChange={value => updateField('activeRoleId', value)}
            />
            }
          </ModalItem>
        </Modal>
      }
    </Fragment>
  )
}

export default ManageUsersPage
