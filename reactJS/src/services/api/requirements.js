import http from './http'

const getRequirement = id => {
  return http({
    url: `qualifications/${id}/requirements`,
    method: 'GET'
  })
}

const createRequirement = (id, data) => {
  return http({
    url: `qualifications/${id}/requirements`,
    method: 'POST',
    data
  })
}

const editRequirement = (id, data) => {
  return http({
    url: `qualifications/${id}/requirements/${data.activeRequirementId}`,
    method: 'PUT',
    data
  })
}

const removeRequirement = id => {
  return http({
    url: `requirements/${id}`,
    method: 'DELETE'
  })
}

export {
  getRequirement,
  createRequirement,
  editRequirement,
  removeRequirement
}
