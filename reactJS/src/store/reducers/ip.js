import {
  IP_LIST,
  IP_ADD,
  IP_DELETE
} from '../types'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IP_LIST:
      return state
    case IP_ADD:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    case IP_DELETE:
      console.log(['Delete to be implemented'])
      return state
    default:
      return state
  }
}
