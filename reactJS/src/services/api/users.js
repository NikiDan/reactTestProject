import http from './http'

const getUser = () => {
  return http({
    url: 'users/me',
    method: 'GET'
  })
}

const getUsers = params => {
  return http({
    url: '/users',
    method: 'GET',
    params
  })
}

const updateUserById = (id, data) => {
  return http({
    url: '/users/' + id,
    method: 'PUT',
    data
  })
}

export {
  getUser,
  getUsers,
  updateUserById
}
