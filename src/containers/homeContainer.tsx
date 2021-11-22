import React, { useState } from "react";
import BannerHome from "../components/bannerHome";
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
    </div>
  );
};

export default HomeContainer;
