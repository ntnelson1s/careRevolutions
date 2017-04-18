// @flow

import React from 'react'

type Props = {
  rows: array,
  handleClick: Function,
}

const Board = ({ rows, handleClick }: Props) =>

  <div>
    {rows.map((e, i) =>
      <div
        key={'row' + i}
        data-rend={'row' + i}
        className="text-center"
      >
        {e.toArray().map((f, j) =>
          <button
            key={'square' + j}
            data-rend={'square' + j}
            onClick={() => handleClick(i, j)}
            style={{
              height: '100px',
              width: '100px',
              border: 'solid 1px black',
            }}
            className="btn btn-primary text-center col-xs-2 panel btn-lg"
            type="button"
            role="button"
          >{f}</button>)}
      </div>,
    )}
  </div>

export default Board
