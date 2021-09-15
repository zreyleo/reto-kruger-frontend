const FormField = ({ label, type, name, value, handleChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                value={value} 
                onChange={event => handleChange(event.target.value)} 
            />
        </div>
    );
}
 
export default FormField;