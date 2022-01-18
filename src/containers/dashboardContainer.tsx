import React from "react";
import { IconInbox, IconItems, IconPdf } from "../components/icons";

const DashboardContainer = () => {
    return (
        <div className="p-10 w-full border-2 border-danger">
            <h1 className="font-roboto text-5xl font-bold">DASHBOARD</h1>
            <div className='mt-16 flex justify-between border-2 border-danger'>
                <div className=''>
                    <h2>PROJECTS NUMBER</h2>
                    <IconItems />
                </div>
                <div>
                    <h2>INBOX MESSAGES</h2>
                    <IconInbox className="text-black fill-current" />
                </div>
                <div>
                    <h2>DOWNLOADS CV</h2>
                    <IconPdf />
                </div>
            </div>
        </div>
    );
};

export default DashboardContainer;
