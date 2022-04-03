import { getMainProfileAction, MainProfileDispatch } from "..";
import instance from "../../../lib/api/instance";

export const fetchMainProfile = () => {
  return async (dispath: MainProfileDispatch) => {
    const res = await instance.get("/api/profile/main");
    dispath(getMainProfileAction({ mainProfile: res.data.profile }));
  };
};
