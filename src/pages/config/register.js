import React,{ useState }  from 'react';
import { Email, Password, Text } from '../../components'
import { register } from '../../firebase/fetch'
import { validateEmail } from '../../utils'
import useComponents from '../../hooks/useComponents'
import State  from '../states'


const Register = (props) => {

  const [ Message, setMessage] = useState('');
  const { useValues, handleChange } = useComponents(State.register);

  const { nombre, email, password } = useValues

  async function onClick (e) {
    e.preventDefault();
    try {
        let {error, message} = validateEmail(email)
        if(error) return setMessage(message)
        await register( nombre, email, password);
        props.onClickRegister()
      } catch (e) {
        console.log('Hubo un error al autenticar el usuario ', e);
        return setMessage('Error al autenticar el usuario o contraseña')
      } 
    }
    
    return (
        <div className="container">
            <form   className='form-content'>
                <h5>Crear nuevo usuario</h5>

                <Text label="nombre" placeholder="Nombre"  
                handleChange= {handleChange} 
                name="nombre" className="from-input"  noFormItem />

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
                {Message && <div className="message message-error">{Message} </div>}

                <a className="from-a" onClick={props.onClickRegister}>  Ingreso </a>
                <button onClick={onClick} className="btn-login" htmlType="submit">
                    Aceptar
                </button>
            </form>
        </div>
    );
};

export default Register;