import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NotFound from 'components/common/NotFound'

class NotFoundContainer extends Component {
    handleGoBack = () => {
        const { history } = this.props
        history.goBack()
    }
    render() {
        const { handleGoBack } = this
        return <NotFound handleGoBack={handleGoBack} />
    }
}

export default withRouter(NotFoundContainer)
