import { useContext, useState } from "react";
import moment from 'moment';

import { Context } from '../GlobalState';

import FormField from "./FormField";
import InputSubmit from "./InputSubmit"

const UpdateInformationForm = () => {
    const { sessionEmpleado, updateEmployeeInformation } = useContext(Context)
    
    const [nacimiento, setNacimiento] = useState(sessionEmpleado.fechaNacimiento || '')
    const [direccion, setDireccion] = useState(sessionEmpleado.direccion || '')
    const [telefono, setTelefono] = useState(sessionEmpleado.telefono || '')
    const [vacunado, setVacunado] = useState(sessionEmpleado.vacunado || false)
    const [vacuna, setVacuna] = useState(sessionEmpleado.vacuna|| '')
    const [vacunacion, setVacunacion] = useState(sessionEmpleado.fechaVacunacion || '')
    const [dosis, setDosis] = useState(sessionEmpleado.dosis || '')

    const minNacimiento = moment().subtract(80, "years").format("YYYY-MM-DD");
    const maxNacimiento = moment().subtract(15, "years").format("YYYY-MM-DD");

    const minVacunacion = moment("2020-12-31").format("YYYY-MM-DD");
    const maxVacunacion = moment().subtract(15, "days").format("YYYY-MM-DD");

    const handleClickVacunado = () => {
        setVacuna('')
        setVacunacion('')
        vacunado ? setDosis('') : setDosis('1')
        setVacunado(!vacunado);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!nacimiento || !direccion || !telefono) {
            if (vacunado) {
                if (!vacuna || !vacunacion || dosis) {
                    return;
                }
            }

            return;
        }

        const data = {
            fechaNacimiento: nacimiento,
            direccion,
            telefono,
            vacunado,
            vacuna,
            fechaVacunacion: vacunacion,
            dosis
        }

        const updatedEmployeeData = {
            ...sessionEmpleado,
            ...data
        };

        updateEmployeeInformation(updatedEmployeeData)

        fetch(`http://localhost:4000/empleados/${sessionEmpleado.id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(updatedEmployeeData) // body data type must match "Content-Type" header
        }).then(response => console.log(response));
    }

    return (
        <div className="row">
            <h2 className="text-center my-5">Actualizar Informaci&oacute;n</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" name="nacimiento" min={minNacimiento} max={maxNacimiento}
                        value={nacimiento}
                        onChange={e => setNacimiento(e.target.value)}
                        className="form-control"
                    />
                </div>

                <FormField label="Dirección de domicilio" type="text" name="direccion"
                    value={direccion}
                    handleChange={setDireccion}
                />

                <FormField label="Teléfono móvil" type="text" name="telefono"
                    value={telefono}
                    handleChange={setTelefono}
                />

                <div className="form-group my-3">
                    <label>&#191;Est&aacute; vacunado?</label>
                    <input type="checkbox" name="vacunado"
                        checked={vacunado}
                        onClick={handleClickVacunado}
                    />
                </div>
                {
                    vacunado && (
                        <fieldset>
                            <div className="form-group">
                                <legend>Llenar la siguiente informaci&oacute;n</legend>
                                <label>Vacuna</label>
                                <select
                                    value={vacuna}
                                    onChange={e => setVacuna(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="" disabled>-- seleccione --</option>
                                    <option value="Sputnik">Sputnik</option>
                                    <option value="AstraZeneca">AstraZeneca</option>
                                    <option value="Pfizer">Pfizer</option>
                                    <option value="JhonsonAndJhonson">Jhonson&#38;Jhonson</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>&Uacute;ltima Fecha de Vacunaci&oacute;n</label>
                                <input type="date" name="vacunacion" min={minVacunacion} max={maxVacunacion}
                                    value={vacunacion}
                                    onChange={e => setVacunacion(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Dosis</label>
                                <input type="number" name="dosis" min="1" step="1"
                                    value={dosis}
                                    onChange={e => setDosis(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </fieldset>
                    )
                }

                <InputSubmit value="Guardar" />
            </form>
        </div>
    );
}

export default UpdateInformationForm;