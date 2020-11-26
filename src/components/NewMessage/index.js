import React, { useState } from 'react'
import './style.scss'

function NewMessage(props) {
  const [value, setValue] = useState('')

  function onSubmitForm(e) {
    e.preventDefault()

    props.addNewMessage(value)
    setValue('')
  }

  return (
    <form onSubmit={(e) => onSubmitForm(e)} className="new-message">
      <textarea
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength="350"
        placeholder="Hello my friend"
        onKeyDown={(e) => e.keyCode === 13 && onSubmitForm(e)}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default NewMessage
