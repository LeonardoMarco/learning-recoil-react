import { useRecoilValue, useRecoilState } from 'recoil'
import NewMessage from './components/NewMessage'
import ListMessages from './components/ListMessages'

import { currentMessagesState } from './recoil/atoms'
import { messagesCountState } from './recoil/selectors'

function App() {
  const messagesCount = useRecoilValue(messagesCountState)
  const [currentMessages, setCurrentMessages] = useRecoilState(
    currentMessagesState,
  )

  function addNewMessage(message) {
    setCurrentMessages([...currentMessages, message])
  }

  return (
    <div>
      <NewMessage addNewMessage={(message) => addNewMessage(message)} />
      <ListMessages messages={currentMessages} />
    </div>
  )
}

export default App
