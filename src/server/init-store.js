// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import homeReducer from '../shared/reducer/hello'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.home) {
    // flow-disable-next-line
    preloadedState.home = homeReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.home))
  }

  return createStore(combineReducers({ home: homeReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
