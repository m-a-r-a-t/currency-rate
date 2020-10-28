const initialState = {
  converter1: {
    CharCode: 'RUS',
      ID: 1,
      Name: 'Рубль',
      Nominal: 1,
      NumCode: 1,
      Previous: 1,
      Value: 1,
  },
  converter2: {
    CharCode: 'RUS',
      ID: 1,
      Name: 'Рубль',
      Nominal: 1,
      NumCode: 1,
      Previous: 1,
      Value: 1,
  },
}

const converterReducer = (state = initialState, action) => {
  const stateCopy = { ...state }
  const ID1 = action.id === '1' ? 'converter1' : 'converter2'
  const ID2 = ID1 === 'converter1' ? 'converter2' : 'converter1'
  switch (action.type) {
    case 'INIT-CONVERTERS':
      // eslint-disable-next-line no-debugger
      debugger
      stateCopy[ID1] = { ...action.value }
      stateCopy[ID2] = { ...action.value }
      return stateCopy

    case 'CHANGE-INPUT':
      // eslint-disable-next-line no-debugger
      debugger
      stateCopy[ID1] = {
        ...state[ID1],
        inputValue: action.value,
      }
      stateCopy[ID2].inputValue = (
        (stateCopy[ID1].Value /
          stateCopy[ID1].Nominal /
          (stateCopy[ID2].Value / stateCopy[ID2].Nominal)) *
        +stateCopy[ID1].inputValue
      ).toFixed(2)
      // eslint-disable-next-line no-debugger
      debugger
      return stateCopy

    case 'CHANGE-SELECT': {
      const { Value, CharCode, Nominal, inputValue } = action.value
      stateCopy[ID2] = { ...state[ID2] }
      stateCopy[ID1] = {
        Value,
        CharCode,
        Nominal,
        inputValue,
      }
      return stateCopy
    }
    default:
      break
  }

  return stateCopy
}

export default converterReducer
