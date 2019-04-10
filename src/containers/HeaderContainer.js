import React, { Component } from 'react'
import Header from 'components/common/Header'

class HeaderContainer extends Component {
    state = {
        menuToggle: false,
    }

    componentDidMount() {
        this.addListeners()
    }

    componentWillUnmount() {
        this.removeListeners()
    }

    addListeners = () => {
        if (window) {
            window.addEventListener('mousedown', this.handleCloseMenu)
        }

        if (document && document.documentElement) {
            document.body.addEventListener('mousedown', this.handleCloseMenu)
        }
    }

    removeListeners = () => {
        if (window) {
            window.removeEventListener('mousedown', this.handleCloseMenu)
        }

        if (document && document.documentElement) {
            document.body.removeEventListener('mousedown', this.handleCloseMenu)
        }
    }

    handleCloseMenu = e => {
        e.stopPropagation()
        if (this.state.menuToggle) {
            this.setState({
                ...this.state,
                menuToggle: false,
            })
        }
    }

    handleMenuToggle = e => {
        e.stopPropagation()
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
