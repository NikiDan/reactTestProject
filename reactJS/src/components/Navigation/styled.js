import styled from 'styled-components'
import { Menu } from 'antd'
import { styleguide } from '../../constants'
const { colors } = styleguide

const Nav = styled.nav``

Nav.Menu = styled(Menu)`
  border: none !important;
  background-color: transparent !important;
`
Nav.SubMenu = styled(Menu.SubMenu)`
  color: ${colors.mainColor};
`

export {
  Nav
}
