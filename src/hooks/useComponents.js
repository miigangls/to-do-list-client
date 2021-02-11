import React, { useState, useEffect } from 'react';

const useComponents = (stateInicial,  fn) => {

    const [values, saveValues ] = useState(stateInicial);
    const [errors, saveErrors ] = useState({});
    const [ submitForm, saveSubmitForm ] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errors).length === 0;
            if(noErrores) {
                fn(); // Fn = Función que se ejecuta en el componente
            }
            saveSubmitForm(false);
        }
    }, [errors]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        saveValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        saveSubmitForm(true);
    }



    return {
        values, 
        errors, 
        handleSubmit,
        handleChange
    }
}
 
export default useComponents;