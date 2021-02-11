import React from 'react'

export const Password = (props) => {
    let {name,label, placeholder, handleChange, value, handleBlur, noFormItem, maxlength, minlength, className} = props;

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
