import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AllCurrency from './AllCurrency/AllCurrency'
import Chart from './Chart/Chart'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

const Content = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => setState(Object.values(data.Valute)))
  }, [])
  return (
    <ContentContainer>
      <Switch>
        <Route exact path="/" render={() => <AllCurrency state={state} />} />
        <Route path="/chart" render={() => <Chart />} />
      </Switch>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  color: #8d96b2;
  margin-top: 2rem;
  width: 60rem;
`

export default Content
