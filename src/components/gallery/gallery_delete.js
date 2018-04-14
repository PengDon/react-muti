import React from 'react';
import classNames from '../../utils/classnames';
import Icon from '../icon';

/**
 * Wrapper for Gallery Delete Button
 *
 */
const GalleryDelete = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'mgjc-gallery__del': true,
        [className]: className
    });

    return (
        <a className={cls} {...others}>
            <Icon value="delete" className="mgjc-icon_gallery-delete" />
        </a>
    );
};

export default GalleryDelete;

