import React from 'react';
import classNames from '../../utils/classnames';

/**
 * mgjc switch style for checkbox
 *
 */
const Switch = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'mgjc-switch': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="mgjc-icon-checked"></span>
        </div>
    );
};

export default Switch;