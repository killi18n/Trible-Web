import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LandingPage, PrivacyPolicyPage } from '../pages'

const App = () => {
    return (
        <Switch>
            {/* <Route exact={true} path="/" component={LandingPage} /> */}
            <Route exact={true} path="/" component={LandingPage} />
            <Route path="/policies/privacy" component={PrivacyPolicyPage} />
        </Switch>
    )
}

export default App
