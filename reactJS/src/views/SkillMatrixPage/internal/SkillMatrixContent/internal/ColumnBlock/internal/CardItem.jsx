import React from 'react'
import { Card } from './styled'
import { Popconfirm, Switch } from 'antd'

const CardItem = props => {
  const {
    item,
    selected,
    onClick,
    onEdit,
    onDelete,
    onSwitch
  } = props

  const handleEdit = e => {
    e.stopPropagation()
    onEdit()
  }

  const handleSwitch = checked => {
    onSwitch(checked)
  }

  return (
    <Card selected={selected}>
      <Card.Wrap onClick={onClick}>
        <Card.Name selected={selected}>{item.name}</Card.Name>
      </Card.Wrap>
      <Card.Settings>
        <Switch onChange={handleSwitch} style={{ position: 'absolute', top: '0.3rem', right: '0.3rem' }} />
        <Card.Button selected={selected} onClick={handleEdit}>Edit</Card.Button>
        {!item.is_general &&
          <Popconfirm
            title='Are you sure delete this item?'
            onConfirm={onDelete}
          >
            <Card.Button selected={selected}>delete</Card.Button>
          </Popconfirm>
        }
      </Card.Settings>
    </Card>
  )
}

export default CardItem
