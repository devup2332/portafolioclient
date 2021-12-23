import React, { useRef } from "react";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useGlobal } from "../providers/GlobalProviders";
import { IconContact, IconGithub, IconHome, IconItems, IconLinkedin, IconPerson, IconWhatsapp } from "./icons";

export interface SideNavProps {
    sidenav: boolean;
    setSidenav: Function;
}

const SideNav = ({ sidenav, setSidenav }: SideNavProps) => {
    const { user } = useGlobal();
    const refSideNav = useRef<HTMLDivElement>(null);

    const options = [
        {
            label: "Home",
            icon: <IconHome className="text-secondary fill-current" />,
            action: () => {},
        },
        {
            label: "About Me",
            icon: <IconPerson className="text-secondary fill-current" />,
            action: () => {},
        },
        {
            label: "Projects",
            icon: <IconItems className="text-secondary fill-current" />,
            action: () => {},
        },
        {
            label: "Contact",
            icon: <IconContact className="text-secondary fill-current" />,
            action: () => {},
        },
    ];
    const handleToggleSideNav = (e: any) => {
        if (!refSideNav.current?.contains(e.target)) {
            setSidenav(false);
        }
    };

    const handleWhastapp = () => {
        const message = whatsappMessage();

        const url = whatsappLink(message);
        window.open(url);
    };
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
                        return (
                            <li className="flex gap-3 items-center sidenav-item " key={index}>
                                {item.icon}
                                <span>{item.label}</span>
                            </li>
                        );
                    })}
                </ul>

                <div className="absolute bottom-5 left-5 flex gap-3 ">
                    <a onClick={handleWhastapp} className="cursor-pointer" rel="noreferrer">
                        <IconWhatsapp className="fill-current text-black w-5" />
                    </a>
                    <a href={user?.links?.linkedin} target="_blank" rel="noreferrer">
                        <IconLinkedin className="fill-current text-black w-5" />
                    </a>
                    <a href={user?.links?.github} target="_blank" rel="noreferrer">
                        <IconGithub className="fill-current text-black w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default SideNav;
