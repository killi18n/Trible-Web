import React from 'react'
import { Helmet } from 'react-helmet'
import LandingContainer from 'containers/LandingContainer'

const LandingPage = ({ location }) => {
    return (
        <>
            <Helmet>
                <title>Trible - Home</title>
            </Helmet>
            <LandingContainer pathname={location.pathname} />
        </>
    )
}

export default LandingPage
