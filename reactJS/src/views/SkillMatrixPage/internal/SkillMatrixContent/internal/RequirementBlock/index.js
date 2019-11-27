import { connect } from 'react-redux'

import actions from '../../../../../../store/actions'
import RequirementBlock from './RequirementBlock'

const mapStateToProps = state => ({
  user: state.user,
  requirements: state.requirements,
  requirementsTypes: state.requirementsTypes.list
})

const mapDispatchToProps = dispatch => ({
  getRequirement: id => dispatch(actions.requirements.getRequirement(id)),
  createRequirement: (id, data) => dispatch(actions.requirements.createRequirement(id, data)),
  editRequirement: (id, data) => dispatch(actions.requirements.editRequirement(id, data)),
  removeRequirement: id => dispatch(actions.requirements.removeRequirement(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequirementBlock)
