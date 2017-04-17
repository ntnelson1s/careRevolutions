// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.home.get('turn'),
})

export default connect(mapStateToProps)(Message)
