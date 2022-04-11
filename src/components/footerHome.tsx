import React from "react";
import { verifyMobile } from "../lib/utils/devicesMobile";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useAppSelector } from "../redux/store";
import { IconGithub, IconLinkedin, IconWhatsapp } from "./icons";

const FooterHome = () => {
  const { mainProfile } = useAppSelector((state) => state.mainProfile);

  const handleWhastapp = () => {
    const message = whatsappMessage();
    const isMobile = verifyMobile();
    const url = whatsappLink(message, mainProfile.phone, isMobile);
    window.open(url);
  };

  const goTo = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-primary py-5 lg:mt-20 lg:py-24">
      <div className="w-5/6 m-auto text-white grid gap-10 lg:max-w-1180 ">
        <div className="flex  justify-between">
          <h1 className="font-extrabold lg:text-4xl">DROJAS</h1>
          <div className="flex gap-3 lg:gap-5">
            <a
              onClick={handleWhastapp}
              className="cursor-pointer"
              rel="noreferrer"
            >
              <IconWhatsapp className="fill-current" />
            </a>
            <a
              href={mainProfile?.links?.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin className="fill-current" />
            </a>
            <a
              href={mainProfile?.links?.github}
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub className="fill-current" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 w-full lg:flex lg:justify-between font-robotoMono">
          <ul className="flex justify-between gap-5  m-auto lg:max-w-400 lg:m-0 cursor-pointer">
            <li onClick={() => goTo("banner_home_section")}>Home</li>
            <li onClick={() => goTo("about_home_section")}>About</li>
            <li onClick={() => goTo("projects_home_section")}>Projects</li>
            <li onClick={() => goTo("contact_home_section")}>Contact</li>
          </ul>
          <p className="text-center lg:text-right">
            © 2022 Diego Raul Rojas All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
