import React from 'react'
import classnames from 'classnames'
import { MdMenu } from 'react-icons/md'
import styles from './Menu.scss'

const cx = classnames.bind(styles)

const Menu = ({ onMenuToggle }) => {
    return (
        <div className={cx('Menu')} onClick={onMenuToggle}>
            <MdMenu />
        </div>
    )
}

export default Menu
