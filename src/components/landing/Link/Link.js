import React from 'react'
import classnames from 'classnames'
import styles from './Link.scss'

const cx = classnames.bind(styles)

const Link = ({ text }) => {
    return <div className={cx('Link')}>{text}</div>
}

export default Link
