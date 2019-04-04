import React, { Component } from 'react'
import Header from 'components/common/Header'

class HeaderContainer extends Component {
    state = {
        menuToggle: false,
    }

    handleMenuToggle = () => {
        this.setState({
            ...this.state,
            menuToggle: !this.state.menuToggle,
        })
    }
    render() {
        const { menuToggle } = this.state
        const { handleMenuToggle } = this
        return (
            <>
                <Header
                    menuToggle={menuToggle}
                    onMenuToggle={handleMenuToggle}
                />
            </>
        )
    }
}

export default HeaderContainer
