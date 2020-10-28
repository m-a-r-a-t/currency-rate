const initialState = new Map(
  Object.entries({
    RUS: {
      CharCode: 'RUS',
      ID: 1,
      Name: 'Рубль',
      Nominal: 1,
      NumCode: 1,
      Previous: 1,
      Value: 1,
    },
  })
)

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.value
    }
    default:
      break
  }
  return state
}

export default currenciesReducer
