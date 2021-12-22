import React from "react";
import { whatsappLink } from "../lib/utils/whatsappLink";
import { whatsappMessage } from "../lib/utils/whatsappMessage";
import { useGlobal } from "../providers/GlobalProviders";
import { IconGithub, IconLinkedin, IconMenu, IconWhatsapp } from "./icons";

export interface HeaderProps {
    setSidenav: Function;
    sidenav: boolean;
}
const Header = ({ setSidenav, sidenav }: HeaderProps) => {
    const { user } = useGlobal();
    const toggleSideNav = () => {
        setSidenav(!sidenav);
    };
    const handleWhastapp = () => {
        const message = whatsappMessage();
        const url = whatsappLink(message);
        window.open(url);
    };

    return (
        <div className="bg-primary shadow-sm fixed top-0 left-0 w-full h-16 flex z-10 items-center lg:h-24">
            <div className="text-white flex w-4/5 m-auto justify-between max-w-1180">
                <h1 className="font-bold text-xl lg:text-4xl">DROJAS</h1>
                <ul className="hidden font-robotoMono lg:block lg:flex lg:gap-16 lg:items-center lg:text-base lg:cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="hidden lg:block lg:flex lg:gap-5 lg:items-center ">
                    <a onClick={handleWhastapp} className="cursor-pointer" rel='noreferrer'>
                        <IconWhatsapp className="fill-current" />
                    </a>
                    <a href={user?.links?.linkedin} target="_blank" rel='noreferrer'>
                        <IconLinkedin className="fill-current" />
                    </a>
                    <a href={user.links?.github} target="_blank" rel='noreferrer'>
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
