import React, { ReactElement } from "react";

export interface BaseProps {
    header:  ReactElement;
    children: ReactElement;
    snackbar?: ReactElement;
}
const Base = ({ header, children }: BaseProps) => {
    return (
        <div>
            {header}
            <div className="">{children}</div>
        </div>
    );
};

export default Base;
