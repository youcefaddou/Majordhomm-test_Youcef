import React, { useState } from "react";
import FormSection from "../../../components/form/FormSection/FormSection";
import RadioGroup from "../../../components/form/RadioGroup/RadioGroup";

const TextArea = ({ message, setMessage }) => {
    const [error, setError] = useState(false);

    const validateMessage = (value) => {
        if (value.length < 10) {
            setError("Le message doit contenir au moins 10 caractères.");
        } else {
            setError(false);
        }
    };

    const handleSubjectChange = (e) => {
        const subject = e.target.value;
        setMessage((prev) => ({ ...prev, subject }));
    };

    const handleContentChange = (e) => {
        const content = e.target.value;
        setMessage((prev) => ({ ...prev, content }));
        validateMessage(content);
    };

    return (
        <FormSection title="VOTRE MESSAGE" className="mt-4">
            <RadioGroup
                name="subject"
                options={[
                    { label: "Demande de visite", value: "visit", checked: message.subject === "visit" || !message.subject },
                    { label: "Etre rappelé", value: "callback", checked: message.subject === "callback" },
                    { label: "Plus de photos", value: "morepic", checked: message.subject === "morepic" },
                ]}
                onChange={handleSubjectChange}
            />
            <textarea
                className={`w-full h-46 rounded-4xl my-4 mb-2 p-4 border ${
                    error ? "border-red-500" : "border-gray-300"
                } bg-white resize-none placeholder-gray-500 text-black`}
                placeholder="Votre message"
                value={message.content || ""}
                onChange={handleContentChange}
            />
            <div className="h-5">
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        </FormSection>
    );
};

export default TextArea;