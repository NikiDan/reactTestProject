import http from './http'

const login = data => {
  return http({
    url: '/auth',
    method: 'POST',
    data
  })
}

const logout = () => {
  return http({
    url: '/auth/logout',
    method: 'GET'
  })
}

export {
  login,
  logout
}
