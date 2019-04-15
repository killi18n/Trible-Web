import React from 'react'
import classnames from 'classnames'
import marked from 'marked'
import data from '../data'
import styles from './PrivacyPolicyPaper.scss'

const cx = classnames.bind(styles)

class PrivacyPolicyPaper extends React.Component {
    componentDidMount() {
        marked.setOptions({
            breaks: true,
            sanitize: true,
        })
    }
    render() {
        return (
            <div className={cx('PrivacyPolicyPaper')}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: marked(data.privacy),
                    }}
                />
            </div>
        )
    }
}

export default PrivacyPolicyPaper
