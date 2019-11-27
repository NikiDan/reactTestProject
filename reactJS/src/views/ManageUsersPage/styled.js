import styled from 'styled-components'
import { Button } from 'antd'
import { styleguide } from '../../constants'

const { colors } = styleguide

const FlexRow = styled.div`
  display: flex;
  margin-top: 5rem;
  width: 100%;
`

FlexRow.Item = styled.div`
  flex-basis: 25%;
  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
  }
`

const ModalItem = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 1rem;
  }
`

const TableButton = styled(Button)`
  && {
    background-color: transparent;
    margin-right: 2rem;
    border-color: ${colors.tableColor};
    width: 100%;
    max-width: 20rem;
    text-align: center;

    &:hover {
      background-color: rgba(59,72,88,.5);
      border-color: ${colors.tableColor};
    }
    &:focus {
      background-color: rgba(59,72,88,.5);
      border-color: ${colors.tableColor};
    }
  }
`

export {
  FlexRow,
  TableButton,
  ModalItem
}
