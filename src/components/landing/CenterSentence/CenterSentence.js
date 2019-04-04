import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { useTrail, animated } from 'react-spring'
import styles from './CenterSentence.scss'

const cx = classnames.bind(styles)

const CenterSentence = ({ sentence, deviceWidth }) => {
    const items = sentence.split('\n')
    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle] = useState(true)

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 40,
        height: toggle
            ? deviceWidth < 322
                ? 160
                : deviceWidth < 494
                ? 190
                : deviceWidth < 570
                ? 145
                : deviceWidth < 873
                ? 140
                : 80
            : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div className={cx('CenterSentence')}>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]}
                    className="trails-text"
                    style={{
                        ...rest,
                        transform: x.interpolate(
                            x => `translate3d(0,${x}px,0)`
                        ),
                    }}
                >
                    <animated.div style={{ height }}>
                        {items[index]}
                    </animated.div>
                </animated.div>
            ))}
        </div>
    )
}

export default CenterSentence
