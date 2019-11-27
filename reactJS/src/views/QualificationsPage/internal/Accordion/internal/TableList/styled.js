import styled from 'styled-components'
import { Table } from 'antd'
import { styleguide } from '../../../../../../constants'
const { colors } = styleguide

const AntTable = styled(Table)`
  && {

    border: .2rem solid #3b4858;
    border-bottom: 0;
    
    .ant-table-body {

      tr {

        td {
          border-color: #3b4858;
          color: ${colors.mainColor};
          border-width: .2rem;
        }

        &:hover {

          td {
            color: ${colors.white};
            background-color: rgba(59, 72, 88, .2);
          }
        }
      }
    }

    .ant-table-thead {

      tr {
        th {
          border-radius: 0 !important;
          background-color: ${colors.grayFourth};
          color: ${colors.mainColor};
          border: none;
        }
      }
    }

    .ant-table-placeholder {
        background-color: transparent;
        border-color:  #3b4858;
        border-radius: 0;
        border-width: .2rem;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: ${colors.mainColor};
          img {
            margin-top: 2.5rem;
            width: 10rem;
            height: auto;
          }
        }
      }
  }
`

export {
  AntTable
}
