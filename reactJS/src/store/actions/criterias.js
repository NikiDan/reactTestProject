import {
  CREATE_CRITERIA_FETCHING,
  CREATE_CRITERIA_SUCCESS,
  REMOVE_CRITERIA_FETCHING,
  REMOVE_CRITERIA_SUCCESS,
  UPDATE_CRITERIA_FETCHING,
  UPDATE_CRITERIA_SUCCESS
} from '../types'

import { api } from '../../services'

const createCriteria = data => dispatch => {
  dispatch({
    type: CREATE_CRITERIA_FETCHING,
    payload: true
  })
  return api.criterias.createCriteria(data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_CRITERIA_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: CREATE_CRITERIA_FETCHING,
        payload: false
      })
    })
}

const removeCriteria = id => dispatch => {
  dispatch({
    type: REMOVE_CRITERIA_FETCHING,
    payload: true
  })
  return api.criterias.removeCriteria(id)
    .then(() => {
      dispatch({
        type: REMOVE_CRITERIA_SUCCESS,
        payload: id
      })
      dispatch({
        type: REMOVE_CRITERIA_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

const updateCriteria = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_CRITERIA_FETCHING,
    payload: true
  })
  return api.criterias.updateCriteria(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_CRITERIA_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_CRITERIA_FETCHING,
        payload: false
      })
    })
}

export {
  createCriteria,
  removeCriteria,
  updateCriteria
}
