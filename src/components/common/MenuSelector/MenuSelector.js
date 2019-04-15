import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './MenuSelector.scss'

const cx = classnames.bind(styles)

const MenuSelector = ({ visible }) => {
    return (
        <div className={cx('MenuSelector', !visible && 'invisible')}>
            <Link to="/policies/privacy" className={cx('Selector')}>
                개인정보 처리 방침
            </Link>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/killi8n"
                className={cx('Selector')}
            >
                개발자 github
            </a>
        </div>
    )
}

export default MenuSelector
