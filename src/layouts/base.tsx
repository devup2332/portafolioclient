import React, { ReactElement } from "react";
import Head from "next/head";

export interface BaseProps {
    header: ReactElement;
    children: ReactElement;
    snackbar?: ReactElement;
    section?: string;
}
const Base = ({ header, section, children }: BaseProps) => {
    return (
        <div>
            <Head>
                <title>Drojas - {section}</title>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {header}
            <div className="">{children}</div>
        </div>
    );
};

export default Base;
