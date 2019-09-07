import React, { Component } from 'react'

class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonThing => this.setState({ users: jsonThing }))
  }

  render() {
    const {users} = this.state
    console.log(users)
    return (
      <ul>
        {
          users.map(user => {
            return (
            <li>
              {user.name}
            </li>
            )
          })
        }
      </ul>
    )
  }
}
export default Users