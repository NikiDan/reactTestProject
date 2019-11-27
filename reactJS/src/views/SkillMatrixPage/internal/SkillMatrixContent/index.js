import { connect } from 'react-redux'

import actions from '../../../../store/actions'
import SkillMatrixContent from './SkillMatrixContent'

const mapStateToProps = state => ({
  user: state.user,
  skillItem: state.skills
})

const mapDispatchToProps = dispatch => ({
  getSkillById: id => dispatch(actions.skills.getSkillById(id)),
  deleteSkillById: (id, isActive) => dispatch(actions.skills.deleteSkillById(id, isActive)),
  resetSkill: () => dispatch(actions.skills.resetSkill())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillMatrixContent)
