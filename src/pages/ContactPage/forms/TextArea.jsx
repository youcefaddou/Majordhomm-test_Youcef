import FormSection from "../../../components/form/FormSection/FormSection";
import RadioGroup from "../../../components/form/RadioGroup/RadioGroup";

const TextArea = ({ message, setMessage }) => {
    return (
        <FormSection title="VOTRE MESSAGE" className="mt-4 ">
            <RadioGroup
                name="messagecont"
                options={[
                    { label: "Demande de visite", value: "visit" },
                    { label: "Etre rappelé", value: "callback" },
                    { label: "Plus de photos", value: "morepic" },
                ]}
            />
            <textarea
                className="w-full h-46 rounded-4xl my-4 mb-6 p-4 border border-gray-300 bg-white resize-none placeholder-gray-500 text-black"
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </FormSection>
    );
};

export default TextArea;