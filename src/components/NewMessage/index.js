import React, { useState } from 'react'

function NewMessage(props) {
  const [value, setValue] = useState('')

  function onSubmitForm(e) {
    e.preventDefault()

    props.addNewMessage(value)
    setValue('')
  }

  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default NewMessage
