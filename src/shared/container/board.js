// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Board from '../component/board'

const mapStateToProps = state => ({
  rows: state.home.get('rows'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: (a, b) => { dispatch(sayHello(`r${a}s${b}`)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
