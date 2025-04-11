import "./RadioGroup.css";

export default function RadioGroup({ name, options, onChange }) {
    return (
        <div className="radio-group">
            <div className="radio-options">
                {options.map((option) => (
                    <label key={option.label} className="radio-option">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={option.checked} 
                            onChange={onChange}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}