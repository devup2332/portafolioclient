import { useRouter } from "next/dist/client/router";
import React from "react";
import { IconDashboard, IconExit, IconHome, IconInbox, IconItems, IconPerson } from "../icons";

const options = [
    {
        label: "Dashboard",
        icon: <IconDashboard className="text-black fill-current" />,
        section: "dashboard",
    },
    {
        label: "Profile",
        icon: <IconPerson className="text-black w-5 stroke-current" />,
        section: "profile",
    },
    {
        label: "Projects",
        icon: <IconItems className="text black stroke-current w-5" />,
        section: "projects",
    },
    {
        label: "Inbox",
        icon: <IconInbox className="text-black fill-current w-5" />,
        section: "inbox",
    },
    {
        label: "Homepage",
        icon: <IconHome className="text-black w-5 fill-current " />,
        section: "",
    },
    {
        label: "Log out",
        icon: <IconExit className="text-danger fill-current w-5" />,
        section: "/login",
    },
];

const SideNavAdmin = () => {
    const router = useRouter();
    const goToSection = (section: string) => {
        if (section === "/login") localStorage.removeItem("api-token");
        router.push(section ? section : "/");
    };
    return (
        <div className="bg-primary w-1/5 p-10 h-full min-w-280 max-w-330 font-roboto">
            <h1 className="text-white text-5xl font-bold font-robotoMono">DROJAS</h1>
            <ul className="grid gap-7 mt-12">
                {options.map((opt, index) => {
                    if (opt.label === "Log out")
                        return (
                            <li
                                key={index}
                                className="cursor-pointer flex py-2 px-7 rounded-xl justify-between bg-white transition-all hover:bg-hover"
                                onClick={() => {
                                    goToSection(opt.section);
                                }}
                            >
                                <span className="text-danger">{opt.label}</span>
                                {opt.icon}
                            </li>
                        );

                    return (
                        <li
                            key={index}
                            className="cursor-pointer flex py-2 px-7 rounded-xl justify-between bg-white transition-all hover:bg-hover"
                            onClick={() => {
                                goToSection(opt.section);
                            }}
                        >
                            <span className="text-black">{opt.label}</span>
                            {opt.icon}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideNavAdmin;
