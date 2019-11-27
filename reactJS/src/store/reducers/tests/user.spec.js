import user, { initialState } from '../user'
import * as t from '../../types'

describe('User', () => {
  it('GET_USER_FETCHING', () => {
    const action = {
      type: t.GET_USER_FETCHING,
      payload: true
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      data: null,
      isFetching: action.payload
    })
  })

  it('GET_USER_SUCCESS', () => {
    const stateBefore = {
      data: null,
      isFetching: false
    }
    const action = {
      type: t.GET_USER_SUCCESS,
      payload: {}
    }
    expect(user(stateBefore, action)).toEqual({
      ...stateBefore,
      data: {},
      isFetching: false
    })
  })
})
