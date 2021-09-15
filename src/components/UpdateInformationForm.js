import FormField from "./FormField";

const UpdateInformationForm = () => {
    return (
        <div>
            <h2>Actualizar Informaci&oacute;n</h2>

            <form>
                <FormField label="Dirección de domicilio" type="text" name="direccion"
                    value={direccion}
                    handleChange={setDireccion}
                />
            </form>
        </div>
    );
}
 
export default UpdateInformationForm;