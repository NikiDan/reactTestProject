import http from './http'

const getRoles = () => {
  return http({
    url: 'roles',
    method: 'GET'
  })
}

export {
  getRoles
}
