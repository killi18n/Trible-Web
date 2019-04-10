import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from '../pages'

const App = () => {
    return (
        <Switch>
            {/* <Route exact={true} path="/" component={LandingPage} /> */}
            <Route path="*" component={LandingPage} />
        </Switch>
    )
}

export default App
