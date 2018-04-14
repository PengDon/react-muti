import React from 'react';
import classNames from '../../utils/classnames';

/**
 * mgjc Grid Icon Wrapper
 *
 */
export default class GridIcon extends React.Component {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'mgjc-grid__icon': true
        }, className);

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};