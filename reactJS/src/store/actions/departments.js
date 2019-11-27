import {
  GET_DEPARTMENTS_FETCHING,
  GET_DEPARTMENTS_SUCCESS,
  CREATE_DEPARTMENT_SUCCESS,
  REMOVE_DEPARTMENT_BY_ID_FETCHING,
  REMOVE_DEPARTMENT_BY_ID_SUCCESS,
  UPDATE_DEPARTMENT_BY_ID_FETCHING,
  UPDATE_DEPARTMENT_BY_ID_SUCCESS
} from '../types'

import { api } from '../../services'

const getDepartments = () => dispatch => {
  dispatch({
    type: GET_DEPARTMENTS_FETCHING,
    payload: true
  })
  return api.departments.getDepartments()
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_DEPARTMENTS_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_DEPARTMENTS_FETCHING,
        payload: false
      })
    })
}

const createDepartment = (data) => dispatch => {
  // dispatch({
  //   type: CREATE_DEPARTMENT_FETCHING,
  //   payload: true
  // })
  return api.departments.createDepartment(data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_DEPARTMENT_SUCCESS,
          payload: data
        })
      }
      // dispatch({
      //   type: CREATE_DEPARTMENT_FETCHING,
      //   payload: false
      // })
    })
}

const removeDepartmentById = (id) => dispatch => {
  dispatch({
    type: REMOVE_DEPARTMENT_BY_ID_FETCHING,
    payload: true
  })
  return api.departments.removeDepartmentById(id)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: REMOVE_DEPARTMENT_BY_ID_SUCCESS,
          payload: id
        })
      }
      dispatch({
        type: REMOVE_DEPARTMENT_BY_ID_FETCHING,
        payload: false
      })
    })
}

const updateDepartmentById = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_DEPARTMENT_BY_ID_FETCHING,
    payload: true
  })
  return api.departments.updateDepartmentById(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_DEPARTMENT_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_DEPARTMENT_BY_ID_FETCHING,
        payload: false
      })
    })
}

export {
  getDepartments,
  createDepartment,
  updateDepartmentById,
  removeDepartmentById
}
