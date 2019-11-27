import styled from 'styled-components'

import { styleguide } from '../../../../../../../constants'

const { colors } = styleguide

const Card = styled.li`
  border: .1rem solid ${colors.grayFourth};
  ${props => props.selected && `border-color: ${colors.blue};`};
  position: relative;
  width: 100%;
  height: 6rem;
  margin-bottom: .5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: .3rem .3rem .3rem 1.5rem ;
`
Card.Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
Card.Name = styled.h4`
  font-size: 1.3rem;
  text-transform: capitalize;
  margin-bottom: 0;
  ${props => props.selected && `color: ${colors.blue};`};
`
Card.Settings = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-left: 1rem;
`
Card.Button = styled.button`
  margin-right: 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: .1rem solid ${colors.mainColor};
  color: ${colors.mainColor};
  cursor: pointer;
  text-transform: capitalize;
  ${props => props.selected && `color: ${colors.blue}; border-color: ${colors.blue}`};
  &:last-of-type {
    margin-right: 0;
  }
`
Card.Update = styled.button`
  margin: 0 .5rem;
`

export {
  Card
}
