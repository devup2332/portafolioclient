import React from "react";
import { IconEmail, IconMap, IconPhone } from "./icons";

const ContactHome = () => {
  return (
    <div className='grid'>
      <div className="bg-primary grid py-16 gap-5 ">
        <h1 className="text-center text-white text-5xl ">CONTACT</h1>
        <form className="w-5/6 justify-self-center grid gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="input-contact text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="input-contact text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input-contact text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full"
          />

          <input
            type="text"
            placeholder="Email"
            className="input-contact text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full"
          />
          <textarea
            placeholder="Message"
            className="input-contact text-sm bg-primary outline-none text-white border-white border-2 rounded-md py-2 px-3 w-full h-40"
          />
          <button
            type="submit"
            className="w-full block bg-secondary text-white text-sm rounded-md py-2.5 shadow-sm transition-all hover:shadow-xl font-bold text-font-mono"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="py-10 grid gap-10 w-max justify-self-center">
        <h1 className="title-size-custom text-center">INFORMATION</h1>

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
