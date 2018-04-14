import React from 'react';
import classNames from '../../utils/classnames';

/**
 * Agreement style checkbox
 *
 */
const Agreement = (props) => {
    const { className, children, id, ...others } = props;
    const cls = classNames({
        'mgjc-agree': true,
        [className]: className
    });

    return (
        <label className={cls} htmlFor={id}>
            <input id={id} type="checkbox" className="mgjc-agree__checkbox" {...others}/>
            <span className="mgjc-agree__text">
                {children}
            </span>
        </label>
    );
};

export default Agreement;