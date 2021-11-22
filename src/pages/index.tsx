import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import HomeContainer from "../containers/homeContainer";
import Base from "../layouts/base";

const Home: NextPage = () => {
  const [sidenav, setSidenav] = useState(false);
  return (
    <Base header={<Header setSidenav={setSidenav} sidenav={sidenav} />}>
      <HomeContainer setSidenav={setSidenav} sidenav={sidenav} />
    </Base>
  );
};

export default Home;
