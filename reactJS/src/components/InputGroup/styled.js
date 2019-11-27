import styled from 'styled-components'

import { Input, Select, Cascader, AutoComplete } from 'antd'

import { styleguide } from '../../constants'
const { colors } = styleguide

const { TextArea } = Input
const { Option } = Select

const InputGroupWrapp = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 30rem;
`
InputGroupWrapp.Label = styled.label`
  font-size: 1.3rem;
  color: ${colors.mainColor};
  text-transform: capitalize;
  display: block;
`

InputGroupWrapp.Input = styled(Input)`
  && {
    background-color: #374355 !important;
    border-color: #54647e !important;
    color: ${colors.mainColor};
    margin-top: .5rem;
    border-radius: 0 !important;
    border-width: .2rem;
    outline: none;
    height: 4rem;
    &::-webkit-input-placeholder {
      color: #54647e;
    }
    .ant-input-group {
      height: 100%;
      border: .2rem solid #54647e;
      .ant-input-group-addon {
        border-radius: 0;
        border: none;
        border-right: .2rem solid #54647e;
        color: ${colors.blue};
        background-color: transparent;
      }
      .ant-input-disabled {
        height: 100%;
        border: none;
        background-color: transparent;
        color: #54647e;
      }
    }
  }
`

InputGroupWrapp.TextArea = styled(TextArea)`
    && {
    background-color: #374355 !important;
    border-color: #54647e !important;
    color: ${colors.mainColor};
    margin-top: .5rem;
    border-radius: 0 !important;
    border-width: .2rem;
    outline: none;
    resize: none;
    &::-webkit-input-placeholder {
      color: #54647e;
    }
  }
`

InputGroupWrapp.Select = styled(Select)`
    && {
      width: 100%;
    .ant-select-selection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 4rem;
      background-color: #374355 !important;
      border-color: #54647e !important;
      color: ${colors.mainColor};
      margin-top: .5rem;
      border-radius: 0 !important;
      border-width: .2rem;
      outline: none;
      .ant-select-arrow {
        i {
          svg {
            fill: ${colors.mainColor};
          }
        }
      }
    }
  }
`

InputGroupWrapp.Option = styled(Option)``

InputGroupWrapp.Cascader = styled(Cascader)`
  width: 100%;
  background-color: #374355 !important;
  color: #c8d1dd !important;
  margin-top: .5rem !important;
  .ant-cascader-input {
    border: .2rem solid #54647e;
    border-radius: 0;
    height: 4rem;
    &:hover,
    &:focus {
      border-color: #54647e !important;
    }
  }
  .ant-cascader-picker-arrow {
    svg {
      fill: ${colors.mainColor};
    }
  }
  .ant-cascader-picker-clear {
    background-color: #374355 !important;
    svg {
      fill: ${colors.mainColor};
    }
  }
`

InputGroupWrapp.AutoComplete = styled(AutoComplete)`
  && {
    width: 100%;
    background-color: transparent !important;
    .ant-select-search__field {
      background-color: #374355 !important;
    border-color: #54647e !important;
    color: ${colors.mainColor};
    margin-top: .5rem;
    border-radius: 0 !important;
    border-width: .2rem !important;
    outline: none;
    height: 4rem !important;
    &::-webkit-input-placeholder {
      color: #54647e;
    }
    }
  }
`

export {
  InputGroupWrapp
}
