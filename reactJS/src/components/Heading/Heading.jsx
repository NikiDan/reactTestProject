import React from 'react'

import { Title } from './styled'

const Heading = ({ children, ...rest }) => (
  <Title {...rest}>{children}</Title>
)

export default Heading
