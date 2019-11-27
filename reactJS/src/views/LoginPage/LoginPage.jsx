import React, { useEffect } from 'react'

import history from '../../history'
import { api } from '../../services'
import { Button } from '../../components'
import { Login } from './styled'

const LoginPage = () => {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
      })
        .then(res => {
          console.log('init OK', res)
        })
        .catch(err => {
          console.log('init Error', err.message)
        })
    })
  })

  function signIn () {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    return GoogleAuth
      .signIn({
        scope: 'profile email'
      })
      .then(googleUser => {
        const authToken = googleUser.getAuthResponse().access_token
        api.auth.login({ token: authToken })
          .then(({ data }) => {
            if (data) {
              window.localStorage.setItem('authToken', data.token)
              history.push('/')
            } else {
              window.localStorage.clear()
              history.push('/login')
            }
          })
      })
      .catch(err => console.log('Auth Err', err.message))
  }

  return (
    <Login>
      <Login.Card>
        <Login.CardTitle>Welcome to Cogniteq Skill Matrix</Login.CardTitle>
        <Button
          type='primary'
          icon='google'
          onClick={signIn}
        >
          Sing In
        </Button>
      </Login.Card>
    </Login>
  )
}

export default LoginPage
