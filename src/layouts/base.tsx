import React, { ReactElement, useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { fetchMainProfile } from "../redux/mainProfile/actions/fetchMainProfile";

export interface BaseProps {
  header: ReactElement;
  children: ReactElement;
  snackbar?: ReactElement;
  section?: string;
}
const Base = ({ header, section, children }: BaseProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainProfile());
  }, []);
  return (
    <div>
      <Head>
        <title>Drojas - {section}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {header}
      <div className="">{children}</div>
    </div>
  );
};

export default Base;
