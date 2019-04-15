import React from 'react'
import { Helmet } from 'react-helmet'
import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer'

const PrivacyPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Trible - 개인정보 처리방침</title>
            </Helmet>
            <PrivacyPolicyContainer />
        </>
    )
}

export default PrivacyPolicyPage
