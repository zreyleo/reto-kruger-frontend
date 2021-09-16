import { useContext } from "react";

import { Context } from "../GlobalState";

const EmployeesTable = () => {
    const { empleados } = useContext(Context)
    return (
        <div className="row">
            <table>
                <thead>
                    <tr>
                        <th className="text-uppercase">cedula</th>
                        <th className="text-uppercase">empleado</th>
                        <th className="text-uppercase">vacunado</th>
                        <th className="text-uppercase">vacuna</th>
                        <th className="text-uppercase">dosis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map(empleado => (
                            <tr key={empleado.id}>
                                <td>{empleado.cedula}</td>
                                <td>{empleado.nombres + ' ' + empleado.apellidos}</td>
                                <td>{empleado.vacunado ? 'SI' : 'NO'}</td>
                                <td>{empleado.vacuna ? empleado.vacuna : 'N/A' }</td>
                                <td>{empleado.dosis ? empleado.dosis : 'N/A' }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default EmployeesTable;