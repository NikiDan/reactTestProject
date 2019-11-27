import http from './http'

const getDepartments = () => {
  return http({
    url: '/departments',
    method: 'GET'
  })
}

const getDepartmentChildren = id => {
  return http({
    url: `/departments/${id}/children`,
    method: 'GET'
  })
}

const createDepartment = data => {
  return http({
    url: '/departments',
    method: 'POST',
    data
  })
}

const removeDepartmentById = id => {
  return http({
    url: '/departments/' + id,
    method: 'DELETE'
  })
}

const updateDepartmentById = (id, data) => {
  return http({
    url: '/departments/' + id,
    method: 'PUT',
    data
  })
}

export {
  getDepartments,
  getDepartmentChildren,
  createDepartment,
  removeDepartmentById,
  updateDepartmentById
}
