import React from 'react'

import { Icon } from 'antd'

import { Item } from './styled'

const NavItem = ({ id, url, icon, heading, ...rest }) => (
  <Item key={id} {...rest}>
    <Item.Link to={url}>
      <Item.Inner>
        <Icon type={icon} />
        <Item.Heading>{ heading }</Item.Heading>
      </Item.Inner>
    </Item.Link>
  </Item>
)

export default NavItem
