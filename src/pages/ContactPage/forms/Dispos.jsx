import React, { useState } from "react";
import FormSection from "../../../components/form/FormSection/FormSection";

const Dispos = ({ availabilities, setAvailabilities }) => {
    const [currentAvailability, setCurrentAvailability] = useState({
        day: "Lundi",
        hour: "7",
        minutes: "00",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAvailability((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddAvailability = () => {
        setAvailabilities((prev) => {
            const updatedAvailabilities = [...prev, currentAvailability];
            console.log("Updated Availabilities:", updatedAvailabilities);
            return updatedAvailabilities;
        });
        setCurrentAvailability({ day: "Lundi", hour: "7", minutes: "00" });
    };

    const handleRemoveAvailability = (e, index) => {
        e.preventDefault();
        setAvailabilities((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <FormSection title="DISPONIBILITÉS POUR UNE VISITE" className="mb-4">
            <div className="flex flex-row sm:flex-row gap-4 items-end">
                <select
                    className="rounded-full mt-4 p-3 border border-gray-300 bg-white text-gray-500"
                    name="day"
                    value={currentAvailability.day}
                    onChange={handleInputChange}
                >
                    <option value="Lundi">Lundi</option>
                    <option value="Mardi">Mardi</option>
                    <option value="Mercredi">Mercredi</option>
                    <option value="Jeudi">Jeudi</option>
                    <option value="Vendredi">Vendredi</option>
                    <option value="Samedi">Samedi</option>
                    <option value="Dimanche">Dimanche</option>
                </select>

                <select
                    className="rounded-full p-3 border border-gray-300 bg-white  text-gray-500"
                    name="hour"
                    value={currentAvailability.hour}
                    onChange={handleInputChange}
                >
                    {Array.from({ length: 13 }, (_, i) => i + 7).map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}h
                        </option>
                    ))}
                </select>

                <select
                    className="rounded-full p-3 border border-gray-300 bg-white text-gray-500"
                    name="minutes"
                    value={currentAvailability.minutes}
                    onChange={handleInputChange}
                >
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </select>

                <button
                    className="px-5 py-1  bg-purple-700 text-white rounded-4xl text-sm  hover:bg-purple-800"
                    onClick={handleAddAvailability}
                    type="button"
                >
                    AJOUTER DISPO
                </button>
            </div>

            <div className="mt-6 flex flex-col gap-2">
                {availabilities.map((availability, index) => (
                    <div
                        key={index}
                        className="relative flex items-center w-full sm:w-auto p-3 border border-gray-300 rounded-full bg-gray-300 text-gray-800"
                    >
                        <p className="flex-1 text-gray-600 text-sm font-medium">
                            {`${availability.day} à ${availability.hour}h${availability.minutes}`}
                        </p>
                        <button
                            className="absolute right-4 text-gray-500 font-bold text-lg hover:text-gray-700"
                            onClick={(e) => handleRemoveAvailability(e, index)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </FormSection>
    );
};

export default Dispos;