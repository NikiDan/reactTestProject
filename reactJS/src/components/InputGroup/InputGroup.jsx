import React from 'react'

import { InputGroupWrapp } from './styled'

const InputGroup = ({ options = [], optionsList, label, kind, ...rest }) => {
  return (
    <InputGroupWrapp>
      <InputGroupWrapp.Label>{label}</InputGroupWrapp.Label>
      {kind === 'input' && <InputGroupWrapp.Input {...rest} />}
      {kind === 'textarea' && <InputGroupWrapp.TextArea {...rest} />}
      {kind === 'select' && <InputGroupWrapp.Select {...rest}>
        {options.map(type =>
          <InputGroupWrapp.Option className='option' key={type.id} value={type.id}>{type.name}</InputGroupWrapp.Option>
        )}
      </InputGroupWrapp.Select>}
      {kind === 'cascader' && <InputGroupWrapp.Cascader options={optionsList} {...rest} />}
      {kind === 'autocomplete' && <InputGroupWrapp.AutoComplete {...rest} />}
    </InputGroupWrapp>
  )
}

export default InputGroup
