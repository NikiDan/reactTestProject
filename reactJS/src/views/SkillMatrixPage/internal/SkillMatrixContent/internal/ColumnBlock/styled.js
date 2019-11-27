import styled from 'styled-components'
import { Divider } from 'antd'

import { styleguide } from '../../../../../../constants'

const { colors } = styleguide

const ColumnWrapper = styled.div`
  flex-basis: 70%;
  background-color: ${colors.mainBgColor};
  overflow-x: auto;
`

const ColumnContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`
ColumnContent.SpinnerWrapp = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`
ColumnContent.Item = styled.div`
  position: relative;
  width: 25rem;
  max-width: 25rem;
  height: 100%;
  border-right: .1rem solid grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: .1rem solid ${colors.grayFourth};
  padding: 0 1rem 1rem;
  margin-right: .1rem;
`

ColumnContent.ItemName = styled(Divider)`
  && {
    color: ${colors.white} !important;
  }
`

ColumnContent.AddNew = styled.a`
  border: .1rem dashed ${colors.blue};
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  color: ${colors.blue};
  text-align: center;
  text-transform: capitalize;
  margin: 1rem 0;
  opacity: .7;
  transition: .3s ease-in-out;
  &:hover {
  opacity: 1;
  }
`

const CardsWrapp = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export {
  ColumnWrapper,
  ColumnContent,
  CardsWrapp
}
