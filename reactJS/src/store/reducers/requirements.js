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

const initialState = {
  list: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUIREMENT_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_REQUIREMENT_SUCCESS: {
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    }
    case CREATE_REQUIREMENT_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case CREATE_REQUIREMENT_SUCCESS: {
      const index = state.list.findIndex(i => i.id === action.payload.qualification_level_id)
      if (index > -1) {
        const level = {
          ...state.list[index],
          requirements: [
            ...(state.list[index].requirements || []),
            action.payload
          ]
        }
        return {
          ...state,
          list: [
            ...state.list.slice(0, index),
            level,
            ...state.list.slice(index + 1)
          ]
        }
      } else {
        return {
          ...state,
          list: [
            {
              id: action.payload.qualification_level_id,
              requirements: [action.payload]
            }
          ]
        }
      }
    }
    case UPDATE_REQUIREMENT_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_REQUIREMENT_SUCCESS: {

      const levelIndex = state.list.findIndex(i => i.id === action.payload.qualification_level_id)
      const requirementIndex = state.list[levelIndex].requirements.findIndex(i => i.id === action.payload.id)

      const level = {
        ...state.list[levelIndex],
        requirements: [
          ...state.list[levelIndex].requirements.slice(0, requirementIndex),
          action.payload,
          ...state.list[levelIndex].requirements.slice(requirementIndex + 1)
        ]
      }

      return {
        ...state,
        list: [
          ...state.list.slice(0, levelIndex),
          level,
          ...state.list.slice(levelIndex + 1)
        ]
      }
    }
    case REMOVE_REQUIREMENT_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case REMOVE_REQUIREMENT_SUCCESS: {
      let listIndex
      state.list.forEach((level, index) => {
        let resultIndex = level.requirements.findIndex(item => item.id === action.payload)
        if (resultIndex !== -1) {
          listIndex = index
        }
      })
      const requirementNew = {
        ...state.list[listIndex],
        requirements: [...state.list[listIndex].requirements.filter(item => item.id !== action.payload)]
      }
      return {
        ...state,
        list: [
          ...state.list.slice(0, listIndex),
          requirementNew,
          ...state.list.slice(listIndex + 1)
        ]
      }
    }

    default:
      return state
  }
}
