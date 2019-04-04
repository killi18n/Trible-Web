import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/base.scss'
import * as serviceWorker from './serviceWorker'

const RootElement = document.getElementById('root')

const MainComponent = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<MainComponent />, RootElement)

serviceWorker.unregister()
