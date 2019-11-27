import http from './http'

const getRequirementsTypes = () => {
  return http({
    url: 'requirements/types',
    method: 'GET'
  })
}

export {
  getRequirementsTypes
}
