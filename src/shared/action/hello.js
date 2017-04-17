// @flow

import { createAction } from 'redux-actions'

export const SAY_HELLO = 'SAY_HELLO'
export const RESET = 'RESET'

export const sayHello = createAction(SAY_HELLO)
export const resetBoard = createAction(RESET)
