import React, { useState } from "react";
import "./ContactForm.css";
import TextArea from "../../pages/ContactPage/forms/TextArea";
import Header from "../Header/Header";
import Coordinates from "../../pages/ContactPage/forms/Coordinates";
import Dispos from "../../pages/ContactPage/forms/Dispos";

export default function ContactForm() {

    const [message, setMessage] = useState("");
    return (
        <div className="  flex flex-col flex-start">
            <Header className="text-3xl font-bold text-white mb-8 w-full max-w-6xl">Contactez l'agence</Header>
            <form className="rounded-2xl py-8 w-full max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-8 px-2 sm:px-0">
                    <div className="flex flex-col gap-6 w-full lg:w-2/5">
                        <Coordinates />
                        <Dispos />
                    </div>
                    <div className="flex flex-col gap-12 flex-1 ">
                        <TextArea message={message} setMessage={setMessage} />
                        <div className="flex justify-end mt-9">
                            <button className="envoyer px-14  py-3 text-white rounded-full text-lg font-bold hover:bg-orange-600">
                                ENVOYER
                            </button>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
}