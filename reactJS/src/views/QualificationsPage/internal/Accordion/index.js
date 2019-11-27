import { connect } from 'react-redux'
import Accordion from './Accordion'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  null
)(Accordion)
