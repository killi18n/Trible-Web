import React, { useState } from 'react'
import classnames from 'classnames'
import { useTransition, animated, config } from 'react-spring'
import styles from './Base.scss'
import HeaderContainer from 'containers/HeaderContainer'

const cx = classnames.bind(styles)

const Base = ({ children }) => {
    const slides = [
        {
            id: 0,
            url:
                'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/background-2.6169896b.jpg',
        },
    ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
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
}

export default Base
