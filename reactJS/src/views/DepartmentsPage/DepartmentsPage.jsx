import React, { useEffect, useState, Fragment } from 'react'
import { Modal, Input, Spin } from 'antd'

import { Button, Preloader, Heading } from '../../components'
import { DepartmentItem } from './internal'
import { DepartmentContent, CardsWrapp } from './styled'
import { api } from '../../services'

const DepartmentsPage = props => {
  const {
    departments: { isFetching }
  } = props

  useEffect(() => {
    api.departments.getDepartments()
      .then(({ data }) => {
        addDepartmentsList([data])
      })
    return () => {
      api.departments.getDepartments()
    }
  }, [])

  const [name, setName] = useState('')

  const [activeDepartment, setActiveDepartment] = useState(null)

  const [isVisible, setVisible] = useState(false)

  const [modalItemIndex, setModalItemIndex] = useState(null)

  const [departmentsList, addDepartmentsList] = useState([])

  const [activeDepartments, addActiveDepartment] = useState([])

  const [spinners, addSpinner] = useState([false])

  const handleClick = (element, index) => {
    addActiveDepartment([
      ...activeDepartments.slice(0, index),
      element
    ])

    addSpinner([
      ...spinners.slice(0, index + 1),
      true
    ])

    return api.departments.getDepartmentChildren(element.id)
      .then(({ data }) => {
        addDepartmentsList([
          ...departmentsList.slice(0, index + 1),
          data || []
        ])

        addSpinner([
          ...spinners.slice(0, index + 1),
          false
        ])
      })
  }

  const showModal = (index, department) => {
    setName(department ? department.name : '')
    setVisible(!isVisible)
    setModalItemIndex(index || null)
    setActiveDepartment(department)
  }

  const handleCancel = () => {
    setVisible(false)
    setModalItemIndex(null)
  }

  const update = () => {
    const parent = activeDepartments[modalItemIndex - 1]
    const item = {
      name,
      parent_id: parent && parent.id
    }

    setName('')
    handleCancel()

    addSpinner([
      ...spinners.slice(0, modalItemIndex),
      true,
      ...spinners.slice(modalItemIndex + 1)
    ])

    return api.departments.updateDepartmentById(activeDepartment.id, item)
      .then(() => {
        addSpinner([
          ...spinners.slice(0, modalItemIndex),
          true,
          ...spinners.slice(modalItemIndex + 1)
        ])
        setActiveDepartment(null)

        return Promise.resolve()
          .then(() => {
            if (parent) {
              return api.departments.getDepartmentChildren(parent.id)
            }
            return api.departments.getDepartments()
          })
          .then(({ data }) => {
            addDepartmentsList([
              ...departmentsList.slice(0, modalItemIndex),
              data || [],
              ...departmentsList.slice(modalItemIndex + 1)
            ])
            addSpinner([
              ...spinners.slice(0, modalItemIndex),
              false,
              ...spinners.slice(modalItemIndex + 1)
            ])
          })
      })
  }

  const create = () => {
    const parent = activeDepartments[modalItemIndex - 1]
    const item = {
      name,
      parent_id: parent && parent.id
    }

    setName('')
    handleCancel()

    addSpinner([
      ...spinners.slice(0, modalItemIndex),
      true,
      ...spinners.slice(modalItemIndex + 1)
    ])

    return api.departments.createDepartment(item)
      .then(() => {
        if (parent) {
          addSpinner([
            ...spinners.slice(0, modalItemIndex),
            true
          ])
          return api.departments.getDepartmentChildren(parent.id)
            .then(({ data }) => {
              addDepartmentsList([
                ...departmentsList.slice(0, modalItemIndex),
                data || []
              ])

              parent.children.push(data)

              addSpinner([
                ...spinners.slice(0, modalItemIndex),
                false
              ])
            })
        } else {
          return api.departments.getDepartments()
            .then(({ data }) => {
              addDepartmentsList([
                data,
                ...departmentsList.slice(1)
              ])
              addSpinner([
                false,
                ...spinners.slice(1)
              ])
            })
        }
      })
  }

  const removeDepartmentById = (id, index) => {
    addSpinner([
      ...spinners.slice(0, index),
      true,
      ...spinners.slice(index + 1).map(() => activeDepartments[index].id === id)
    ])

    return api.departments.removeDepartmentById(id)
      .then(() => {
        if (activeDepartments[index] && activeDepartments[index].id === id) {
          addDepartmentsList([
            ...departmentsList.slice(0, index),
            departmentsList[index].filter(i => i.id !== id)
          ])
        } else {
          addDepartmentsList([
            ...departmentsList.slice(0, index),
            departmentsList[index].filter(i => i.id !== id),
            ...departmentsList.slice(index + 1)
          ])
        }
        addSpinner([
          ...spinners.slice(0, index),
          false
        ])
      })
  }

  return (
    <Fragment>
      <Heading>Departments</Heading>
      <DepartmentContent>
        { isFetching
          ? <Preloader />
          : <Fragment>
            {departmentsList.map((item, index) =>
              <DepartmentContent.Item key={index}>
                <Spin spinning={!!spinners[index]}>
                  <CardsWrapp>
                    {item.map(department =>
                      <DepartmentItem
                        key={department.id}
                        department={department}
                        onClick={() => handleClick(department, index)}
                        selected={activeDepartments[index] && activeDepartments[index].id === department.id}
                        children={department.children && department.children.length}
                        updateDepartmentById={() => showModal(index, department)}
                        removeDepartmentById={() => removeDepartmentById(department.id, index)}
                      />
                    )}
                  </CardsWrapp>
                  <Button onClick={() => showModal(index)}>+ add new</Button>
                </Spin>
              </DepartmentContent.Item>
            )}
          </Fragment>
        }
        <Modal
          title={`${activeDepartment ? `Update ${activeDepartment.name}` : 'Create New'} Department`}
          closable={false}
          visible={isVisible}
          onOk={activeDepartment ? update : create}
          onCancel={handleCancel}
        >
          <Input type='text' placeholder='Department Name' onChange={e => setName(e.target.value)} value={name} />
          { modalItemIndex && activeDepartments[modalItemIndex - 1] && <Input type='text' addonBefore='Parent Department' disabled value={activeDepartments[modalItemIndex - 1].name} /> }
        </Modal>
      </DepartmentContent>
    </Fragment>
  )
}

export default DepartmentsPage
