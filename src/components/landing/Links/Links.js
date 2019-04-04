import React from 'react'
import classnames from 'classnames'
import styles from './Links.scss'
import Link from 'components/landing/Link'

const cx = classnames.bind(styles)

const Links = () => {
    return (
        <div className={cx('Links')}>
            <Link text="Link To AppStore" />
            <Link text="Link To PlayStore" />
        </div>
    )
}

export default Links
