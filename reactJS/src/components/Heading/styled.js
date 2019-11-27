import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.white};
  margin-bottom: 2rem;
  font-weight: 500;
`

export {
  Title
}
