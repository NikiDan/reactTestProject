import { connect } from 'react-redux'

import actions from '../../../../../../store/actions'
import MaterialBlock from './MaterialBlock'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  createMaterial: data => dispatch(actions.materials.createMaterial(data)),
  createCriteria: data => dispatch(actions.criterias.createCriteria(data)),
  updateMaterial: (id, data) => dispatch(actions.materials.updateMaterial(id, data)),
  updateCriteria: (id, data) => dispatch(actions.criterias.updateCriteria(id, data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialBlock)
