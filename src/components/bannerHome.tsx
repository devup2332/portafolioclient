import React from "react";
import { useGlobal } from "../providers/GlobalProviders";
import { BannerVector } from "./vectors";

const BannerHome = () => {
    const { user } = useGlobal();
    return (
        <div className="lg:bg-white h-screen lg:max-h-90 flex justify-center items-center text-white text-center ">
            <div className="absolute z-0 max-w-1180 lg:flex lg:w-4/5 xl:gap-6">
                <div className="flex flex-col justify-center items-center  lg:items-start gap-8 lg:w-2/4 lg:h-auto ">
                    <h1 className="font-roboto text-5xl lg:text-black lg:text-7xl lg:font-semibold lg:text-left xl:text-8xl">
                        {user?.fullname?.toUpperCase()}
                    </h1>
                    <p className="font-bold font-roboto lg:text-black lg:text-lg xl:text-3xl">Software Developer</p>
                    <button
                        type="button"
                        className="py-3 px-5 hover:shadow-xl font-robotoMono bg-secondary rounded-lg w-48 font-bold justify-self-center shadow-sm outline-none  transition-all"
                    >
                        Contact Me
                    </button>
                </div>

                <div className="hidden lg:block lg:bg-primary lg:h-full lg:w-2/4 lg:flex lg:items-center lg:justify-center">
                    <BannerVector className="w-3/4" />
                </div>
            </div>
            <div className="hidden lg:block lg:bg-white h-full w-2/4 "></div>
            <div className="bg-primary h-full w-full lg:w-2/4 lg:rounded-bl-3xl"></div>
        </div>
    );
};

export default BannerHome;
