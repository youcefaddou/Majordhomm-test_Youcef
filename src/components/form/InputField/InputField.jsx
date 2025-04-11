import "./InputField.css";
export default function InputField({ type, name, className = "", placeholder,  patternError ="", errorMessage = "", onChange }) {
    const [error, setError] = useState(false);
    const validateField = (fieldValue) => {
        if (patternError && errorMessage && fieldValue != "") {
            if (!patternError.test(fieldValue)) {
                setError(true);
            } else {
                setError(null);
            }
        } else {
            setError(null);
        }
    };

    const handleChange = (e) => {
        onChange(e);
        validateField(e.target.value);
    };

    useEffect(() => {
        validateField(value);
    }, [value, patternError, errorMessage]);

    return (
        <div className="input-field">
            {error && <span className="error-message">{errorMessage}</span>}
            <input type={type} onChange={handleChange} id={name} className={className} name={name} placeholder={placeholder} />
        </div>
    )

}


