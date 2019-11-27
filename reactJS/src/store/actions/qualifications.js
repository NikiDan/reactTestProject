import {
  GET_QUALIFICATIONS_TYPE_FETCHING,
  GET_QUALIFICATIONS_TYPE_SUCCESS,
  CREATE_QUALIFICATION_TYPE_FETCHING,
  CREATE_QUALIFICATION_TYPE_SUCCESS,
  REMOVE_QUALIFICATION_TYPE_BY_ID_FETCHING,
  REMOVE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
  UPDATE_QUALIFICATION_TYPE_BY_ID_FETCHING,
  UPDATE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
  CREATE_QUALIFICATION_FETCHING,
  CREATE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_SUCCESS,
  REMOVE_QUALIFICATION_FETCHING,
  REMOVE_QUALIFICATION_SUCCESS
} from '../types'

import { api } from '../../services'

const getQualificationsTypes = () => dispatch => {
  dispatch({
    type: GET_QUALIFICATIONS_TYPE_FETCHING,
    payload: true
  })
  return api.qualifications.getQualificationsTypes()
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_QUALIFICATIONS_TYPE_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_QUALIFICATIONS_TYPE_FETCHING,
        payload: false
      })
    })
}

const createQualificationType = data => dispatch => {
  dispatch({
    type: CREATE_QUALIFICATION_TYPE_FETCHING,
    payload: true
  })
  return api.qualifications.createQualificationType(data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_QUALIFICATION_TYPE_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: CREATE_QUALIFICATION_TYPE_FETCHING,
        payload: false
      })
    })
}

const removeQualificationType = id => dispatch => {
  dispatch({
    type: REMOVE_QUALIFICATION_TYPE_BY_ID_FETCHING,
    payload: true
  })
  return api.qualifications.removeQualificationType(id)
    .then(() => {
      dispatch({
        type: REMOVE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
        payload: id
      })
      dispatch({
        type: REMOVE_QUALIFICATION_TYPE_BY_ID_FETCHING,
        payload: false
      })
    })
}

const updateQualificationType = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_QUALIFICATION_TYPE_BY_ID_FETCHING,
    payload: true
  })
  return api.qualifications.updateQualificationType(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_QUALIFICATION_TYPE_BY_ID_FETCHING,
        payload: false
      })
    })
}

const createQualification = (id, data) => dispatch => {
  dispatch({
    type: CREATE_QUALIFICATION_FETCHING,
    payload: true
  })
  return api.qualifications.createQualification(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_QUALIFICATION_SUCCESS,
          payload: {
            id,
            data: data
          }
        })
      }
      dispatch({
        type: CREATE_QUALIFICATION_FETCHING,
        payload: false
      })
    })
}

const updateQualification = (id, data) => dispatch => {
  dispatch({
    type: CREATE_QUALIFICATION_FETCHING,
    payload: true
  })
  return api.qualifications.updateQualification(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_QUALIFICATION_SUCCESS,
          payload: {
            id,
            data: data
          }
        })
      }
      dispatch({
        type: CREATE_QUALIFICATION_FETCHING,
        payload: false
      })
    })
}

const removeQualification = id => dispatch => {
  dispatch({
    type: REMOVE_QUALIFICATION_FETCHING,
    payload: true
  })
  return api.qualifications.removeQualification(id)
    .then(() => {
      dispatch({
        type: REMOVE_QUALIFICATION_SUCCESS,
        payload: id
      })
      dispatch({
        type: REMOVE_QUALIFICATION_FETCHING,
        payload: false
      })
    })
}

export {
  getQualificationsTypes,
  createQualificationType,
  removeQualificationType,
  updateQualificationType,
  createQualification,
  removeQualification,
  updateQualification
}
