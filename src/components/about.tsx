import axios from "axios";
import React from "react";
import { useAppSelector } from "../redux/store";
import AboutVector from "./vectors/aboutVector";

const About = () => {
  const { mainProfile } = useAppSelector((state) => state.mainProfile);
  const downloadPdf = async () => {
    const res = await axios.get(mainProfile.cv as string, {
      responseType: "blob",
    });
    const blob = new Blob([res.data]);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "CV-DIEGO-ROJAS.pdf";
    a.type = "hidden";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return (
    <div id="about_home_section" className="grid justify-center gap-8 w-5/6 m-auto py-16 lg:flex lg:max-w-1180">
      <div className="hidden lg:block lg:w-2/4 about-vector">
        <AboutVector />
      </div>
      <div className="justify-center grid gap-4 lg:w-2/4 lg:flex lg:flex-col lg:justify-center  lg:items-center lg:gap-6">
        <h1 className="text-5xl text-center font-roboto lg:self-end lg:text-7xl xl:text-8xl">
          ABOUT ME
        </h1>
        <p className="text-center font-robotoMono text-sm leading-6 lg:text-right lg:leading-10">
          {mainProfile?.about_me}
        </p>
        <button
          type="button"
          onClick={downloadPdf}
          className="rounded-lg  font-robotoMono bg-secondary shadow-sm w-48 px-5 py-3 text-white font-bold justify-self-center hover:shadow-xl transition-all lg:self-end"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
