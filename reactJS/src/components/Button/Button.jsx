import React from 'react'

import { Btn } from './styled'

const Button = ({ children, ...rest }) => <Btn {...rest}>{ children }</Btn>

export default Button
