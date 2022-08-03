import styles from './Acount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59.jpeg?x-expires=1658383200&x-signature=Tg1VccW55JejhogT4PuQYC0i81w%3D"
                alt="hoa"
                className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        nguyen van A
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen van B</span>
            </div>
        </div>
    );
}

export default AccountItem;