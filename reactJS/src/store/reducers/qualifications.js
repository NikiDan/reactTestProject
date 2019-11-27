import {
  GET_QUALIFICATIONS_TYPE_FETCHING,
  GET_QUALIFICATIONS_TYPE_SUCCESS,
  CREATE_QUALIFICATION_TYPE_FETCHING,
  CREATE_QUALIFICATION_TYPE_SUCCESS,
  REMOVE_QUALIFICATION_TYPE_BY_ID_FETCHING,
  REMOVE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
  UPDATE_QUALIFICATION_TYPE_BY_ID_FETCHING,
  UPDATE_QUALIFICATION_TYPE_BY_ID_SUCCESS,
  CREATE_QUALIFICATION_FETCHING,
  CREATE_QUALIFICATION_SUCCESS,
  REMOVE_QUALIFICATION_FETCHING,
  REMOVE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_FETCHING,
  UPDATE_QUALIFICATION_SUCCESS
} from '../types'

const initialState = {
  list: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUALIFICATIONS_TYPE_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_QUALIFICATIONS_TYPE_SUCCESS: {
      return {
        ...state,
        list: action.payload
      }
    }
    case CREATE_QUALIFICATION_TYPE_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case CREATE_QUALIFICATION_TYPE_SUCCESS: {
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ]
      }
    }
    case REMOVE_QUALIFICATION_TYPE_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case REMOVE_QUALIFICATION_TYPE_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.filter(qualification => qualification.id !== action.payload)
      }
    }
    case UPDATE_QUALIFICATION_TYPE_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_QUALIFICATION_TYPE_BY_ID_SUCCESS: {
      return {
        ...state,
        list: state.list.map(qualification =>
          qualification.id === action.payload.id
            ? { ...qualification, name: action.payload }
            : qualification)
      }
    }
    case CREATE_QUALIFICATION_FETCHING: {
      return {
        ...state
        // isFetching: false
      }
    }
    case CREATE_QUALIFICATION_SUCCESS: {
      const typeIndex = state.list.findIndex(i => i.id === action.payload.id)
      const type = {
        ...state.list[typeIndex],
        qualifications: [
          ...(state.list[typeIndex].qualifications || []),
          action.payload.data
        ]
      }
      return {
        ...state,
        list: [
          ...state.list.slice(0, typeIndex),
          type,
          ...state.list.slice(typeIndex + 1)
        ]
      }
    }
    case REMOVE_QUALIFICATION_FETCHING: {
      return {
        ...state
      }
    }
    case REMOVE_QUALIFICATION_SUCCESS: {
      let listIndex
      state.list.forEach((type, index) => {
        let resultIndex = type.qualifications.findIndex(item => item.id === action.payload)
        if (resultIndex !== -1) {
          listIndex = index
        }
      })
      const qualNew = {
        ...state.list[listIndex],
        qualifications: [...state.list[listIndex].qualifications.filter(item => item.id !== action.payload)]
      }
      return {
        ...state,
        list: [
          ...state.list.slice(0, listIndex),
          qualNew,
          ...state.list.slice(listIndex + 1)]
      }
    }
    case UPDATE_QUALIFICATION_FETCHING: {
      return {
        ...state
      }
    }
    case UPDATE_QUALIFICATION_SUCCESS: {
      console.log(action.payload.data)
      let listIndex
      state.list.forEach((type, index) => {
        let resultIndex = type.qualifications.findIndex(item => action.payload.id)
        if (resultIndex !== -1) {
          listIndex = index
        }
      })
      const qualNew = {
        ...state.list[listIndex],
        qualifications: [...state.list[listIndex].qualifications.map(item =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.data.name, description: action.payload.data.description, previous: action.payload.data.previous }
            : item
        )]
      }
      return {
        ...state,
        list: [
          ...state.list.slice(0, listIndex),
          qualNew,
          ...state.list.slice(listIndex + 1)
        ]
      }
    }
    default:
      return state
  }
}
