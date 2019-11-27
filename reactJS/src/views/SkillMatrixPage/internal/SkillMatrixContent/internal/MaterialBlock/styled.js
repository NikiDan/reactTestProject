import styled from 'styled-components'

import { styleguide } from '../../../../../../constants'
const { colors } = styleguide

const MaterialWrapp = styled.div`
  width: 100%;
  flex-basis: 30%;
  margin-left: 1.5rem;
  background-color: ${colors.asideColor};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
`
MaterialWrapp.GeneralItem = styled.div`
  margin-bottom: 5rem;
  flex-basis: 50%;
`
MaterialWrapp.List = styled.ul`
  margin: 0;
  padding-left: .5rem;
  list-style: none;
`
MaterialWrapp.HelpBlock = styled.div`
`
MaterialWrapp.HelpText = styled.p`
  font-size: 1.4rem;
  color: ${colors.mainColor};
`
MaterialWrapp.Button = styled.button`
  margin-right: 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: .1rem solid ${colors.blue};
  color: ${colors.blue};
  cursor: pointer;
  text-transform: capitalize;
  margin-top: 3rem;
`

export {
  MaterialWrapp
}
