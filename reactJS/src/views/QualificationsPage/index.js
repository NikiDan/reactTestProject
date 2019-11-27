import { connect } from 'react-redux'

import actions from '../../store/actions'
import QualificationsPage from './QualificationsPage'

const mapStateToProps = state => ({
  qualifications: state.qualifications,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getQualificationsTypes: () => dispatch(actions.qualifications.getQualificationsTypes()),
  createQualificationType: data => dispatch(actions.qualifications.createQualificationType(data)),
  removeQualificationType: id => dispatch(actions.qualifications.removeQualificationType(id)),
  updateQualificationType: (id, data) => dispatch(actions.qualifications.updateQualificationType(id, data)),
  createQualification: (id, data) => dispatch(actions.qualifications.createQualification(id, data)),
  removeQualification: id => dispatch(actions.qualifications.removeQualification(id)),
  updateQualification: (id, data) => dispatch(actions.qualifications.updateQualification(id, data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualificationsPage)
