import React,{ useState }  from 'react';
import { Email, Password } from '../components'
import { login } from '../firebase/fetch'
import { getValidEmail } from '../utils'
import useComponents from '../hooks/useComponents'

const STATE_INICIAL = {
    email: '',
    password: ''
}

const Login = () => {

  const [ useMessage, setMessage] = useState('');
  const { values, handleChange } = useComponents(STATE_INICIAL);

  const { email, password } = values;

  async function onClick (e) {
    e.preventDefault();
    try {
        let {error, message} = getValidEmail(email)
        if(error) return setMessage(message)
        await login(email, password);
        //useRedirect()
      } catch (e) {
        console.log('Hubo un error al autenticar el usuario ', e);
        return setMessage('Error al autenticar el usuario o contraseña')
      } 
    }
    
    return (
        <div className="container">
            <form   className='form-content'>
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
                {useMessage && <div className="message message-error">{useMessage} </div>}
                <button onClick={onClick} className="btn-login" htmlType="submit">
                    Aceptar
                </button>
            </form>
        </div>
    );
};

export default Login;