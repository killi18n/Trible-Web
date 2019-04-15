import React from 'react'
import classnames from 'classnames'
import { MdMenu } from 'react-icons/md'
import MenuSelector from 'components/common/MenuSelector'
import styles from './Menu.scss'

const cx = classnames.bind(styles)

const Menu = ({ onMenuToggle, menuToggle }) => {
    return (
        <div>
            <div className={cx('Menu')} onClick={onMenuToggle}>
                <MdMenu />
            </div>
            <MenuSelector visible={menuToggle} />
        </div>
    )
}

export default Menu
