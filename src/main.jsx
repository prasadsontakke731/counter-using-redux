import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={appStore}>

    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>

)
