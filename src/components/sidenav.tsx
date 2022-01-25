import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef } from "react";
import { verifyMobile } from "../lib/utils/devicesMobile";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useGlobal } from "../providers/GlobalProviders";
import { IconContact, IconGithub, IconHome, IconItems, IconLinkedin, IconPerson, IconWhatsapp } from "./icons";

export interface SideNavProps {
    sidenav: boolean;
    setSidenav: Function;
}

const SideNav = ({ sidenav, setSidenav }: SideNavProps) => {
    const { user, token, setToken } = useGlobal();
    const refSideNav = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const options = [
        {
            label: "Home",
            icon: <IconHome className="text-secondary w-7 fill-current" />,
            action: () => {},
        },
        {
            label: "About Me",
            icon: <IconPerson className="text-secondary w-7  stroke-current" />,
            action: () => {},
        },
        {
            label: "Projects",
            icon: <IconItems className="text-secondary w-7 stroke-current" />,
            action: () => {},
        },
        {
            label: "Contact",
            icon: <IconContact className="text-secondary w-7 fill-current" />,
            action: () => {},
        },
        {
            label: "Admin",
            icon: <IconContact className="text-secondary w-7 fill-current" />,
            action: () => {
                router.push("admin");
            },
        },
    ];
    const handleToggleSideNav = (e: any) => {
        if (!refSideNav.current?.contains(e.target)) {
            setSidenav(false);
        }
    };

    const handleWhastapp = () => {
        const message = whatsappMessage();
        const isMobile = verifyMobile();
        const url = whatsappLink(message, user?.phone, isMobile);
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
                        if (item.label === "Admin" && token) {
                            return (
                                <li className="flex gap-3 items-center sidenav-item " onClick={item.action} key={index}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </li>
                            );
                        }
                        return (
                            <li className="flex gap-3 items-center sidenav-item " onClick={item.action} key={index}>
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
