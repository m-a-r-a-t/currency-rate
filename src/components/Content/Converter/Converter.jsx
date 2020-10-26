import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ConvertArea from './ConvertArea/ConvertArea'

const Converter = ({ state }) => {
  const [converterValue1, setConverterValue1] = useState('')
  const [converterValue2, setConverterValue2] = useState('')

  const onChangeInput = (e, name ) => {
    setConverterValue1(e.target.value)
    setConverterValue2(e.target.value)
  }

  return (
    <ConveterWrap className="animate__animated animate__zoomIn">
      <ConvertArea
        onChangeInput={onChangeInput}
        value={converterValue1}
        state={state}
      />
      <ConvertArea
        onChangeInput={onChangeInput}
        value={converterValue2}
        state={state}
      />
    </ConveterWrap>
  )
}

export default Converter

const ConveterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Converter.propTypes = {
  state: PropTypes.arrayOf({
    CharCode: PropTypes.string,
    ID: PropTypes.string,
    Name: PropTypes.string,
    Nominal: PropTypes.string,
    NumCode: PropTypes.string,
    Previous: PropTypes.string,
    Value: PropTypes.string,
  }).isRequired,
}
