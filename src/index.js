import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import ErrorBoundray from './components/error-boundray'
import { ServiceProvider } from './components/context'

import store from './store'

import Service from './service/service'

const service = new Service()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundray>
            <ServiceProvider value={service}>
                <Router>
                    <App />
                </Router>
            </ServiceProvider>
        </ErrorBoundray>
    </Provider>,
    document.getElementById('root')
)
