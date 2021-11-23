import React from "react";

const About = () => {
  return (
    <div className="grid justify-center gap-8 w-5/6 m-auto py-16">
      <h1 className="text-5xl text-center">ABOUT ME</h1>
      <p className="text-center text-font-mono text-sm leading-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae{" "}
      </p>
      <button
        type="button"
        className="rounded-lg bg-secondary shadow-sm w-48 px-5 py-3 text-white font-bold justify-self-center hover:shadow-xl transition-all"
      >
        Download CV
      </button>
    </div>
  );
};

export default About;
