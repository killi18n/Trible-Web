import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import styles from './Header.scss'
import Menu from 'components/common/Menu'
import MenuSelector from '../MenuSelector'

const cx = classnames.bind(styles)

const Header = ({ menuToggle, onMenuToggle }) => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })

    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1,
    ]
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }))
    return (
        <div className={cx('Header')}>
            <div className={cx('Center')}>
                <Link to="/" onClick={() => toggle(!state)}>
                    <animated.div
                        className={cx('Title')}
                        style={{
                            // opacity: x.interpolate({ output: [0.3, 1] }),
                            // color: 'rgba(181, 199, 210, 100)',
                            transform: x
                                .interpolate({
                                    range: [
                                        0,
                                        0.25,
                                        0.35,
                                        0.45,
                                        0.55,
                                        0.65,
                                        0.75,
                                        1,
                                    ],
                                    output: [
                                        1,
                                        0.97,
                                        0.9,
                                        1.1,
                                        0.9,
                                        1.1,
                                        1.03,
                                        1,
                                    ],
                                })
                                .interpolate(x => `scale(${x})`),
                            // fontFamily: 'Nanum Pen Script',
                            // fontSize: '80px',
                            // color: 'rgba(45, 130, 178, 1)',
                            // userSelect: 'none',
                        }}
                    >
                        Trible
                    </animated.div>
                </Link>
                <Link to="/">
                    <animated.div
                        className="HeaderIcon"
                        onMouseMove={({ clientX: x, clientY: y }) =>
                            set({ xys: calc(x, y) })
                        }
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    />
                </Link>
            </div>
            <div className={cx('Right')}>
                {/* <MdMenu className={cx('Menu')} /> */}
                <Menu onMenuToggle={onMenuToggle} />
                <MenuSelector visible={menuToggle} />
            </div>
        </div>
    )
}

export default Header
