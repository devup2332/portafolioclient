import React, { useState } from "react";
import About from "../components/about";
import BannerHome from "../components/bannerHome";
import ContactHome from "../components/contactHome";
import FooterHome from "../components/footerHome";
import ProjectsHome from "../components/projectsHome";
import SideNav from "../components/sidenav";

export interface HomeContainerProps {
  sidenav: boolean;
  setSidenav: Function;
}

const HomeContainer = ({ sidenav, setSidenav }: HomeContainerProps) => {
  return (
    <div className='overflow-hidden'>
      <SideNav setSidenav={setSidenav} sidenav={sidenav} />
      <BannerHome />
      <About />
      <ProjectsHome />
      <ContactHome />
      <FooterHome />
    </div>
  );
};

export default HomeContainer;
