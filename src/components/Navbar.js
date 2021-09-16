import { useContext } from "react";
import { Link } from "react-router-dom";
import { ADMIN_ROLE } from "../CONSTANTS";

import { Context } from "../GlobalState";

const Navbar = () => {
    const { sessionRole } = useContext(Context)

    return (
        <nav className="w-full bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="py-2 col-md-6 offset-6 d-flex justify-content-between">
                        {
                            !sessionRole ? (
                                <>
                                    <Link className="text-white" to="/login/administrador">Login Administrador</Link>

                                    <Link className="text-white" to="/login/empleados">Login Empleado</Link>
                                </>
                            ) : (
                                <>
                                    {
                                        sessionRole == ADMIN_ROLE && (
                                            <>
                                                <Link to="/administrador/dashboard" className="text-white">Registrar Empleados</Link>
                                                <Link to="/administrador/empleados" className="text-white">Ver Empleados</Link>
                                            </>
                                        )
                                    }

                                    <Link className="text-white" to="/">Cerrar Sesi&oacute;n</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;