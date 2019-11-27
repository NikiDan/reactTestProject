import { connect } from 'react-redux'
import AccordionSettings from './AccordionSettings'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  null
)(AccordionSettings)
