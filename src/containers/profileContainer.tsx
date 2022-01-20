import React from "react";
import { IconLock } from "../components/icons";

const ProfileContainer = () => {
    return (
        <div className="py-10 w-full px-20 2xl:px-36 max-w-1500 font-roboto">
            <div className="flex justify-between w-full">
                <h1 className="text-5xl font-bold font-robotoMono">PROFILE</h1>
                <button
                    type="button"
                    className="bg-primary self-center h-12 items-center gap-5 py-2 px-7 shadow-sm cursor-pointer text-white rounded-xl outline-none flex justify-center hover:bg-white hover:text-black transition-all"
                >
                    <IconLock className="fill-current w-7 " />
                    <span className="block font-bold">Change Password</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileContainer;
