import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './CurrenciesContent.scss'

const CurrenciesContent = ({
  CharCode, Nominal, Name, Value, Previous, NumCode, ID,
}) => {
  const changesAndPercentClass = () => (Value > Previous ? 'green center' : 'red center')

  return (
    <CurrenciesContentWrap>
      <div className="center">{CharCode}</div>
      <div className="center">{Nominal}</div>
      <div className="black">{Name}</div>
      <div className="black center">{Value}</div>
      <div className={changesAndPercentClass()}>
        {(Value > Previous ? '+' : '') + (Value - Previous).toFixed(2)}
      </div>
      <div className={changesAndPercentClass()}>
        {(Value > Previous ? '+' : '') + ((Value * 100) / Previous - 100).toFixed(2)}
      </div>
    </CurrenciesContentWrap>
  )
}

CurrenciesContent.propTypes = {
  CharCode: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Nominal: PropTypes.string.isRequired,
  NumCode: PropTypes.string.isRequired,
  Previous: PropTypes.string.isRequired,
  Value: PropTypes.string.isRequired,

}

const CurrenciesContentWrap = styled.div`
  display: grid;
  padding: 1rem 2rem;
  border-bottom: 0.5px solid #8d96b2;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 0.5fr;
  transition: 0.2s all;
  :hover {
    background: #edeef0;
  }
`

export default CurrenciesContent
