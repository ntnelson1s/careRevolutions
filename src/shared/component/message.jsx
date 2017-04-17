// @flow

import React from 'react'

type Props = {
  message: string,
}

const Message = ({ message }: Props) =>
  <p>Player {message}'s Turn</p>

export default Message
