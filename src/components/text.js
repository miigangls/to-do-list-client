import React from 'react';
import PropTypes from 'prop-types';

export const Text = (props) => {
    let {handleChange, label, value, handleBlur, noFormItem, placeholder, name, className} = props;

    if (noFormItem) {
      return <input 
            type="text"
            id="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={className}
        />
    }

    return (
        <div className="from-label">
            <label>{label}</label>
            <input 
                type="text"
                id="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={className}
            />
        </div>
    );
};

Text.propTypes = {
    noFormItem: PropTypes.bool,
    name: PropTypes.string, 
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string, 
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    handleChange: PropTypes.func,
    onBlur: PropTypes.func,
};