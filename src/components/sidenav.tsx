import { NextRouter, useRouter } from "next/dist/client/router";
import React, { useEffect, useRef } from "react";
import { verifyMobile } from "../lib/utils/devicesMobile";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useGlobal } from "../providers/GlobalProviders";
import { useAppSelector } from "../redux/store";
import {
  IconContact,
  IconDashboard,
  IconGithub,
  IconHome,
  IconItems,
  IconLinkedin,
  IconPerson,
  IconWhatsapp,
} from "./icons";

export interface SideNavProps {
  sidenav: boolean;
  setSidenav: Function;
}

const options = [
  {
    label: "Home",
    icon: <IconHome className="text-secondary w-5 fill-current" />,
    action: () => {},
    section: "banner_home_section",
  },
  {
    label: "About Me",
    icon: <IconPerson className="text-secondary w-5  stroke-current" />,
    action: () => {},
    section: "about_home_section",
  },
  {
    label: "Projects",
    icon: <IconItems className="text-secondary w-5 stroke-current" />,
    action: () => {},
    section: "projects_home_section",
  },
  {
    label: "Contact",
    icon: <IconContact className="text-secondary w-6 fill-current" />,
    action: () => {},
    section: "contact_home_section",
  },
  {
    label: "Admin",
    icon: <IconDashboard className="text-secondary w-6 fill-current" />,
    action: (router: NextRouter) => {
      router.push("admin");
    },
    section: "admin_home_section",
  },
];
const SideNav = ({ sidenav, setSidenav }: SideNavProps) => {
  const { token, setToken } = useGlobal();
  const refSideNav = useRef<HTMLDivElement>(null);
  const { mainProfile } = useAppSelector((state) => state.mainProfile);
  const router = useRouter();

  const handleToggleSideNav = (e: any) => {
    if (!refSideNav.current?.contains(e.target)) {
      setSidenav(false);
    }
  };
  const goTo = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setSidenav(false);
  };

  const handleWhastapp = () => {
    const message = whatsappMessage();
    const isMobile = verifyMobile();
    const url = whatsappLink(message, mainProfile?.phone, isMobile);
    console.log(url);
    window.open(url);
  };
  useEffect(() => {
    const token = localStorage.getItem("api-token");
    if (token) setToken(token);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 w-full transition-all z-10 h-full bg-black-transparent"
      style={{
        opacity: sidenav ? "1" : "0",
        visibility: sidenav ? "visible" : "hidden",
      }}
      onClick={handleToggleSideNav}
    >
      <div
        className="absolute transition-transform top-0 left-0 transform -translate-x-full w-3/5 bg-white h-full py-5 px-5"
        style={{ transform: sidenav ? `translateX(0%)` : `translateX(-100%)` }}
        ref={refSideNav}
      >
        <div>
          <h1>DROJAS</h1>
          <button type="button"></button>
        </div>

        <ul className="grid gap-5 mt-5">
          {options.map((item, index) => {
            if (item.label !== "Admin") {
              return (
                <li
                  className="flex gap-3 items-center sidenav-item "
                  onClick={() => goTo(item.section)}
                  key={index}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              );
            }
            if (token)
              return (
                <li
                  className="flex gap-3 items-center sidenav-item "
                  onClick={() => item.action(router)}
                  key={index}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              );
          })}
        </ul>

        <div className="absolute bottom-5 left-5 flex gap-3 ">
          <a
            onClick={handleWhastapp}
            className="cursor-pointer"
            rel="noreferrer"
          >
            <IconWhatsapp className="fill-current text-black w-5" />
          </a>
          <a
            href={mainProfile?.links?.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin className="fill-current text-black w-5" />
          </a>
          <a href={mainProfile?.links?.github} target="_blank" rel="noreferrer">
            <IconGithub className="fill-current text-black w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
