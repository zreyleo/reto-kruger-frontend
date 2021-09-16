import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { EMPLOYEE_ROLE } from '../CONSTANTS';

import { Context } from '../GlobalState';

import FormField from './FormField'
import InputSubmit from './InputSubmit';

const LoginEmployeeForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

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
            const empleado = empleados.filter(empl => empl.username === username && empl.password === password)[0]
            setSessionRole(EMPLOYEE_ROLE)
            
            setEmployeeSession(empleado);

            history.push("/empleados")
        } else {
            return;
        }
    }

    return (
        <div className="row">
            <h2 className="text-center my-5">Inicio Sesi&oacute;n Empleado</h2>

            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
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