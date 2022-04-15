import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmailRest } from "../lib/api/email/sendEmail";
import { separatePhone } from "../lib/utils/separatePhone";
import { useAppSelector } from "../redux/store";
import { IconEmail, IconLoading, IconMap, IconPhone } from "./icons";
import Snackbar from "./molecules/snackbar";

const inputs = [
  {
    placeholder: "Full Name",
    name: "fullname",
    type: "input",
  },
  {
    placeholder: "Phone",
    name: "phone",
    type: "input",
  },
  {
    placeholder: "Subject",
    name: "subject",
    type: "input",
  },
  {
    placeholder: "Email",
    name: "email",
    type: "input",
  },
  {
    placeholder: "Message",
    name: "message",
    type: "textarea",
  },
];

const ContactHome = () => {
  const { mainProfile } = useAppSelector((state) => state.mainProfile);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (email: any) => {
    setLoading(true);
    await sendEmailRest(email);
    setLoading(false);
    setMessage("Message send successfully");
    setOpen(true);
    reset();
  };

  return (
    <div id="contact_home_section" className="grid lg:flex lg:gap-10">
      <div className="bg-primary grid py-16 gap-5 max-w-1180 lg:py-24 lg:w-4/6 lg:rounded-tr-xl lg:rounded-br-xl lg:pl-20 lg:pr-10 xl:pr-31 xl:pl-48 2xl:pl-96 3xl:pl-600 4xl:max-w-1500 4xl:pl-750 5xl:max-w-1800 5xl:pl-900 6xl:pl-1100">
        <h1 className="text-center text-white text-5xl lg:text-7xl lg:text-left xl:text-8xl">
          CONTACT
        </h1>
        <form
          className="w-5/6 justify-self-center grid gap-5 lg:w-full lg;grid lg:grid-cols-2 lg:gap-11 lg:mt-10"
          onSubmit={handleSubmit(sendEmail)}
        >
          {inputs.map((input, index) => {
            if (input.type === "input") {
              return (
                <div key={index} className="grid gap-2">
                  <label className="text-white">{input.placeholder}</label>
                  <input
                    type={input.name === "phone" ? "number" : "text"}
                    autoComplete="off"
                    placeholder={input.placeholder}
                    className="font-roboto text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full xl:h-14"
                    {...register(input.name, {
                      required: {
                        value: true,
                        message: `${input.name.toUpperCase()} is required`,
                      },
                      valueAsNumber: true,
                    })}
                  />
                  {errors[input.name] && (
                    <p className="text-danger font-bold font-roboto text-base">
                      {errors[input.name].message}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <div key={index} className="lg:col-span-2 grid gap-2">
                <label className="text-white">{input.placeholder}</label>
                <textarea
                  placeholder={input.placeholder}
                  className="font-robotoMono text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full h-40 "
                  autoComplete="off"
                  {...register(input.name, {
                    required: {
                      value: true,
                      message: `${input.name.toUpperCase()} is required`,
                    },
                  })}
                />
                {errors[input.name] && (
                  <p className="text-danger font-bold font-roboto text-base">
                    {errors[input.name].message}
                  </p>
                )}
              </div>
            );
          })}
          <button
            type="submit"
            className="w-full block flex justify-center gap-3 bg-secondary text-white text-sm rounded-md py-2.5 shadow-sm transition-all hover:shadow-xl hover:bg-white hover:text-black font-bold font-robotoMono lg:row-span-1 lg:col-span-2"
          >
            {loading ? (
              <IconLoading className="w-7 fill-current animation-loading" />
            ) : (
              <IconEmail className="w-7 fill-current" />
            )}
            Send Message
          </button>
        </form>
      </div>

      <div className="py-10 grid gap-10 w-max justify-self-center lg:w-2/6 lg:flex lg:flex-col lg:pr-20 xl:pr-48 2xl:pr-80 4xl:pr-750 lg:py-24">
        <h1 className="title-size-custom text-center lg:text-5xl ">
          INFORMATION
        </h1>

        <div className="flex w-full">
          <IconMap className="fill-current text-secondary" />
          <p className="ml-3">Peru, Arequipa Arequipa</p>
        </div>
        <div className="flex  ">
          <IconPhone className="fill-current text-secondary" />
          <p className="ml-3">
            +51 {separatePhone(mainProfile.phone?.toString()!).join(" ")}
          </p>
        </div>
        <div className="flex ">
          <IconEmail className="fill-current text-secondary" />
          <p className="ml-3">{mainProfile.email}</p>
        </div>
      </div>
      <Snackbar
        message={message}
        hideDuration={6000}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ContactHome;
