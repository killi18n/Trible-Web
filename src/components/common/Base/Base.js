import React from 'react'
import classnames from 'classnames'
import { useTransition, animated, config } from 'react-spring'
import styles from './Base.scss'
import HeaderContainer from 'containers/HeaderContainer'
import routes from 'routes'

const cx = classnames.bind(styles)

const Base = ({ children, pathname }) => {
    let isNotFound = true
    routes.forEach(route => {
        if (route.pathname === pathname) {
            isNotFound = false
        }
    })
    if (!pathname) {
        isNotFound = false
    }
    const slides = [
        {
            id: 0,
            url:
                pathname === '/policies/privacy'
                    ? 'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/background/clarisse-meyer-304307-unsplash.jpg'
                    : isNotFound
                    ? 'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/background/background-2.6169896b.jpg'
                    : 'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/background/andrew-neel-296630-unsplash.jpg',
        },
    ]
    // const [index, set] = useState(0)
    const transitions = useTransition(slides[0], item => item.id, {
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
