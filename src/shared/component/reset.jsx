// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Reset = ({ label, handleClick }: Props) =>
  <button
    onClick={handleClick}
    className="btn btn-primary"
    type="reset"
    role="reset"
  >{label}</button>

export default Reset
