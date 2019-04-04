import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LandingPage, NotFoundPage } from '../pages'

const App = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={LandingPage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default App
