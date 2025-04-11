import BgImage from "../../components/BgImage/BgImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import RadioGroup from "../../components/form/RadioGroup/RadioGroup";
import "./ContactPage.css";
export default function ContactPage() {
    return (
        <>
            < BgImage
                image={"/images/salon.png"}
                alt={"salon"}
            />
            <div className="container w-fit">
                <Header
                    message={"Contactez l'Agence"}
                />
                <main>
                <ContactForm/>

                
                </main>
            </div>

        </>

    )
}