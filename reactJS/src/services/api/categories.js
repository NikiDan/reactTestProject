import http from './http'

const getCategories = () => {
  return http({
    url: '/categories',
    method: 'GET'
  })
}

const createCategory = (data) => {
  return http({
    url: '/categories',
    method: 'POST',
    data
  })
}

const removeCategoryById = (id) => {
  return http({
    url: '/categories/' + id,
    method: 'DELETE'
  })
}

const updateCategoryById = (id, data) => {
  return http({
    url: '/categories/' + id,
    method: 'PUT',
    data
  })
}

export {
  getCategories,
  createCategory,
  removeCategoryById,
  updateCategoryById
}
