import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const Btn = styled.button`
  width: 100%;
  max-width: 10rem;
  padding: .5rem 1rem;
  font-size: 1.4rem;
  color: ${colors.blue};
  background-color: transparent;
  border: 1px solid ${colors.blue};
  border-radius: .2rem;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`

export {
  Btn
}
