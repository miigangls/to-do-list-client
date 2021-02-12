import React from 'react'

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