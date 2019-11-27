import {
  GET_USER_FETCHING,
  GET_USER_SUCCESS,
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  UPDATE_USER_BY_ID_FETCHING,
  UPDATE_USER_BY_ID_SUCCESS
} from '../types'

import { api } from '../../services'

const getUser = () => dispatch => {
  dispatch({
    type: GET_USER_FETCHING,
    payload: true
  })
  return api.users.getUser()
    .then(({ data }) => {
      console.log(data)
      if (data) {
        const stat = data.stat
        const roles = data.user.roles
        const permissions = roles.reduce((acc, role) => {
          role.permissions.forEach(i => {
            if (!acc[i.name]) {
              acc[i.name] = true
            }
          })
          delete role.permissions
          return acc
        }, {})

        delete data.user.roles

        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            roles,
            permissions,
            stat,
            data
          }
        })
      }
      dispatch({
        type: GET_USER_FETCHING,
        payload: false
      })
      return data
    })
}

const getUsers = params => dispatch => {
  dispatch({
    type: GET_USERS_FETCHING,
    payload: true
  })
  return api.users.getUsers({ ...params })
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_USERS_FETCHING,
        payload: false
      })
      return data
    })
}

const updateUserById = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_USER_BY_ID_FETCHING,
    payload: true
  })
  return api.users.updateUserById(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_USER_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_USER_BY_ID_FETCHING,
        payload: false
      })
    })
}

export {
  getUser,
  getUsers,
  updateUserById
}
