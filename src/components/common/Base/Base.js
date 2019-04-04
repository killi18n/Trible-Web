import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { useTransition, animated, config } from 'react-spring'
import styles from './Base.scss'
import Background1 from 'images/background-1.jpg'
import Background2 from 'images/background-2.jpg'
import Background3 from 'images/background-3.jpg'
import HeaderContainer from 'containers/HeaderContainer'

const cx = classnames.bind(styles)

const Base = ({ children }) => {
    const slides = [
        { id: 0, url: Background2 },
        { id: 1, url: Background1 },
        { id: 2, url: Background3 },
    ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    // useEffect(
    //     () => void setInterval(() => set(state => (state + 1) % 3), 3000),
    //     []
    // )
    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className={cx('Base')}
            style={{ ...props, backgroundImage: `url(${item.url})` }}
        >
            <HeaderContainer />
            <main>{children}</main>
        </animated.div>
    ))
    // return (
    //     <div className={cx('Base')}>
    //         <div className={cx('OpacityLayer')}>
    //             <Header />
    //             <main>{children}</main>
    //         </div>
    //     </div>
    // )
}

export default Base
