import http from './http'

const createSkill = data => {
  return http({
    url: '/skills',
    method: 'POST',
    data
  })
}

const updateSkill = (id, data) => {
  return http({
    url: '/skills/' + id,
    method: 'PUT',
    data
  })
}

const deleteSkill = id => {
  return http({
    url: '/skills/' + id,
    method: 'DELETE'
  })
}

const getSkillsByDepartmentIdQualificationLevelId = (departmentId, qualificationLevelId, params) => {
  return http({
    method: 'GET',
    url: `/departments/${departmentId}/qualifications/${qualificationLevelId}/skills`,
    params
  })
}

const getSkillById = id => {
  return http({
    method: 'GET',
    url: `/skills/${id}`
  })
}

const changeVisibility = data => {
  return http({
    url: '/skills/visibility',
    method: 'POST',
    data
  })
}

export {
  createSkill,
  updateSkill,
  deleteSkill,
  changeVisibility,
  getSkillsByDepartmentIdQualificationLevelId,
  getSkillById
}
