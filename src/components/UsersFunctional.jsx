import React , { useState, useEffect, Fragment } from 'react'

import Button from './Button/Button'

const UsersFunctional = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // fetchUsers()
  }, [])

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonThing => setUsers(jsonThing))
  }

  return(
    <Fragment>
      <ul>
      {
        users.map((user, index) => {
          return (
          <li key={index}>
            {user.name}
          </li>
          )
        })
      }
      </ul>
      {props.children}
      <Button className="btn-01" text="Load Users" action={() => fetchUsers() } />
    </Fragment>
    
  )
}
export default UsersFunctional