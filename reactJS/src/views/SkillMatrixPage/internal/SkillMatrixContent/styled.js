import styled from 'styled-components'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const SkillMatrixWrapp = styled.div`
  width: 100%;
  height: 100%;
`
SkillMatrixWrapp.Head = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${colors.asideColor};
`

SkillMatrixWrapp.Body = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 50rem;
`

export {
  SkillMatrixWrapp
}
