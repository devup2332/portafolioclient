import { getMainProfileAction, MainProfileDispatch } from "..";
import instance from "../../../lib/api/instance";
import { RootState } from "../../store";

export const fetchUpdateProfile = (data: any) => {
  return async (dispath: MainProfileDispatch, getState: () => RootState) => {
    const { mainProfile } = getState();
    const profile = {
      username: data.username,
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      links: {
        linkedin: data.linkedin,
        github: data.github,
      },
      about_me: data.about_me,
    };
    await instance.put("/api/users", profile);
    dispath(
      getMainProfileAction({
        mainProfile: {
          ...mainProfile,
          username: profile.username,
          fullname: profile.fullname,
          email: profile.email,
          phone: profile.phone,
          links: profile.links,
          about_me: profile.about_me,
        },
      })
    );
  };
};
