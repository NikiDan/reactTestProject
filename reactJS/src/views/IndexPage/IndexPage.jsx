import React, { Fragment } from 'react'
import { Button } from '../../components'
import { Welcome } from './styled'
import blackBoxImage from './media/blackbox.png'
import history from '../../history'

const IndexPage = () => {
  return (
    <Fragment>
      <Welcome>
        <Welcome.Card>
          <img src={blackBoxImage} alt='' />
          <Welcome.CardTitle>Welcome to index page</Welcome.CardTitle>
          <Button
            type='primary'
            style={{ maxWidth: 300, with: 300 }}
            onClick={() => history.push('/main')}
          >
            Class: Basic. Routing
          </Button>
          <br />
          <Button
            type='primary'
            style={{ maxWidth: 300, with: 300 }}
            onClick={() => history.push('/redux')}
          >
            Class: Redux
          </Button>
        </Welcome.Card>
      </Welcome>
    </Fragment>
  )
}

export default IndexPage
