import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import Menu from 'components/common/Menu'
// import MenuSelector from 'components/common/MenuSelector'

class MenuContainer extends Component {
    state = {
        menuToggle: false,
    }

    handleClickOutside = e => {
        this.setState({
            ...this.state,
            menuToggle: false,
        })
    }

    handleMenuToggle = e => {
        this.setState({
            ...this.state,
            menuToggle: true,
        })
    }

    render() {
        const { menuToggle } = this.state
        const { handleMenuToggle } = this
        return <Menu onMenuToggle={handleMenuToggle} menuToggle={menuToggle} />
    }
}

export default onClickOutside(MenuContainer)
