import React, { Fragment } from 'react'
import 'typeface-ubuntu'
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'

import {
  IndexPage,
  MainPage,
  ReduxPage
} from './views'

function App () {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <Route path='/main' component={MainPage} />
          <Route path='/redux' component={ReduxPage} />
          <Route path='/' component={IndexPage} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
