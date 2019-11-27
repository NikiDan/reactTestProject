import {
  GET_SKILL_BY_ID_FETCHING,
  GET_SKILL_BY_ID_SUCCESS,
  CREATE_MATERIAL_FETCHING,
  CREATE_MATERIAL_SUCCESS,
  CREATE_CRITERIA_FETCHING,
  CREATE_CRITERIA_SUCCESS,
  REMOVE_MATERIAL_FETCHING,
  REMOVE_MATERIAL_SUCCESS,
  REMOVE_CRITERIA_FETCHING,
  REMOVE_CRITERIA_SUCCESS,
  UPDATE_MATERIAL_FETCHING,
  UPDATE_MATERIAL_SUCCESS,
  UPDATE_CRITERIA_FETCHING,
  UPDATE_CRITERIA_SUCCESS
} from '../types'

const initialState = {
  skill: {},
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILL_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_SKILL_BY_ID_SUCCESS: {
      return {
        ...state,
        skill: action.payload
      }
    }
    case CREATE_MATERIAL_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case CREATE_MATERIAL_SUCCESS: {
      return {
        ...state,
        skill: {
          ...state.skill,
          materials: [
            ...state.skill.materials,
            action.payload
          ]
        }
      }
    }
    case CREATE_CRITERIA_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case CREATE_CRITERIA_SUCCESS: {
      return {
        ...state,
        skill: {
          ...state.skill,
          criteria: [
            ...state.skill.criteria,
            action.payload
          ]
        }
      }
    }
    case REMOVE_MATERIAL_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case REMOVE_MATERIAL_SUCCESS: {
      return {
        ...state,
        skill: {
          ...state.skill,
          materials: [
            ...state.skill.materials.filter(item => item.id !== action.payload)
          ]
        }
      }
    }
    case REMOVE_CRITERIA_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case REMOVE_CRITERIA_SUCCESS: {
      return {
        ...state,
        skill: {
          ...state.skill,
          criteria: [
            ...state.skill.criteria.filter(item => item.id !== action.payload)
          ]
        }
      }
    }
    case UPDATE_MATERIAL_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_MATERIAL_SUCCESS: {
      const materialIndex = state.skill.materials.findIndex(i => i.id === action.payload.id)
      return {
        ...state,
        skill: {
          ...state.skill,
          materials: [
            ...state.skill.materials.slice(0, materialIndex),
            action.payload,
            ...state.skill.materials.slice(materialIndex + 1)
          ]
        }
      }
    }
    case UPDATE_CRITERIA_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_CRITERIA_SUCCESS: {
      const criterialIndex = state.skill.criteria.findIndex(i => i.id === action.payload.id)
      return {
        ...state,
        skill: {
          ...state.skill,
          criteria: [
            ...state.skill.criteria.slice(0, criterialIndex),
            action.payload,
            ...state.skill.criteria.slice(criterialIndex + 1)
          ]
        }
      }
    }
    default:
      return state
  }
}
