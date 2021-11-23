import React, { useState } from "react";
import About from "../components/about";
import BannerHome from "../components/bannerHome";
import ProjectsHome from "../components/projectsHome";
import SideNav from "../components/sidenav";

export interface HomeContainerProps {
  sidenav: boolean;
  setSidenav: Function;
}

const HomeContainer = ({ sidenav, setSidenav }: HomeContainerProps) => {
  return (
    <div>
      <SideNav setSidenav={setSidenav} sidenav={sidenav} />
      <BannerHome />
      <About />
      <ProjectsHome />
    </div>
  );
};

export default HomeContainer;
