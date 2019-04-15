import React, { Component } from 'react'
import Base from 'components/common/Base'
import PrivacyPolicyPaper from 'components/privacy/PrivacyPolicyPaper'

class PrivacyPolicyContainer extends Component {
    render() {
        const { pathname } = this.props
        return (
            <Base pathname={pathname}>
                <PrivacyPolicyPaper />
            </Base>
        )
    }
}

export default PrivacyPolicyContainer
