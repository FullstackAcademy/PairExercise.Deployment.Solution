import React from 'react'
import User from './User.jsx'

export default ({ users }) => (
  <div className="user-list">

    <p className='lead'>Here's a list of {users.length} completely fictitious people:</p>
    <p>Do changes in this branch show up on master branch since they're merged? Or do they diverge again?</p>

    <table className="table">
      <tbody>
        { users.map(u => <User {...u} key={u.id} />) }
      </tbody>
    </table>
  </div>
)
