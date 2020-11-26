import React from 'react'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root'),
)
