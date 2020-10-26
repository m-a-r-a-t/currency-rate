import React from 'react'
import { connect } from 'react-redux'
import converterActionCreator from '../../redux/converterReducer/converterActionCreator'
import Converter from './Converter'

const ConverterContainer = () => <Converter />

const mapStateToProps = (state) => {
  return {
    converters: state.converters,
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    convert: (value) => dispatch(converterActionCreator('CHANGE-FIRST-INPUT',value)),
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Converter)
