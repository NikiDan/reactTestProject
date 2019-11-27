import { connect } from 'react-redux'
import DepartmentsPage from './DepartmentsPage'
import actions from '../../store/actions'

const mapStateToProps = state => ({
  departments: state.departments
})

const mapDispatchToProps = dispatch => ({
  createDepartment: data => dispatch(actions.departments.createDepartment(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentsPage)
