/* eslint-disable no-debugger */
import { connect } from 'react-redux'
import currenciesActionCreator from '{}/currenciesReducer/currenciesActionCreator'
import Content from './Content'

const cors = 'https://cors-anywhere.herokuapp.com/'
const API = 'https://www.cbr-xml-daily.ru/daily_json.js'

function getCurrenciesFromAPI(proxyurl, url, dispatchState) {
  fetch(proxyurl + url)
    .then((response) => response.json())
    .then((data) => {
      const map = new Map(Object.entries(data.Valute))
      map.set('RUS', {
        CharCode: 'RUS',
        ID: '12345',
        Name: 'Российский рубль',
        Nominal: 1,
        NumCode: '1',
        Previous: 1,
        Value: 1,
      })
      dispatchState(currenciesActionCreator('INIT', map))
    })
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
    converters: state.converters,
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    initState: () => getCurrenciesFromAPI(cors, API, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Content)
