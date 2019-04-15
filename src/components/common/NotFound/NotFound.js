import React from 'react'
import classnames from 'classnames'
import styles from './NotFound.scss'

const cx = classnames.bind(styles)

const NotFound = ({ handleGoBack }) => {
    return (
        <div className={cx('NotFound')}>
            <div className={cx('NotFoundText')}>404 - NotFound</div>
            <div className={cx('NotFoundBack')} onClick={handleGoBack}>
                Go Back
            </div>
        </div>
    )
}

export default NotFound
