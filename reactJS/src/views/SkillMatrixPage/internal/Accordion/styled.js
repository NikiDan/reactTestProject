import styled from 'styled-components'
import { Collapse } from 'antd'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const AntAccordeon = styled(Collapse)`
  && {
    border-radius: 0;
    background-color: transparent;
    border-color: transparent;
    .ant-collapse-item {
      border-color: ${colors.mainBgColor};
      border-width: .2rem;
      border-radius: 0 !important;
      
      &.ant-collapse-item-active {

        .ant-collapse-header {
          color: ${colors.white};
        }
      }

      .ant-collapse-header {
        background-color: ${colors.grayFourth};
        border-radius: 0 !important;
        color: ${colors.mainColor};
      }
    }
    .ant-collapse-content {
      border: .2rem solid #3b4858;
      border-top: 0;
      background-color: transparent;
      border-radius: 0 !important;
    }
  }
`

const LevelDescr = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 2rem 0;
  background-color: #3d4d65;
  p {
    color: #c8d1dd;
    font-size: 1.8rem;
`

export {
  LevelDescr,
  AntAccordeon
}
