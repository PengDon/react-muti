import React from 'react';
import classNames from '../../utils/classnames';

/**
 * mgjc wrapper for radio
 *
 */
const Radio = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'mgjc-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="radio" {...others}/>
            <span className="mgjc-icon-checked"></span>
        </div>
    );
};

export default Radio;