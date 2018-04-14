//1.0.0 components

import React from 'react';

/**
 * FlexItem Container
 *
 */
const Flex = (props) => (
    <div className="mgjc-flex" {...props}>
        { props.children }
    </div>
);

export default Flex;