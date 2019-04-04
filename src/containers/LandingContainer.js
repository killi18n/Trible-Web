import React, { Component } from 'react'
import Base from 'components/common/Base'
import Links from 'components/landing/Links'
import CenterSentence from 'components/landing/CenterSentence'

class LandingContainer extends Component {
    state = {
        sentence: `Don't try to remember everything.\n Just use Trible.`,
        deviceWidth: 0,
    }

    componentDidMount() {
        this.setDeviceWidthState()
        this.addListener()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.deviceWidth - this.state.deviceWidth
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('resize', this.handleChangeDeviceWidth)
        }
        if (document.documentElement) {
            document.body.removeEventListener(
                'resize',
                this.handleChangeDeviceWidth
            )
        }
    }

    addListener = () => {
        if (window) {
            window.addEventListener('resize', this.handleChangeDeviceWidth)
        }

        if (document.documentElement) {
            document.body.addEventListener(
                'resize',
                this.handleChangeDeviceWidth
            )
        }
    }

    handleChangeDeviceWidth = () => {
        this.setDeviceWidthState()
    }

    setDeviceWidthState = () => {
        if (window) {
            this.setState({
                ...this.state,
                deviceWidth: window.innerWidth,
            })
        }

        if (document && document.documentElement) {
            this.setState({
                ...this.state,
                deviceWidth: document.body.clientWidth,
            })
        }
    }

    render() {
        const { sentence, deviceWidth } = this.state
        return (
            <Base>
                <Links />
                <CenterSentence sentence={sentence} deviceWidth={deviceWidth} />
            </Base>
        )
    }
}

export default LandingContainer
