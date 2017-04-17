// @flow

import { connect } from 'react-redux'

import Result from '../component/result'

const mapStateToProps = state => ({
  result: state.home.get('result'),
})

export default connect(mapStateToProps)(Result)
