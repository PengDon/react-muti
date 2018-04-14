import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * mgjc Input wrapper for `input`
 *
 */
const Input = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'mgjc-input': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} {...others}/>
            <span className="mgjc-icon-checked"></span>
        </div>
    );
};

Input.propTypes = {
    defaultValue: PropTypes.string
};

Input.defaultProps = {
    defaultValue: undefined
};

export default Input;
