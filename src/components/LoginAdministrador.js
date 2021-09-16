import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { ADMIN_ROLE } from '../CONSTANTS';

import { Context } from '../GlobalState';

import FormField from './FormField'
import InputSubmit from './InputSubmit';

const LoginAdministrador = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const { setSessionRole } = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'admin') {
            setSessionRole(ADMIN_ROLE)
            history.push('/administrador/dashboard')
        } else {
            
        }
    }

    return (
        <div>
            <h2>Inicio Sesi&oacute;n Empleado</h2>

            <form onSubmit={handleSubmit}>
                <FormField 
                    label="Usuario" 
                    type="text" 
                    name="username" 
                    value={username}
                    handleChange={setUsername}
                />

                <FormField label="Password" type="password" name="password" 
                    value={password}
                    handleChange={setPassword}
                />

                <InputSubmit />
            </form>
        </div>
    );
}
 
export default LoginAdministrador;