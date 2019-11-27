import {
  GET_USER_FETCHING,
  GET_USER_SUCCESS
} from '../types'
const initialState = {
  data: {},
  stat: {},
  roles: [],
  permissions: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        roles: action.payload.roles,
        permissions: action.payload.permissions,
        data: action.payload.data.user,
        stat: action.payload.data.stat
      }
    }
    default:
      return state
  }
}
