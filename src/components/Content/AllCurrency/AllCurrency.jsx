import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import CurrenciesContent from './CurrenciesContent/CurrenciesContent'
import Title from './CurrenciesContent/Title'

const AllCurrency = ({ currencies }) => (
  <AllCurrencyWrap className="animate__animated animate__backInUp">
    <Title />
    {currencies.map((item) => {
      return (
        <CurrenciesContent
          CharCode={item.CharCode}
          Nominal={item.Nominal}
          Name={item.Name}
          Value={item.Value}
          Previous={item.Previous}
        />
      )
    })}
  </AllCurrencyWrap>
)

AllCurrency.propTypes = {
  currencies: PropTypes.arrayOf({
    CharCode: PropTypes.string,
    ID: PropTypes.string,
    Name: PropTypes.string,
    Nominal: PropTypes.string,
    NumCode: PropTypes.string,
    Previous: PropTypes.string,
    Value: PropTypes.string,
  }).isRequired,
}

const AllCurrencyWrap = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

export default AllCurrency
