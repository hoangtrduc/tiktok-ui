import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss'
import GlobalStyles from '../GlobalStyles';



const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
    const [_fallBack, setFallback] = useState('')

    const handleError = () => {
        setFallback(images.noImage);
    };

    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={_fallBack || src}
        alt={alt} {...props}
        onError={handleError}
    />
})

GlobalStyles.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    className: PropTypes.string,
}

export default Image;