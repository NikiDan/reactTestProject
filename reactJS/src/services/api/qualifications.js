import http from './http'

const getQualificationsTypes = () => {
  return http({
    url: '/types/qualifications',
    method: 'GET'
  })
}

const createQualificationType = data => {
  return http({
    url: '/qualifications/types',
    method: 'POST',
    data
  })
}

const removeQualificationType = id => {
  return http({
    url: '/qualifications/types/' + id,
    method: 'DELETE'
  })
}

const updateQualificationType = (id, data) => {
  return http({
    url: '/qualifications/types/' + id,
    method: 'PUT',
    data
  })
}

const createQualification = (qualificationTypeId, data) => {
  return http({
    url: '/types/' + qualificationTypeId + '/qualifications',
    method: 'POST',
    data
  })
}

const updateQualification = (id, data) => {
  return http({
    url: 'qualifications/' + id,
    method: 'PUT',
    data
  })
}

const removeQualification = id => {
  return http({
    url: 'qualifications/' + id,
    method: 'DELETE'
  })
}

export {
  getQualificationsTypes,
  createQualificationType,
  updateQualificationType,
  removeQualificationType,
  createQualification,
  updateQualification,
  removeQualification
}
