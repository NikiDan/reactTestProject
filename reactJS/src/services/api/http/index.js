import axios from 'axios'

import {
  token,
  statusCode,
  connection
} from './incereptors'

import { config } from '../../../constants'

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {},
  data: {},
  timeout: 180000
})
token(instance)
statusCode(instance)
connection(instance)

export default instance
