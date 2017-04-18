// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'
const { fromJS, isIndexed } = require('immutable')

import {
  SAY_HELLO,
  RESET,
} from '../action/hello'

const initialState = Immutable.fromJS({
  result: '',
  rows: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  turn: 'X',
  winner: undefined,
})

function checkWin(rows) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
  const flattened = rows.reduce((acc, row) => acc.concat(row), [])

  return combos.find(combo => (
    flattened[combo[0]] !== '' &&
    flattened[combo[0]] === flattened[combo[1]] &&
    flattened[combo[1]] === flattened[combo[2]]
  ))
}

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      let rows = state.get('rows').toArray().map(e => e.toArray())
      const turn = state.get('turn')
      const row = Number(action.payload[1])
      const square = Number(action.payload[3])
      let move = rows[row][square]
      if (move) return state
      rows[row][square] = turn
      const moves = rows.reduce((acc, row) => acc.concat(row), []).join('').length
      if (checkWin(rows)) return state.set('result', 'Winner!')
      if (moves === 9) return state.set('result', 'Draw!')
      return state.set('rows', fromJS(rows)).set('turn', state.get('turn') === 'X' ? 'O' : 'X')
    case RESET:
      return initialState
    default:
      return state
  }
}

export default helloReducer
