import {
  GET_DEPARTMENTS_FETCHING,
  GET_DEPARTMENTS_SUCCESS,
  CREATE_DEPARTMENT_FETCHING,
  CREATE_DEPARTMENT_SUCCESS,
  REMOVE_DEPARTMENT_BY_ID_FETCHING,
  REMOVE_DEPARTMENT_BY_ID_SUCCESS,
  UPDATE_DEPARTMENT_BY_ID_FETCHING,
  UPDATE_DEPARTMENT_BY_ID_SUCCESS
} from '../types'

const initialState = {
  list: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        list: action.payload
      }
    case CREATE_DEPARTMENT_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case CREATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    case REMOVE_DEPARTMENT_BY_ID_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case REMOVE_DEPARTMENT_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.filter(department => department.id !== action.payload)
      }
    }
    case UPDATE_DEPARTMENT_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_DEPARTMENT_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.map(department =>
          department.id === action.payload.id
            ? { ...department, name: action.payload.name }
            : department)
      }
    }
    default:
      return state
  }
}
