import { selector } from 'recoil'

import { currentMessagesState } from './atoms'

export const messagesCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const messages = get(currentMessagesState)

    return messages.length
  },
})
