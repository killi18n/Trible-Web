import React from 'react'
import { Helmet } from 'react-helmet'
import LandingContainer from 'containers/LandingContainer'

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Trible - Home</title>
            </Helmet>
            <LandingContainer />
        </>
    )
}

export default LandingPage
