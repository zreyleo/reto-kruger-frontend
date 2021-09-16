const FormField = ({ label, type, name, value, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                className="form-control"
                value={value} 
                onChange={event => handleChange(event.target.value)} 
            />
        </div>
    );
}
 
export default FormField;