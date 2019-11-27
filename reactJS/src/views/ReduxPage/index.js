import { connect } from 'react-redux'
import ReduxPage from './ReduxPage'
import * as ip from '../../store/actions/ip'

const mapStateToProps = state => ({
  ips: state.ips
})

const mapDispatchToProps = dispatch => ({
  addIp: (data) => dispatch(ip.addIp(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage)
