import {
  GET_REQUIREMENT_FETCHING,
  GET_REQUIREMENT_SUCCESS,
  CREATE_REQUIREMENT_FETCHING,
  CREATE_REQUIREMENT_SUCCESS,
  UPDATE_REQUIREMENT_FETCHING,
  UPDATE_REQUIREMENT_SUCCESS,
  REMOVE_REQUIREMENT_FETCHING,
  REMOVE_REQUIREMENT_SUCCESS
} from '../types'

import { api } from '../../services'

const getRequirement = id => dispatch => {
  dispatch({
    type: GET_REQUIREMENT_FETCHING,
    payload: true
  })
  return api.requirements.getRequirement(id)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_REQUIREMENT_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_REQUIREMENT_FETCHING,
        payload: false
      })
    })
}

const createRequirement = (id, data) => dispatch => {
  dispatch({
    type: CREATE_REQUIREMENT_FETCHING,
    payload: true
  })
  return api.requirements.createRequirement(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_REQUIREMENT_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: CREATE_REQUIREMENT_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

const editRequirement = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_REQUIREMENT_FETCHING,
    payload: true
  })
  return api.requirements.editRequirement(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_REQUIREMENT_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_REQUIREMENT_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

const removeRequirement = id => dispatch => {
  dispatch({
    type: REMOVE_REQUIREMENT_FETCHING,
    payload: true
  })
  return api.requirements.removeRequirement(id)
    .then(() => {
      dispatch({
        type: REMOVE_REQUIREMENT_SUCCESS,
        payload: id
      })
      dispatch({
        type: REMOVE_REQUIREMENT_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

export {
  getRequirement,
  createRequirement,
  editRequirement,
  removeRequirement
}
