import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './touch_fix.less';

/**
 * form wrapper for `Cell`
 *
 */
export default class FormCell extends Component {
    static propTypes = {
        /**
         * if cell use for vcode
         *
         */
        vcode: PropTypes.bool,
        /**
         * display warn style of cell
         *
         */
        warn: PropTypes.bool,
        /**
         * if cell use for radio
         *
         */
        radio: PropTypes.bool,
        /**
         * if cell use for checkbox
         *
         */
        checkbox: PropTypes.bool,
        /**
         * if cell use for switch checkbox
         *
         */
        'switch': PropTypes.bool,
        /**
         * if cell use for select
         *
         */
        select: PropTypes.bool,
        /**
         * select position, options: before, after
         *
         */
        selectPos: PropTypes.string,
    };

    static defaultProps = {
        vcode: false,
        warn: false,
        radio: false,
        checkbox: false,
        select: false,
        'switch': false,
        selectPos: undefined
    };

    render() {
        const {
          className, children,
          radio, checkbox, vcode, warn,
          select, selectPos,
          ...others,
        } = this.props;
        const cellDomProps = Object.assign({}, others);
        delete cellDomProps.switch;
        const cls = classNames({
            'mgjc-cell': true,
            'mgjc-cell_vcode': vcode,
            'mgjc-cell_warn': warn,
            'mgjc-cell_switch': this.props.switch,
            'mgjc-cell_select': select,
            'mgjc-cell_select-before': selectPos === 'before',
            'mgjc-cell_select-after': selectPos === 'after',
            'mgjc-check__label': radio || checkbox,
            [className]: className
        });

        if (radio || checkbox) {
            return (
                <label className={cls} {...cellDomProps}>{children}</label>
            );
        } else {
            return (
                <div className={cls} {...cellDomProps}>{children}</div>
            );
        }
    }
};
