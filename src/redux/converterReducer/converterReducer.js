const initialState = {
  converter1: {
    Value: 123,
    CharCode: 'AUD',
    Nominal: 1000,
    inputValue: '',
  },
  converter2: {
    Value: 123,
    CharCode: 'AUD',
    Nominal: 1000,
    inputValue: '',
  },
}

const converterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-FIRST-INPUT': {
      const stateCopy = { ...state }
      stateCopy.converter1 = { ...state.converter1, inputValue: action.value }
      stateCopy.converter2 = stateCopy.converter1
      return stateCopy
    }
    case 'CHANGE-SECOND-INPUT': {
      const stateCopy = { ...state }
      stateCopy.converter2 = { ...state.converter2, inputValue: action.value }
      stateCopy.converter1 = stateCopy.converter2
      return stateCopy
    }
    default:
      break
  }

  return state
}

export default converterReducer
