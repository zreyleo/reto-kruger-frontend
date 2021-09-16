import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import { ADMIN_ROLE, CANNOT_ADD_THAT_EMPLOYEE } from "../CONSTANTS";

import { Context } from "../GlobalState";

import Empleado from "../models/Empleado";

import FormField from "./FormField";
import InputSubmit from "./InputSubmit";

const RegisterEmployeeForm = () => {
    const { empleados, addEmployee, sessionRole } = useContext(Context)

    const history = useHistory();

    const [cedula, setCedula] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');

    // manejo de errores
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const validateCedulaRegex = /^\d{10}$/;
    const validateNombresApellidosRegex = /^[a-z][a-z\s]*$/i;
    const validateCorreoRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const handleChangeCedula = (value) => {
        if (/^\d*$/.test(value)) {
            setCedula(value);
        } else {
            return;
        }
    }

    const handleChangeNombres = (value) => {
        if (/^[a-z][a-z\s]*$/i.test(value)) {
            setNombres(value.toUpperCase());
        } else {
            return
        }

    }

    const handleChangeApellidos = (value) => {
        if (/^[a-z][a-z\s]*$/i.test(value)) {
            setApellidos(value.toUpperCase());
        } else {
            return
        }
    }

    const handleChangeCorreo = (value) => {
        setCorreo(value.toLowerCase());
    }

    useEffect(() => {
        if (sessionRole != ADMIN_ROLE) {
            history.push('/login/administrador')
        }
    }, []);

    useEffect(() => {
        if (!validateCedulaRegex.test(cedula)) { // error en la cedula
            console.log('hay error en la cedula');
        }

        if (!validateNombresApellidosRegex.test(nombres)) { // error en los nombres
            console.log('hay error en los nombres');
        }

        if (!validateNombresApellidosRegex.test(apellidos)) { // error en los apellidos
            console.log('hay error en los apellidos');
        }

        if (!validateCorreoRegex.test(correo)) { // error en el correo
            console.log('hay error en el correo');
        }

        setTimeout(() => {
            setError(false);
        }, 750);

        // eslint-disable-next-line
    }, [error]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            !validateCedulaRegex.test(cedula) ||
            !validateNombresApellidosRegex.test(nombres) ||
            !validateNombresApellidosRegex.test(apellidos) ||
            !validateCorreoRegex.test(correo)
        ) {
            console.log('hay error');
            setError(true)
        } else {
            console.log('no hay error');
            const empleado = new Empleado(
                cedula,
                nombres,
                apellidos,
                correo
            );

            console.log(empleado)

            if (empleados.some(emp => {
                return emp.cedula === empleado.cedula
            })) {
                setError(true);

                
                setErrorMessages([CANNOT_ADD_THAT_EMPLOYEE])
                
                return;
            } else {
                addEmployee(empleado)

                fetch('http://localhost:4000/empleados', {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(empleado) // body data type must match "Content-Type" header
                }).then(response => console.log(response));
            }

        }
    }

    return (
        <div className="row">
            <h2 className="my-5 text-center">Formulario para registrar empleados</h2>

            <form
                onSubmit={handleSubmit}
                className="col-md-8 mx-auto"
            >
                <FormField
                    label="cedula"
                    type="text"
                    name="cedula"
                    value={cedula}
                    handleChange={handleChangeCedula}
                />
                <FormField
                    label="nombres"
                    type="text"
                    name="nombres"
                    value={nombres}
                    handleChange={handleChangeNombres}
                />
                <FormField
                    label="apellidos"
                    type="text"
                    name="apellidos"
                    value={apellidos}
                    handleChange={handleChangeApellidos}
                />
                <FormField
                    label="correo"
                    type="text"
                    name="correo"
                    value={correo}
                    handleChange={handleChangeCorreo}
                />

                <InputSubmit value="Guardar Empleado" />
            </form>
        </div>
    );
}

export default RegisterEmployeeForm;