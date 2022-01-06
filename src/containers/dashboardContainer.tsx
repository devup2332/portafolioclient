import React from "react";
import { IconMenu } from "../components/icons";

const DashboardContainer = () => {
    return (
        <div>
            <div>
                <h1>DASHBOARD</h1>
                <button>{<IconMenu className="text-black fill-current" />}</button>
            </div>
        </div>
    );
};

export default DashboardContainer;
