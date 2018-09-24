import React from 'react'
import { render } from 'react-dom'
import UserList from './components/UserList.jsx'

const App = (props) => (
  <UserList />
)

render(<App />, document.getElementById('app'))
