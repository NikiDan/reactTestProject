import React, { Fragment } from 'react'
import history from '../../history'

const PermissionWrapper = ({ permissions, userPermissions, children, ...rest }) => {
  const isAvailable = permissions && permissions.reduce((acc, i) => acc && !!userPermissions[i], true)
  return (
    <Fragment>
      <Fragment>
        {isAvailable
          ? <Fragment>{children}</Fragment>
          : history.push('/')
        }
      </Fragment>
    </Fragment>
  )
}

export default PermissionWrapper
