import {
  GET_ROLES_FETCHING,
  GET_ROLES_SUCCESS
} from '../types'

const initialState = {
  list: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }

    case GET_ROLES_SUCCESS: {
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}
