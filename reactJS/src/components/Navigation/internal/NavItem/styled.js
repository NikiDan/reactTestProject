import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ReactSVG from 'react-svg'
import { Menu } from 'antd'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const Item = styled(Menu.Item)`
`

Item.Link = styled(NavLink)`
  position: relative;
  display: block;
  color: ${colors.mainColor};
`
Item.Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
`
Item.Icon = styled(ReactSVG)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  display: none;
  div {
    font-size: 2rem;
    line-height: 2rem;
    width: 100%;
    height: 100%;
  }
`
Item.Heading = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.4rem;
`
export {
  Item
}
