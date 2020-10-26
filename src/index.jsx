import '@/styles.scss'
import React from 'react'
import { render } from 'react-dom'
import 'animate.css'
import registerServiceWorker from 'react-service-worker'
import App from '@/components/App'
import { Provider } from 'react-redux'
import store from './redux/store'

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('app'))
registerServiceWorker()
