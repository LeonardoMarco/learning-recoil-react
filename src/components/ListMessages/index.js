import React from 'react'

function ListMessages(props) {
  return (
    <div>
      {props.messages.map((message) => (
        <h1>{message}</h1>
      ))}
    </div>
  )
}

export default ListMessages
