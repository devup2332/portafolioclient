import React from "react";
import { IconGithub, IconLinkedin, IconWhatsapp } from "./icons";

const FooterHome = () => {
  return (
    <div className="bg-primary py-5 lg:mt-20">
      <div className="w-5/6 m-auto text-white grid gap-10">
        <div className="flex  justify-between">
          <h1 className="font-extrabold">DROJAS</h1>
          <div className="flex gap-3">
            <a href="">
              <IconWhatsapp className="fill-current text-white" />
            </a>
            <a href="">
              <IconLinkedin className="fill-current text-white" />
            </a>
            <a href="">
              <IconGithub className="fill-current text-white" />
            </a>
          </div>
        </div>

        <div className='text-size-custom grid gap-10'>
          <ul className="flex justify-between w-5/6 m-auto">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <p className='text-center'>© 2011 Diego Raul Rojas All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
