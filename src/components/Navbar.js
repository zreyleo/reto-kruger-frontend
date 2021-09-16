import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../GlobalState";

const Navbar = () => {
    const { sessionRole } = useContext(Context)

    return (
        <nav className="w-full bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="py-2 col-md-4 offset-8 d-flex justify-content-between">
                        {
                            !sessionRole ? (
                                <>
                                    <Link className="text-white" to="/login/administrador">Login Administrador</Link>

                                    <Link className="text-white" to="/login/empleados">Login Empleado</Link>
                                </>
                            ) : (
                                <Link className="text-white" to="/">Cerrar Sesi&oacute;n</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;