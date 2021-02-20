import React from 'react'
import PropTypes from 'prop-types';


export const Email = (props) => {
    let {handleChange, label, value, handleBlur, noFormItem, placeholder, name, className} = props;

    if (noFormItem) {
      return <input 
            type="email"
            id="email"
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
                type="email"
                id="email"
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


Email.propTypes = {
    noFormItem: PropTypes.bool,
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