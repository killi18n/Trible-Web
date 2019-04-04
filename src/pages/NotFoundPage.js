import React from 'react'
import { Helmet } from 'react-helmet'
import Base from 'components/common/Base'

const NotFoundPage = ({ staticContext }) => {
    if (staticContext) {
        staticContext.isNotFound = true
    }
    return (
        <>
            <Helmet>
                <title>Trible - NotFound(404)</title>
            </Helmet>
            <Base>NotFoundPage</Base>
        </>
    )
}

export default NotFoundPage
