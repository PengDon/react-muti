import React from 'react';
import classNames from '../../utils/classnames';

/**
 * mgjc Grid Label Wrapper
 *
 */
export default class GridLabel extends React.Component {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'mgjc-grid__label': true
        }, className);

        return (
            <p className={cls} {...others}>{children}</p>
        );
    }
};