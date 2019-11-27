import {
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  UPDATE_USER_BY_ID_FETCHING,
  UPDATE_USER_BY_ID_SUCCESS
} from '../types'

const initialState = {
  data: {},
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }
    case UPDATE_USER_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_USER_BY_ID_SUCCESS: {
      let listIndex
      state.data.data.forEach((user, index) => {
        if (user.id === action.payload.id) {
          listIndex = index
        }
      })
      return {
        ...state,
        data: {
          ...state.data,
          data: [
            ...state.data.data.slice(0, listIndex),
            action.payload,
            ...state.data.data.slice(listIndex + 1)
          ]
        }
      }
    }
    default:
      return state
  }
}
