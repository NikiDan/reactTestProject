import {
  GET_ROLES_FETCHING,
  GET_ROLES_SUCCESS
} from '../types'

import { api } from '../../services'

const getRoles = () => dispatch => {
  dispatch({
    type: GET_ROLES_FETCHING,
    payload: true
  })
  return api.roles.getRoles()
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_ROLES_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_ROLES_FETCHING,
        payload: false
      })
      return data
    })
}

export {
  getRoles
}
