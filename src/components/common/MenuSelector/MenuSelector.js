import React from 'react'
import classnames from 'classnames'
import styles from './MenuSelector.scss'

const cx = classnames.bind(styles)

const MenuSelector = ({ visible }) => {
    return (
        <div className={cx('MenuSelector', !visible && 'invisible')}>
            <a href="https://99ex.jp/trible-rules/" className={cx('Selector')}>
                개인정보 처리 방침
            </a>
            <a href="https://github.com/slave4dead" className={cx('Selector')}>
                개발자 github
            </a>
        </div>
    )
}

export default MenuSelector
