import { useContext, useState } from 'react';

import { EMPLOYEE_ROLE } from '../CONSTANTS';

import { Context } from '../GlobalState';

import FormField from './FormField'
import InputSubmit from './InputSubmit';

const LoginEmployeeForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { empleados, setEmployeeSession, setSessionRole } = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (empleados.some(empleado => {
            if (empleado.username === username && empleado.password === password) {
                return true
            } else {
                return false;
            }
        })) {
            const empleado = empleados.filter(empl => empl.username === username && empl.password === password)
            setSessionRole(EMPLOYEE_ROLE)
            setEmployeeSession(empleado);
        } else {
            return;
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
 
export default LoginEmployeeForm;