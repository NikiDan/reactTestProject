import styled from 'styled-components'
import { styleguide } from '../constants'

const { colors } = styleguide

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex: 1;
  background: ${colors.mainBgColor};
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 8.5rem 2rem 2rem;
  position: relative;
  overflow-y: auto;
`
const Sidebar = styled.aside`
  min-width: 20rem;
  height: 100%;
  padding: 7rem 0 0;
  background-color: ${colors.asideColor};
  overflow: hidden;
`

export {
  Main,
  Content,
  Sidebar
}
