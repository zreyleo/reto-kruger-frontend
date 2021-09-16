class Empleado {
    constructor(cedula, nombres, apellidos, correo) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.fechaNacimiento = null;
        this.direccion = null;
        this.telefono = null;
        this.vacunado = null;
        this.vacuna = null;
        this.fechaVacunacion = null;
        this.dosis = null;

        this.username = nombres.toLowerCase().charAt(0) + apellidos.toLowerCase().charAt(0) + cedula.slice(-4);
        this.password = cedula +  apellidos.charAt(0)
    }
}

export default Empleado