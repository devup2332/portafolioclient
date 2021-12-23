import React, { useEffect } from "react";
import { IconClose } from "../icons";

export interface SnackbarProps {
    message: string;
    open: boolean;
    setOpen: Function;
    hideDuration: number;
}

let timeout: any;

const Snackbar = ({ message, open, setOpen, hideDuration }: SnackbarProps) => {
    const closeSnackbar = () => {
        setOpen(false);
        clearTimeout(timeout);
        timeout = undefined;
    };
    const setTimer = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(setTimer, hideDuration);
        return () => {
            clearTimeout(timeout);
        };
    }, [open]);
    return (
        <div
            className="transition-all fixed bottom-0 transform bg-white rounded-lg py-3 w-4/5 px-5 flex justify-between align-items-center max-w-300 "
            style={{
                transform: open ? "translateY(-3rem)" : "translateY(5rem)",
            }}
        >
            {message}
            <button type="button" onClick={closeSnackbar} className="outline-none">
                <IconClose className="fill-current text-danger" />
            </button>
        </div>
    );
};

export default Snackbar;
