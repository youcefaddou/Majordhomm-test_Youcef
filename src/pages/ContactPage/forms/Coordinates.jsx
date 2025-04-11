import FormSection from "../../../components/form/FormSection/FormSection"
import InputField from "../../../components/form/InputField/InputField"
import RadioGroup from "../../../components/form/RadioGroup/RadioGroup"

const Coordinates = () => {
    return(
        <FormSection title="VOS COORDONNÉES">
            <RadioGroup
                name="gender"
                options={[
                    { label: "Mme", value: "female" },
                    { label: "Mr", value: "male" },
                ]}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <InputField
                    type="text"
                    name="Nom"
                    className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                    placeholder="Nom"
                    patternError={/^[a-zA-ZÀ-ÿ]+$/}
                    errorMessage="Le nom ne doit contenir que des lettres"
                />
                <InputField
                    type="text"
                    name="Prénom"
                    className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                    placeholder="Prénom"
                />
            </div>
            <InputField
                type="email"
                name="email"
                className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                placeholder="Adresse mail"
            />
            <InputField
                type="phone"
                name="phone"
                className="rounded-full p-3 border border-gray-300 bg-white w-full placeholder-gray-500 text-black"
                placeholder="Téléphone"
            />
        </FormSection>
    )
}

export default Coordinates