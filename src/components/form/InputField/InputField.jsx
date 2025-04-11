import "./InputField.css";
export default function InputField({ type, name, className = "", placeholder }) {
    
    return (
        <div className="input-field">

            <input type={type} id={name} className={className} name={name} placeholder={placeholder} />
        </div>
    )

}