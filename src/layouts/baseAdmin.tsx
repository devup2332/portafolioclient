import React, { ReactElement } from "react";
import Head from "next/head";

export interface SidenavAdminProps {
    sidenav: ReactElement;
    section?: string;
    children?: ReactElement;
}

const BaseAdmin = ({ sidenav, section, children }: SidenavAdminProps) => {
    return (
        <>
            <Head>
                <title>{section}</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex h-screen">
                {sidenav && sidenav}
                {children ? children : null}
            </div>
        </>
    );
};

export default BaseAdmin;