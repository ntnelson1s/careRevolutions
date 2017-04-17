// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Message from '../../container/message'
import Result from '../../container/result'
import Board from '../../container/board'
import ResetButton from '../../container/reset-button'

const title = 'Care Revolutions Tic-Tac-Toe'

const HomePage = () =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row text-center">
      <div className="col-12">
        <h1>{title}</h1>
        <Message />
        <Result />
        <Board />
        <ResetButton />
      </div>
    </div>
  </div>

export default HomePage
