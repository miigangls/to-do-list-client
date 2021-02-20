import React from 'react'
import PropTypes from 'prop-types';


export const Password = (props) => {
    let { name, label, placeholder,  value,  noFormItem, maxlength, minlength, className } = props;
    let { handleChange, handleBlur } = props

    if (noFormItem) {
      return <input 
            type="password"
            id="password"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={maxlength}
            minLength={minlength}
            className={className}
        />
    }

    return (
        <div className="from-label">
            <label>{label}</label>
            <input 
                type="password"
                id="password"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={maxlength}
                minLength={minlength}
                className={className}
            />
        </div>
    );
};


Password.propTypes = {
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
    maxlength: PropTypes.number,  
    minlength: PropTypes.number
};
