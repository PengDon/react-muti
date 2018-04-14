import React from 'react';
import classNames from '../../utils/classnames';

/**
 * Use to format mgjc style contents
 *
 */
export default class Article extends React.Component {
    static propTypes = {
    };

    static defaultProps = {
    };
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            'mgjc-article': true,
            [className]: className
        });
        return (
            <article className={cls} {...others}>
                {children}
            </article>
        );
    }
};