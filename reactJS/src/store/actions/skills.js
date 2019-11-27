import {
  GET_SKILL_BY_ID_FETCHING,
  GET_SKILL_BY_ID_SUCCESS
} from '../types'

import { api } from '../../services'

const getSkillById = id => dispatch => {
  dispatch({
    type: GET_SKILL_BY_ID_FETCHING,
    payload: true
  })
  return api.skills.getSkillById(id)
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: GET_SKILL_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: GET_SKILL_BY_ID_FETCHING,
        payload: false
      })
    })
}

const deleteSkillById = (id, isActive) => dispatch => {
  if (isActive) {
    dispatch({
      type: GET_SKILL_BY_ID_FETCHING,
      payload: true
    })
  }

  return api.skills.deleteSkill(id)
    .then(() => {
      if (isActive) {
        dispatch({
          type: GET_SKILL_BY_ID_SUCCESS,
          payload: {}
        })
        dispatch({
          type: GET_SKILL_BY_ID_FETCHING,
          payload: false
        })
      }
    })
}

const resetSkill = () => dispatch => {
  dispatch({
    type: GET_SKILL_BY_ID_SUCCESS,
    payload: {}
  })
}

export {
  getSkillById,
  deleteSkillById,
  resetSkill
}
