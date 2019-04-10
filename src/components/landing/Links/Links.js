import React from 'react'
import classnames from 'classnames'
import styles from './Links.scss'
import Link from 'components/landing/Link'

const cx = classnames.bind(styles)

const Links = () => {
    return (
        <div className={cx('Links')}>
            <Link
                text="Link To AppStore"
                url="https://itunes.apple.com/us/app/%ED%8A%B8%EB%A6%AC%EB%B8%94/id1457644130?l=ko#?platform=iphone"
            />
            <Link text="Link To PlayStore" />
        </div>
    )
}

export default Links
