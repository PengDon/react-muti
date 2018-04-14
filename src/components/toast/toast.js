import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';

/**
 *  pop out indicator to inform users
 *
 */
class Toast extends Component {
    static propTypes = {
        /**
         * Icon Value
         *
         */
        icon: PropTypes.string,
        /**
         * Icon Size
         *
         */
        iconSize: PropTypes.string,
        /**
         * display toast
         *
         */
        show: PropTypes.bool
    };

    static defaultProps = {
        icon: 'toast',
        show: false,
    };

    render() {
        const {className, icon, show, children, iconSize, ...others} = this.props;
        const cls = classNames('mgjc-toast', {
            [className]: className
        });
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className={cls} {...others}>
                    <Icon value={icon} size={iconSize} className="mgjc-icon_toast"/>
                    <p className="mgjc-toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

export default Toast;
