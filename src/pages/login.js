import React from 'react';
import {Email, Password} from '../components'
import useComponents from '../hooks/useComponents'

const STATE_INICIAL = {
    email: '',
    password: ''
}

const Login = () => {

  const { values, handleSubmit, handleChange } = useComponents(STATE_INICIAL, onClick);

  const { email, password } = values;

    async function onClick() {
        try {
            console.log( email, password);
          //await firebase.login(email, password);
        } catch (error) {
          //console.error('Hubo un error al autenticar el usuario ', error.message);
         // guardarError(error.message);
        }
      }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}  className='form-content'>
                <h5>Ingresar</h5>
                <Email label="email" 
                    name="email" 
                    placeholder="Email"
                    value={email} 
                    handleChange= {handleChange}
                    noFormItem={true}
                    className="from-input"
                />
                <Password 
                    label="contraseña"
                    name="password"
                    placeholder="contraseña"
                    value={password} 
                    handleChange= {handleChange}
                    noFormItem={true}
                    className="from-input"
                />
                <button onClick={handleSubmit} className="btn-login" htmlType="submit">
                    Aceptar
                </button>
            </form>
        </div>
    );
};

export default Login;