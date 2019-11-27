import React from 'react'
import { ProfileSetting } from './internal'
import { HeaderBlock } from './styled'

import logo from './img/logo.svg'

const Header = props => {
  const {
    user: { data }
  } = props

  return (
    <HeaderBlock>
      <HeaderBlock.Row>
        <HeaderBlock.Logo src={logo} />
        <ProfileSetting userData={data} />
      </HeaderBlock.Row>
    </HeaderBlock>
  )
}

export default Header
