import { connect } from 'react-redux'
import currenciesActionCreator from '{}/currenciesReducer/currenciesActionCreator'
import Content from './Content'

const cors = 'https://cors-anywhere.herokuapp.com/'
const API = 'https://www.cbr-xml-daily.ru/daily_json.js'

function getCurrenciesFromAPI(proxyurl, url, dispatchState) {
  fetch(proxyurl + url)
    .then((response) => response.json())
    .then((data) =>
      dispatchState(currenciesActionCreator('INIT', Object.values(data.Valute)))
    )
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
