import React, { ReactElement } from "react";

export interface SidenavAdminProps {
    sidenav: ReactElement;
    section?: ReactElement;
}

const BaseAdmin = ({ sidenav, section }: SidenavAdminProps) => {
    return (
        <div>
            {sidenav && sidenav}
            {section ? section : null}
        </div>
    );
};

export default BaseAdmin;
