import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ConvertArea from './ConvertArea/ConvertArea'

const Converter = ({ currencies, converters, dispatch }) => {
  return (
    <ConveterWrap className="animate__animated animate__zoomIn">
      <ConvertArea
        converter={converters.converter1}
        dispatch={dispatch}
        state={currencies}
        type="FIRST"
      />
      <ConvertArea
        converter={converters.converter2}
        dispatch={dispatch}
        state={currencies}
        type="SECOND"
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
  currencies: PropTypes.arrayOf({
    CharCode: PropTypes.string,
    ID: PropTypes.string,
    Name: PropTypes.string,
    Nominal: PropTypes.string,
    NumCode: PropTypes.string,
    Previous: PropTypes.string,
    Value: PropTypes.string,
  }).isRequired,

  converters: PropTypes.arrayOf({
    converter1: {
      Value: PropTypes.number,
      CharCode: PropTypes.string,
      Nominal: PropTypes.number,
      inputValue: PropTypes.string,
    },
    converter2: {
      Value: PropTypes.number,
      CharCode: PropTypes.string,
      Nominal: PropTypes.number,
      inputValue: PropTypes.string,
    },
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}
