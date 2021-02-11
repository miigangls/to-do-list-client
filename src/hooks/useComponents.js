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
        //const errorValidacion = validar(values);
        //saveErrors(errorValidacion);
        saveSubmitForm(true);
    }


    // cuando se realiza el evento de blur
    const handleBlur = () => {
        //const errorValidacion = validar(values);
        //saveErrors(errorValidacion);
    }

    return {
        values, 
        errors, 
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useComponents;