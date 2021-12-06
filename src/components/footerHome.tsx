import React from "react";
import { IconGithub, IconLinkedin, IconWhatsapp } from "./icons";

const FooterHome = () => {
    return (
        <div className="bg-primary py-5 lg:mt-20 lg:py-24">
            <div className="w-5/6 m-auto text-white grid gap-10 lg:max-w-1180 ">
                <div className="flex  justify-between">
                    <h1 className="font-extrabold lg:text-4xl">DROJAS</h1>
                    <div className="flex gap-3 lg:gap-5">
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

                <div className=" grid gap-10 w-full lg:flex lg:justify-between font-robotoMono">
                    <ul className="flex justify-between w-5/6 m-auto lg:max-w-400 lg:m-0 cursor-pointer">
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <p className="text-center lg:text-right">© 2011 Diego Raul Rojas All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default FooterHome;
