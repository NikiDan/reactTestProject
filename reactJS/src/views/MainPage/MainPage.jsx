import React, { Fragment } from 'react'
import history from '../../history'
import { MyLink } from './styled'

const MainPage = (props) => {
  const {
    location: {
      state
    }
  } = props

  const go = page => {
    history.push(`/main`, { page: page })
  }

  return (
    <Fragment>
      <h1>Main page: {state && 'page' in state ? state.page : ''}</h1>
      <ul>
        <li><MyLink onClick={() => go(1)}>Page 1</MyLink></li>
        <li><MyLink onClick={() => go(2)}>Page 2</MyLink></li>
        <li><MyLink onClick={() => go(3)}>Page 3</MyLink></li>
      </ul>
    </Fragment>
  )
}

export default MainPage
