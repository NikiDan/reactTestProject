import qualifications, { initialState } from '../qualifications'
import * as t from '../../types'

describe('Qualifications', () => {
  it('GET_QUALIFICATIONS_TYPE_FETCHING', () => {
    const action = {
      type: t.GET_QUALIFICATIONS_TYPE_FETCHING,
      payload: true
    }

    expect(qualifications(initialState, action)).toEqual({
      ...initialState,
      list: [],
      isFetching: action.payload
    })
  })

  it('GET_QUALIFICATIONS_TYPE_SUCCESS', () => {
    const stateBefore = {
      list: [],
      isFetching: false
    }
    const action = {
      type: t.GET_QUALIFICATIONS_TYPE_SUCCESS,
      payload: [1, 2, 3]
    }

    expect(qualifications(stateBefore, action)).toEqual({
      ...stateBefore,
      list: action.payload,
      isFetching: false
    })
  })

  it('CREATE_QUALIFICATION_TYPE_FETCHING', () => {
    const action = {
      type: t.CREATE_QUALIFICATION_TYPE_FETCHING,
      payload: true
    }

    expect(qualifications(initialState, action)).toEqual({
      ...initialState,
      list: [],
      isFetching: action.payload
    })
  })
})
