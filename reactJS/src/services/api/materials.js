import http from './http'

const createMaterial = data => {
  return http({
    url: 'materials',
    method: 'POST',
    data
  })
}

const removeMaterial = id => {
  return http({
    url: `materials/${id}`,
    method: 'DELETE'
  })
}

const updateMaterial = (id, data) => {
  return http({
    url: `materials/${id}`,
    method: 'PUT',
    data
  })
}

export {
  createMaterial,
  removeMaterial,
  updateMaterial
}
