import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import TextArea from "../../pages/ContactPage/forms/TextArea";
import Header from "../Header/Header";
import Coordinates from "../../pages/ContactPage/forms/Coordinates";
import Dispos from "../../pages/ContactPage/forms/Dispos";

export default function ContactForm() {
    const [coordinates, setCoordinates] = useState({});
    const [availabilities, setAvailabilities] = useState([]);
    const [message, setMessage] = useState({ subject: "", content: "" });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const isCoordinatesValid =
            coordinates.gender &&
            coordinates.lastName &&
            coordinates.firstName &&
            coordinates.email &&
            coordinates.phone &&
            !Object.values(coordinates).some((value) => value === "");

        const isMessageValid =
            message.subject &&
            message.content &&
            message.content.length >= 10;

        const isAvailabilitiesValid = availabilities.length > 0;

        return isCoordinatesValid && isMessageValid && isAvailabilitiesValid;
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [coordinates, message, availabilities]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.error("Form is invalid. Please check the inputs.");
            return;
        }

        const formData = {
            coordinates,
            availabilities,
            message,
        };

        console.log("Submitting form data:", JSON.stringify(formData, null, 2)); // Log détaillé

        try {
            const response = await fetch("http://localhost:3001/contact", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully.");
            } else {
                console.log("Error submitting form:", response.statusText);
            }
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    return (
        <div className="flex flex-col flex-start">
            <Header className="text-3xl font-bold text-white mb-8 w-full max-w-6xl">Contactez l'agence</Header>
            <form className="rounded-2xl py-8 w-full max-w-6xl" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-12 px-2 sm:px-0">
                    <div className="flex flex-col gap-6 w-full lg:w-2/5">
                        <Coordinates setCoordinates={setCoordinates} />
                        <Dispos availabilities={availabilities} setAvailabilities={setAvailabilities} />
                    </div>
                    <div className="flex flex-col gap-12 flex-1 ">
                        <TextArea message={message} setMessage={setMessage} />
                        <div className="flex justify-end mt-9">
                            <button
                                className="envoyer px-14 py-3 text-white rounded-full text-lg font-bold hover:bg-orange-600"
                                type="submit"
                                disabled={!isFormValid}
                            >
                                ENVOYER
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}