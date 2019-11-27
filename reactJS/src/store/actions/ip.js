import {
  IP_ADD,
  // IP_DELETE,
  IP_LIST
} from '../types'

const getIpList = () => dispatch => {
  dispatch({
    type: IP_LIST,
    payload: true
  })
}

const addIp = (data) => dispatch => {
  dispatch({
    type: IP_ADD,
    payload: data
  })
}

export {
  getIpList,
  addIp
}
