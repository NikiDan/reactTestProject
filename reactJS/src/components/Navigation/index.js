import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Navigation from './Navigation'

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(
  mapStateToProps,
  null
)(Navigation))
