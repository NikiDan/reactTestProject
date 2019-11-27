/**
 * Check user permissions
 * @param {array} userPermissions
 * @param {array} permissions
 * @returns {boolean}
 */
export const checkPermission = (userPermissions = [], permissions = []) => {
  return permissions.reduce((acc, i) => acc && !!userPermissions[i], true)
}

/**
 * Create department array with id or name
 * @param {object} department
 * @param {string} departmentProps
 * @returns {array}
 */
export const createDepartmentRoad = (department, departmentProps) => {
  const arr = []
  const getDepartmentType = (department) => {
    if (!department) {
      return null
    }
    arr.push(department[departmentProps])
    getDepartmentType(department.parent)
  }
  getDepartmentType(department)
  return arr
}
