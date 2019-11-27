import { connect } from 'react-redux'
import actions from '../../store/actions'
import ManageUsersPage from './ManageUsersPage'

const mapStateToProps = state => ({
  users: state.users,
  departments: state.departments,
  roles: state.roles,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getUsers: params => dispatch(actions.users.getUsers(params)),
  getDepartments: () => dispatch(actions.departments.getDepartments()),
  getRoles: () => dispatch(actions.roles.getRoles()),
  updateUserById: (id, data) => dispatch(actions.users.updateUserById(id, data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsersPage)
