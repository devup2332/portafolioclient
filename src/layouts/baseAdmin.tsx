import React, { ReactElement, useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { getMainProfileAction } from "../redux/mainProfile";
import { fetchMainProfile } from "../redux/mainProfile/actions/fetchMainProfile";

export interface SidenavAdminProps {
  sidenav: ReactElement;
  section?: string;
  children?: ReactElement;
}

const BaseAdmin = ({ sidenav, section, children }: SidenavAdminProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainProfile());
  }, []);
  return (
    <>
      <Head>
        <title>{section}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen">
        {sidenav && sidenav}
        <div className="w-full overflow-y-auto">
          {children ? children : null}
        </div>
      </div>
    </>
  );
};

export default BaseAdmin;
