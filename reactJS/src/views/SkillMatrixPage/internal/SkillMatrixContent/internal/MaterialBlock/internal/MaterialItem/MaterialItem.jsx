import React from 'react'
import { Popconfirm } from 'antd'

import * as p from '../../../../../../../../permissions'
import { checkPermission } from '../../../../../../../../helpers'

import { Material } from './styled'

const MaterialItem = props => {
  const {
    user: { permissions },
    item: { id, name, link, description },
    type,
    onClick,
    removeMaterial,
    removeCriteria
  } = props

  const handleRemove = id => {
    return Promise.resolve()
      .then(() => {
        if (type === 'material') {
          return removeMaterial(id)
        } else {
          return removeCriteria(id)
        }
      })
  }

  return (
    <Material>
      {type === 'material' && <Material.ContentLink target='_blank' href={link}>{name}</Material.ContentLink> }
      {type === 'criteria' && <Material.ContentText>{description}</Material.ContentText> }

      <Material.Settings>
        {(type === 'material' && checkPermission(permissions, [p.MATERIALS_DELETE])) &&
          <Material.Button onClick={onClick}>edit</Material.Button>
        }
        {(type === 'criteria' && checkPermission(permissions, [p.SKILL_SUCCESS_CRITERIAS_WRITE])) &&
        <Material.Button onClick={onClick}>edit</Material.Button>
        }
        {(type === 'material' && checkPermission(permissions, [p.MATERIALS_DELETE])) &&
        <Popconfirm
          title='Are you sure delete this item?'
          onConfirm={() => handleRemove(id)}
          okTetxt='Yes'
          cancelText='No'
        >
          <Material.Button>delete</Material.Button>
        </Popconfirm>
        }
        {(type === 'criteria' && checkPermission(permissions, [p.SKILL_SUCCESS_CRITERIAS_DELETE])) &&
        <Popconfirm
          title='Are you sure delete this item?'
          onConfirm={() => handleRemove(id)}
          okTetxt='Yes'
          cancelText='No'
        >
          <Material.Button>delete</Material.Button>
        </Popconfirm>
        }
      </Material.Settings>
    </Material>
  )
}

export default MaterialItem
