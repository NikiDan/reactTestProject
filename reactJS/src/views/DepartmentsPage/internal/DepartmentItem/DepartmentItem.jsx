import React from 'react'
import { Icon, Popconfirm } from 'antd'

import { DepartmentCard } from './styled'
import { arrow } from './img'

const DepartmentItem = props => {
  const {
    department,
    selected,
    children,
    updateDepartmentById,
    removeDepartmentById,
    onClick
  } = props

  return (
    <DepartmentCard children={children} selected={selected}>
      <DepartmentCard.Wrap onClick={onClick}>
        <DepartmentCard.Name>{department.name}</DepartmentCard.Name>
        {!!children &&
          <DepartmentCard.Arrow checked={selected} src={arrow} />
        }
      </DepartmentCard.Wrap>
      <DepartmentCard.Settings>
        <Icon style={{ marginRight: 5 }} type='edit' onClick={updateDepartmentById} />
        <Popconfirm
          title='Are you sure delete this item?'
          onConfirm={removeDepartmentById}
        >
          <Icon type='delete' />
        </Popconfirm>
      </DepartmentCard.Settings>
    </DepartmentCard>
  )
}

export default DepartmentItem
