// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Board from '../component/board'

const mapStateToProps = state => ({
  rows: state.home.get('rows'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
