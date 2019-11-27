import { connect } from 'react-redux'

import actions from '../../../../../../../../store/actions'
import MaterialItem from './MaterialItem'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  removeMaterial: id => dispatch(actions.materials.removeMaterial(id)),
  removeCriteria: id => dispatch(actions.criterias.removeCriteria(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialItem)
