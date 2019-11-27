import styled from 'styled-components'
import { styleguide } from '../../constants'
import { Modal } from 'antd'
const { colors } = styleguide

const AntModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 0;
    background-color: ${colors.asideColor};
    border: .2rem solid ${colors.headerColor};
    padding: 3rem;
    .ant-modal-header,
    .ant-modal-body,
    .ant-modal-footer {
      padding-left: 0;
      padding-right: 0;
    }
    .ant-modal-header {
      border-radius: 0;
      padding-top: 0;
      background-color: transparent;
      border-bottom: 0;
      .ant-modal-title {
        color: ${colors.white};
      }
    }
    .ant-modal-footer {
      border-top: 0;
      .ant-btn {
        border-width: .2rem;
        font-weight: 500;
        &:first-of-type {
          border-color: ${colors.grayFourth};
          color: ${colors.white};
          background-color: ${colors.grayFourth};
        }
        &:last-of-type {
          border-color: ${colors.blue};
          color: ${colors.white};
          background-color: ${colors.blue};
        }
      }
    }
  }
`

export {
  AntModal
}
