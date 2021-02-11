import React from 'react'

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
