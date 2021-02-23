import React from 'react'
import PropTypes from 'prop-types'


export const Content = ({children}) => {
    return (
        <div className="content">
            {children}
        </div>
    );
};


Content.propTypes = {
    children: PropTypes.object,
};