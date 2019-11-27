import React, { Fragment, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { Navigation, Header, Loading, PermissionWrapper } from '../'
import { Main, Content, Sidebar } from '../../styles'

const PrivateRoute = ({ component: Component, permissions, getUser, user, ...rest }) => {

  useEffect(() => {
    getUser()
  }, [])

  return <Route {...rest}
    render={props =>
      window.localStorage.getItem('authToken')
        ? <Fragment>
          {(user.isFetching || !user.data.id)
            ? <Loading />
            : <PermissionWrapper userPermissions={user.permissions} permissions={permissions}>
              <Main>
                <Header />
                <Sidebar>
                  <Navigation />
                </Sidebar>
                <Content>
                  <Component {...props} />
                </Content>
              </Main>
            </PermissionWrapper>
          }
        </Fragment>
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }
  />
}

export default PrivateRoute
