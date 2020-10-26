import '@/styles.scss'
import React from 'react'
import { render } from 'react-dom'
import 'animate.css'
import registerServiceWorker from 'react-service-worker'
import App from '@/components/App'

render(<App />, document.getElementById('app'))

registerServiceWorker()
