import React from "react";
import AboutVector from "./vectors/aboutVector";

const About = () => {
    const testMessenger = () => {
        window.open(
            "fb-messenger://share?link=" +
                encodeURIComponent("https://google.com") +
                "&app_id=" +
                encodeURIComponent(4091118000987389)
        );
    };
    return (
        <div className="grid justify-center gap-8 w-5/6 m-auto py-16 lg:flex lg:max-w-1180">
            <div className="hidden lg:block lg:w-2/4 about-vector">
                <AboutVector />
            </div>
            <div className="justify-center grid gap-4 lg:w-2/4 lg:flex lg:flex-col lg:justify-center  lg:items-center lg:gap-6">
                <h1 className="text-5xl text-center font-roboto lg:self-end lg:text-7xl xl:text-8xl">ABOUT ME</h1>
                <p className="text-center font-robotoMono text-sm leading-6 lg:text-right lg:leading-10">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                </p>
                <button
                    type="button"
                    onClick={testMessenger}
                    className="rounded-lg  font-robotoMono bg-secondary shadow-sm w-48 px-5 py-3 text-white font-bold justify-self-center hover:shadow-xl transition-all lg:self-end"
                >
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default About;
