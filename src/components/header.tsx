import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { verifyMobile } from "../lib/utils/devicesMobile";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useGlobal } from "../providers/GlobalProviders";
import { useAppSelector } from "../redux/store";
import { IconGithub, IconLinkedin, IconMenu, IconWhatsapp } from "./icons";

export interface HeaderProps {
  setSidenav: Function;
  sidenav: boolean;
}
const Header = ({ setSidenav, sidenav }: HeaderProps) => {
  const { token, setToken } = useGlobal();
  const { mainProfile } = useAppSelector((state) => state.mainProfile);
  const router = useRouter();
  const toggleSideNav = () => {
    setSidenav(!sidenav);
  };
  const handleWhastapp = () => {
    const message = whatsappMessage();
    const isMobile = verifyMobile();
    const url = whatsappLink(message, mainProfile.phone, isMobile);
    window.open(url);
  };
  const goToAdmin = () => {
    router.push("admin");
  };
  const goTo = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const token = localStorage.getItem("api-token");
    if (token) setToken(token);
  }, []);

  return (
    <div className="bg-primary shadow-sm fixed top-0 left-0 w-full h-16 flex z-10 items-center lg:h-24 ">
      <div className="text-white flex w-4/5 m-auto justify-between max-w-1180">
        <h1 className="font-bold text-xl lg:text-4xl">DROJAS</h1>
        <ul className="hidden font-robotoMono lg:block lg:flex lg:gap-16 lg:items-center lg:text-base lg:cursor-pointer">
          <li onClick={() => goTo("banner_home_section")}>Home</li>
          <li onClick={() => goTo("about_home_section")}>About</li>
          <li onClick={() => goTo("projects_home_section")}>Projects</li>
          <li onClick={() => goTo("contact_home_section")}>Contact</li>
          {token && <li onClick={goToAdmin}>Admin</li>}
        </ul>
        <div className="hidden lg:block lg:flex lg:gap-5 lg:items-center ">
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
          <a href={mainProfile?.links?.github} target="_blank" rel="noreferrer">
            <IconGithub className="fill-current" />
          </a>
        </div>
        <button onClick={toggleSideNav} type="button" className="lg:hidden">
          <IconMenu className="fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Header;
