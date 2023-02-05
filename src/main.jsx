import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Stopwatch from './Stopwatch'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Stopwatch />
    </Provider>
  </React.StrictMode>
)
