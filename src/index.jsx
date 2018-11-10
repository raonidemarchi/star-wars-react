import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import icon from './img/favicon.ico'
import './styles/styles.scss'

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

// favicon
const newLink = document.createElement('link')
newLink.rel = 'shortcut icon'
newLink.href = icon
document.querySelector('head').appendChild(newLink)

ReactDOM.render(<App />, document.getElementById('app'))
