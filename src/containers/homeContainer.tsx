import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../components/about";
import BannerHome from "../components/bannerHome";
import ContactHome from "../components/contactHome";
import FooterHome from "../components/footerHome";
import ProjectsHome from "../components/projectsHome";
import SideNav from "../components/sidenav";
import { fetchMainProfile } from "../redux/mainProfile/actions/fetchMainProfile";

export interface HomeContainerProps {
  sidenav: boolean;
  setSidenav: Function;
}

const HomeContainer = ({ sidenav, setSidenav }: HomeContainerProps) => {
  const dispath = useDispatch();
  const getMainProfile = () => {
    dispath(fetchMainProfile());
  };

  useEffect(() => {
    getMainProfile();
  }, []);
  return (
    <div className="overflow-hidden">
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
