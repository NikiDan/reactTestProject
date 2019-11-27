import styled from 'styled-components'
import { styleguide } from '../../constants'
const { colors } = styleguide

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

FlexRow.Item = styled.div`
  width: 100%;
  padding: 5rem 0;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: .1rem;
    transform: translateX(-50%);
    background-color: ${colors.asideColor};
  }
`
FlexRow.UserInfo = styled.div`
  display: flex;
  align-items: center;
`
const UserInfo = styled.div`
  margin-left: 2rem;
  padding: 0 2rem;
  border-left: .1rem solid ${colors.asideColor};
`

const UserLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 40%;
`
UserLevel.Wrapp = styled.div``

UserLevel.Item = styled.p`
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export {
  FlexRow,
  UserInfo,
  UserLevel
}
