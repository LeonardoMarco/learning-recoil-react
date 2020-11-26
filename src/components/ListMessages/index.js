import React from 'react'
import './style.scss'

function ListMessages(props) {
  return (
    <div className='box-messages'>
      {props.messages.map((message) => (
        <div className="message">{message}</div>
      ))}
    </div>
  )
}

export default ListMessages
