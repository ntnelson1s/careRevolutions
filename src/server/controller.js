// @flow

export const homePage = () => ({
  home: {
    message: 'Initial server reducer message',
    result: '',
    rows: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: 'X',
    winner: undefined,
  },
})
