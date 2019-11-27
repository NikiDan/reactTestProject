import React from 'react'

import * as p from '../../permissions'
import { checkPermission } from '../../helpers'
import { Nav } from './styled'
import { NavItem } from './internal'

const Navigation = ({ user: { permissions }, ...props }) => {
  return (
    <Nav>
      <Nav.Menu
        mode='inline'
        defaultSelectedKeys={[props.match.path || '/']}
      >
        {checkPermission(permissions, [p.SKILLS_READ]) &&
        <NavItem
          key='/'
          url='/'
          icon='idcard'
          heading='Development Plan'
          style={{ marginTop: 20 }}
        />
        }
        {checkPermission(permissions, [p.QUALIFICATIONS_READ]) &&
          <NavItem
            key='/departments'
            url='/departments'
            icon='bank'
            heading='Departments'
          />
        }
        {checkPermission(permissions, [p.QUALIFICATIONS_READ]) &&
          <NavItem
            key='/qualifications'
            url='/qualifications'
            icon='apartment'
            heading='Qualifications'
          />
        }
        {checkPermission(permissions, [p.SKILLS_READ]) &&
          <NavItem
            key='/skillmatrix'
            url='/skillmatrix'
            icon='appstore'
            heading='Skill Matrix'
          />
        }
        {checkPermission(permissions, [p.USERS_READ]) &&
          <NavItem
            key='/manage-users'
            url='/manage-users'
            icon='team'
            heading='Employee'
          />
        }
      </Nav.Menu>
    </Nav>
  )
}

export default Navigation
