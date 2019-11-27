import { connect } from 'react-redux'
import DevelopmentPlanPage from './DevelopmentPlanPage'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  null
)(DevelopmentPlanPage)
