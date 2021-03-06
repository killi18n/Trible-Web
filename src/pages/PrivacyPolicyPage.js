import React from 'react'
import { Helmet } from 'react-helmet'
import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer'

const PrivacyPolicyPage = ({ location }) => {
    return (
        <>
            <Helmet>
                <title>Trible - 개인정보 처리방침</title>
            </Helmet>
            <PrivacyPolicyContainer pathname={location.pathname} />
        </>
    )
}

export default PrivacyPolicyPage
