import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../GlobalState";

const Navbar = () => {
    const { sessionRole } = useContext(Context)

    return (
        <nav className="w-full">
                        <Link to="/login/administrador">Login Administrador</Link>

                        <Link to="/login/empleados">Login Empleado</Link>
                    <Link to="/">Cerrar Sesi&oacute;n</Link>
        </nav >
    );
}

export default Navbar;