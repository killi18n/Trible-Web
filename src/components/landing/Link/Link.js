import React from 'react'
import classnames from 'classnames'
// import { Link as Linker } from 'react-router-dom'
import styles from './Link.scss'

const cx = classnames.bind(styles)

const Link = ({ text, url }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={url ? url : ''}
            className={cx('Link')}
        >
            {text}
        </a>
    )
}

export default Link
