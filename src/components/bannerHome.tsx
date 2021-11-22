import React from "react";

const BannerHome = () => {
  return (
    <div className="bg-primary h-screen flex justify-center items-center text-white text-center ">
      <div className="grid gap-8">
        <h1 className="text-5xl ">DIEGO ROJAS</h1>
        <p className="font-bold">Software Developer</p>
        <button
          type="button"
          className="py-3 px-5 bg-secondary rounded-lg w-48 font-bold justify-self-center shadow-sm outline-none"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
