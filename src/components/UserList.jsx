import React, { Fragment } from 'react'

// const UserList = (props) => {
const UserList = ({ theArray, noDisplayName }) => {
  return (
    <div>
      <h2>Users:</h2>
      {
        theArray.filter(el => el.name !== noDisplayName).map((user, i) => {
          return (
            <Fragment key={i}>
              <h3> {user.name} </h3>
              <p> {user.age} </p>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default UserList