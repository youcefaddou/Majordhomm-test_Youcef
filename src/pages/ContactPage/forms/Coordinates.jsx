import { useState } from "react";
import FormSection from "../../../components/form/FormSection/FormSection";
import InputField from "../../../components/form/InputField/InputField";
import RadioGroup from "../../../components/form/RadioGroup/RadioGroup";

const Coordinates = ({ setCoordinates }) => {
    const [data, setData] = useState({
        gender: "female", // "Mme" sélectionné par défaut
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";
        if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
            error = "Adresse email invalide.";
        } else if (name === "phone" && value && !/^\d{10}$/.test(value)) {
            error = "Numéro de téléphone invalide.";
        } else if (
            (name === "lastName" && value && !/^[a-zA-ZÀ-ÿ' -]{2,50}$/.test(value)) || 
            (name === "firstName" && value && !/^[a-zA-ZÀ-ÿ' -]{2,50}$/.test(value))
        ) {
            error = "Le nom ou prénom doit contenir entre 2 et 50 caractères valides.";
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
        const updatedData = { ...data, [name]: value };
        setData(updatedData);
        setCoordinates(updatedData); // Ensure this is called outside of setData
    };

    return (
        <FormSection title="VOS COORDONNÉES">
            <RadioGroup
                name="gender"
                options={[
                    { label: "Mme", value: "female", checked: data.gender === "female" },
                    { label: "Mr", value: "male", checked: data.gender === "male" },
                ]}
                onChange={handleChange}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <InputField
                    type="text"
                    name="lastName"
                    className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                    placeholder="Nom"
                    onChange={handleChange}
                    error={errors.lastName}
                />
                <InputField
                    type="text"
                    name="firstName"
                    className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                    placeholder="Prénom"
                    onChange={handleChange}
                    error={errors.firstName}
                />
            </div>
            <InputField
                type="email"
                name="email"
                className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                placeholder="Adresse mail"
                onChange={handleChange}
                error={errors.email}
            />
            <InputField
                type="tel"
                name="phone"
                className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                placeholder="Téléphone"
                onChange={handleChange}
                error={errors.phone}
            />
        </FormSection>
    );
};

export default Coordinates;