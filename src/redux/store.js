import { createStore, combineReducers } from 'redux'
import converterReducer from './converterReducer/converterReducer'
import currenciesReducer from './currenciesReducer/currenciesReducer'

const reducers = combineReducers({
  converters: converterReducer,
  currencies: currenciesReducer,
})

const store = createStore(reducers)

export default store
