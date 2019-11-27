import {
  GET_REQUIREMENTS_TYPES_FETCHING,
  GET_REQUIREMENTS_TYPES_SUCCESS
} from '../types'

import { api } from '../../services'

const getRequirementsTypes = () => dispatch => {
  dispatch({
    type: GET_REQUIREMENTS_TYPES_FETCHING,
    payload: true
  })
  return api.requirementsTypes.getRequirementsTypes()
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_REQUIREMENTS_TYPES_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_REQUIREMENTS_TYPES_FETCHING,
        payload: false
      })
    })
}

export {
  getRequirementsTypes
}
