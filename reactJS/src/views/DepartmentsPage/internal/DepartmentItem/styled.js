import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const DepartmentCard = styled.li`
  border: .2rem solid gray;
  ${props => props.selected && `border-color: ${colors.green};`};
  position: relative;
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;
  cursor: pointer;
`
DepartmentCard.Wrap = styled.div`
  padding: 1.5rem 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
DepartmentCard.Name = styled.h4`
  font-size: 1.8rem;
  text-transform: capitalize;
`
DepartmentCard.Settings = styled.div`
    position: absolute;
    bottom: .3rem;
    right: .3rem;
`
DepartmentCard.Delete = styled.button`
`
DepartmentCard.Update = styled.button`
  margin: 0 .5rem;
`
DepartmentCard.Arrow = styled(ReactSVG)`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: -0.75rem;
  top: -1.25rem;
  background-color: ${colors.mainBgColor};
  div {
    svg {
      fill: ${props => props.checked ? colors.green : colors.mainColor};
    }
  }
`

export {
  DepartmentCard
}
