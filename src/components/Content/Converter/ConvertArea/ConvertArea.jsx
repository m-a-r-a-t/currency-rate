import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import converterActionCreator from '{}/converterReducer/converterActionCreator'

const ConvertArea = ({ state, converter, dispatch, type }) => {
  const onChangeInput = (e) => {
    dispatch(converterActionCreator(`CHANGE-${type}-INPUT`, e.target.value))
  }
  const onChangeSelect = (e) => {
    dispatch(converterActionCreator(`CHANGE-${type}-INPUT`, e.target.value))
  }
  return (
    <SelectWrap>
      <Select onChange={onChangeSelect} name="" id="">
        {state.map((item) => (
          <option value={`${item.CharCode}`} label={`${item.CharCode}`} />
        ))}
      </Select>
      <InputWrap
        onChange={onChangeInput}
        value={converter.inputValue}
        type="text"
      />
    </SelectWrap>
  )
}

ConvertArea.propTypes = {
  state: PropTypes.arrayOf({
    CharCode: PropTypes.string,
    ID: PropTypes.string,
    Name: PropTypes.string,
    Nominal: PropTypes.string,
    NumCode: PropTypes.string,
    Previous: PropTypes.string,
    Value: PropTypes.string,
  }).isRequired,
  converter: PropTypes.shape({
    Value: PropTypes.number,
    CharCode: PropTypes.string,
    Nominal: PropTypes.number,
    inputValue: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default ConvertArea

const SelectWrap = styled.div`
  border: 1px solid #4285f4;
  width: 25rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 3rem;

  margin-bottom: 0.5rem;
`

const Select = styled.select`
  font-size: 1rem;
  color: #8d96b2;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
  border-right: 1px solid #4285f4;
  outline: none;
  height: 100%;
`

const InputWrap = styled.input`
  height: 100%;
  padding: 0;
  color: #8d96b2;
  border: 0px;
  outline: none;
  font-size: 1.5rem;
`
