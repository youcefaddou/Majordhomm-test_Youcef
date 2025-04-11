import React, { useState } from "react";
import "./InputField.css";

export default function InputField({ type, name, className = "", placeholder, patternError = null, errorMessage = "", onChange, error }) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const fieldValue = e.target.value;
        setValue(fieldValue);
        onChange && onChange(e);
    };

    return (
        <div className="input-field">
            <input
                type={type}
                value={value}
                onChange={handleChange}
                id={name}
                className={`${className} ${error ? "border-red-500" : ""}`}
                name={name}
                placeholder={placeholder}
            />
            <div className="h-5">
                {error && <p className="text-red-500 text-sm w-full">{error}</p>}
            </div>
        </div>
    );
}