import React from 'react'
import axios from 'axios'
import User from './User.jsx'

export default class UserList extends React.Component {

  state = { users: [] }

  componentDidMount = async () => {
    try {
      const { data } = await axios.get('/api/users')
      this.setState({ users: data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { users } = this.state
    return (
      <div className="user-list">

        <p className='lead'>Here's a list of {users.length} completely fictitious people:</p>

        <table className="table">
          <tbody>
            { users.map(u => <User {...u} key={u.id} />) }
          </tbody>
        </table>
      </div>
    )
  }
}
