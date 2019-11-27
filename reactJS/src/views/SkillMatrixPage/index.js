import { connect } from 'react-redux'

import actions from '../../store/actions'
import SkillMatrixPage from './SkillMatrixPage'

const mapStateToProps = state => ({
  departments: state.departments
})

const mapDispatchToProps = dispatch => ({
  getDepartments: () => dispatch(actions.departments.getDepartments()),
  getRequirementsTypes: () => dispatch(actions.requirementsTypes.getRequirementsTypes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillMatrixPage)
