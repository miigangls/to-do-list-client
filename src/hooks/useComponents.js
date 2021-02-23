import React, { useState, useEffect } from 'react';

const useComponents = (stateInicial,  fn) => {

    const [ useValues, setSaveValues ] = useState(stateInicial);
    const [ useSubmit, setSaveSubmit ] = useState(false);

    useEffect(() => {
        if(useSubmit) {
            setSaveSubmit(false);
        }
    }, []);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        setSaveValues({
            ...useValues,
            [e.target.name] : e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        setSaveSubmit(true);
    }

    const handleClear = (value) => {
        setSaveValues({
            ...useValues,
            [value] : ""
        })
        console.log(value);
    }

    return {
        useValues, 
        handleSubmit,
        handleChange, 
        handleClear
    }
}
 
export default useComponents;