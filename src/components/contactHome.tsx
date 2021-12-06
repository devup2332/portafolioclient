import React from "react";
import { IconEmail, IconMap, IconPhone } from "./icons";

const inputs = [
    {
        placeholder: "Full Name",
        type: "input",
    },
    {
        placeholder: "Phone",
        type: "input",
    },
    {
        placeholder: "Subject",
        type: "input",
    },
    {
        placeholder: "Email",
        type: "input",
    },
    {
        placeholder: "Message",
        type: "textarea",
    },
];

const ContactHome = () => {
    return (
        <div className="grid lg:flex lg:gap-10">
            <div className="bg-primary grid py-16 gap-5 max-w-1180 lg:py-24 lg:w-4/6 lg:rounded-tr-xl lg:rounded-br-xl lg:pl-20 lg:pr-10 xl:pr-32 xl:pl-48 2xl:pl-96">
                <h1 className="text-center text-white text-5xl lg:text-7xl lg:text-left xl:text-8xl">CONTACT</h1>
                <form className="w-5/6 justify-self-center grid gap-5 lg:w-full lg;grid lg:grid-cols-2 lg:gap-11 lg:mt-10">
                    {inputs.map((input, index) => {
                        if (input.type === "input") {
                            return (
                                <input
                                    type="text"
                                    key={index}
                                    placeholder={input.placeholder}
                                    className="font-robotoMono text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full xl:h-14"
                                />
                            );
                        }
                        return (
                            <textarea
                                key={index}
                                placeholder={input.placeholder}
                                className="font-robotoMono text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full h-40 lg:col-span-2"
                            />
                        );
                    })}
                    <button
                        type="submit"
                        className="w-full block bg-secondary text-white text-sm rounded-md py-2.5 shadow-sm transition-all hover:shadow-xl font-bold font-robotoMono lg:row-span-1 lg:col-span-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="py-10 grid gap-10 w-max justify-self-center lg:w-2/6 lg:flex lg:flex-col lg:pr-20 xl:pr-48 2xl:pr-80 lg:py-24">
                <h1 className="title-size-custom text-center lg:text-5xl ">INFORMATION</h1>

                <div className="flex w-full">
                    <IconMap className="fill-current text-secondary" />
                    <p className="ml-3">Peru, Arequipa Arequipa</p>
                </div>
                <div className="flex  ">
                    <IconPhone className="fill-current text-secondary" />
                    <p className="ml-3">+51 976 469 908</p>
                </div>
                <div className="flex ">
                    <IconEmail className="fill-current text-secondary" />
                    <p className="ml-3">devup2332@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;
