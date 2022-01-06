import React from "react";
import { IconDashboard, IconInbox, IconItems, IconPerson } from "../icons";

const options = [
    {
        label: "Dashboard",
        icon: <IconDashboard className="text-white fill-current" />,
    },
    {
        label: "Profile",
        icon: <IconPerson className="text-white fill-current" />,
    },
    {
        label: "Projects",
        icon: <IconItems className="text-white fill-current" />,
    },
    {
        label: "Inbox",
        icon: <IconInbox className="text-white fill-current" />,
    },
];

const SideNavAdmin = () => {
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-transparent'>

        <div className="absolute top-0 left-0 w-3/5 bg-primary h-full text-white p-5 px-8">
            <h1 className='text-3xl font-bold font-roboto'>DROJAS</h1>
            <ul className='grid  mt-5'>
                {options.map((option, index) => {
                    return (
                        <li key={index} className='flex gap-3 py-3 justify-between cursor-pointer'>
                            {option.label} {option.icon}
                        </li>
                    );
                })}
            </ul>
        </div>
        </div>
    );
};

export default SideNavAdmin;
