/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AllCurrency from './AllCurrency/AllCurrency'
import Chart from './Chart/Chart'
import Converter from './Converter/Converter'

const Content = ({ currencies, initState, converters, dispatch }) => {
  useEffect(() => {
    initState()
  }, [])
  return (
    <ContentContainer>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AllCurrency currencies={currencies} />}
        />
        <Route path="/chart" render={() => <Chart />} />
        <Route
          path="/converter"
          render={() => (
            <Converter
              dispatch={dispatch}
              converters={converters}
              currencies={currencies}
            />
          )}
        />
      </Switch>
    </ContentContainer>
  )
}

Content.propTypes = {
  currencies: PropTypes.arrayOf({
    CharCode: PropTypes.string,
    ID: PropTypes.string,
    Name: PropTypes.string,
    Nominal: PropTypes.string,
    NumCode: PropTypes.string,
    Previous: PropTypes.string,
    Value: PropTypes.string,
  }).isRequired,

  initState: PropTypes.func.isRequired,

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
const ContentContainer = styled.div`
  color: #8d96b2;
  margin-top: 2rem;
  width: 60rem;
`

export default Content
