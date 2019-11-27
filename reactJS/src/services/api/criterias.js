import http from './http'

const createCriteria = data => {
  return http({
    url: 'criterias',
    method: 'POST',
    data
  })
}

const removeCriteria = id => {
  return http({
    url: `criterias/${id}`,
    method: 'DELETE'
  })
}

const updateCriteria = (id, data) => {
  return http({
    url: `criterias/${id}`,
    method: 'PUT',
    data
  })
}

export {
  createCriteria,
  removeCriteria,
  updateCriteria
}
