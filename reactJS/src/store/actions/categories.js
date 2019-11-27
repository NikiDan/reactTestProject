import {
  GET_CATEGORIES_FETCHING,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_FETCHING,
  CREATE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_BY_ID_FETCHING,
  REMOVE_CATEGORY_BY_ID_SUCCESS,
  UPDATE_CATEGORY_BY_ID_FETCHING,
  UPDATE_CATEGORY_BY_ID_SUCCESS
} from '../types'

import { api } from '../../services'

const getCategories = () => dispatch => {
  dispatch({
    type: GET_CATEGORIES_FETCHING,
    payload: true
  })
  return api.categories.getCategories()
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_CATEGORIES_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_CATEGORIES_FETCHING,
        payload: false
      })
    })
}

const createCategory = (data) => dispatch => {
  dispatch({
    type: CREATE_CATEGORY_FETCHING,
    payload: true
  })
  return api.categories.createCategory(data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: CREATE_CATEGORY_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: CREATE_CATEGORY_FETCHING,
        payload: false
      })
    })
}

const removeCategoryById = (id) => dispatch => {
  dispatch({
    type: REMOVE_CATEGORY_BY_ID_FETCHING,
    payload: true
  })
  return api.categories.removeCategoryById(id)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: REMOVE_CATEGORY_BY_ID_SUCCESS,
          payload: id
        })
      }
      dispatch({
        type: REMOVE_CATEGORY_BY_ID_FETCHING,
        payload: false
      })
    })
}

const updateCategoryById = (id, data) => dispatch => {
  dispatch({
    type: UPDATE_CATEGORY_BY_ID_FETCHING,
    payload: true
  })
  return api.categories.updateCategoryById(id, data)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: UPDATE_CATEGORY_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_CATEGORY_BY_ID_FETCHING,
        payload: false
      })
    })
}

export {
  getCategories,
  createCategory,
  updateCategoryById,
  removeCategoryById
}
