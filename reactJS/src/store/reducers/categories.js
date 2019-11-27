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

const initialState = {
  list: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload
      }
    case CREATE_CATEGORY_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    case REMOVE_CATEGORY_BY_ID_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case REMOVE_CATEGORY_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.filter(CATEGORY => CATEGORY.id !== action.payload)
      }
    }
    case UPDATE_CATEGORY_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_CATEGORY_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.map(CATEGORY =>
          CATEGORY.id === action.payload.id
            ? { ...CATEGORY, name: action.payload.name }
            : CATEGORY)
      }
    }
    default:
      return state
  }
}
