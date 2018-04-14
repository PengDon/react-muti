import React from 'react';
import classNames from '../../utils/classnames';

/**
 * mgjc Label Wrapper
 *
 */
const Label = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'mgjc-label': true,
        [className]: className
    });

    return (
        <div>
            <label className={cls} {...others}/>
        </div>
    );
};

export default Label;