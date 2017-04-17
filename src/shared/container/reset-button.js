// @flow

import { connect } from 'react-redux'

import { resetBoard } from '../action/hello'
import Reset from '../component/reset'

const mapStateToProps = () => ({
  label: 'Reset',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(resetBoard()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
