import {
  CREATE_MATERIAL_FETCHING,
  CREATE_MATERIAL_SUCCESS,
  REMOVE_MATERIAL_FETCHING,
  REMOVE_MATERIAL_SUCCESS,
  UPDATE_MATERIAL_FETCHING,
  UPDATE_MATERIAL_SUCCESS
} from '../types'

import { api } from '../../services'

const createMaterial = data => dispatch => {
  dispatch({
    type: CREATE_MATERIAL_FETCHING,
    payload: true
  })
  return api.materials.createMaterial(data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_MATERIAL_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: CREATE_MATERIAL_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

const removeMaterial = id => dispatch => {
  dispatch({
    type: REMOVE_MATERIAL_FETCHING,
    payload: true
  })
  return api.materials.removeMaterial(id)
    .then(() => {
      dispatch({
        type: REMOVE_MATERIAL_SUCCESS,
        payload: id
      })
      dispatch({
        type: REMOVE_MATERIAL_FETCHING,
        payload: false
      })
      return Promise.resolve()
    })
}

const updateMaterial = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_MATERIAL_FETCHING,
    payload: true
  })
  return api.materials.updateMaterial(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_MATERIAL_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_MATERIAL_FETCHING,
        payload: false
      })
    })
}

export {
  createMaterial,
  removeMaterial,
  updateMaterial
}
