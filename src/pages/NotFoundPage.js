import React from 'react'
import { Helmet } from 'react-helmet'
import Base from 'components/common/Base'
import NotFoundContainer from 'containers/NotFoundContainer'

const NotFoundPage = ({ staticContext, location }) => {
    if (staticContext) {
        staticContext.isNotFound = true
    }
    return (
        <>
            <Helmet>
                <title>Trible - NotFound(404)</title>
            </Helmet>
            <Base pathname={location.pathname}>
                <NotFoundContainer />
            </Base>
        </>
    )
}

export default NotFoundPage
