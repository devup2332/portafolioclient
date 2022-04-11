import { MainProfileDispatch, uploadCvAction } from "..";
import instance from "../../../lib/api/instance";
import { RootState } from "../../store";

export const fetchUploadCV = (file: File) => {
  return async (dispath: MainProfileDispatch, getState: () => RootState) => {
    const { mainProfile } = getState();
    const fd = new FormData();
    fd.append("file", file);
    const res = await instance.post("/api/users/uploadcv", fd);
    dispath(
      uploadCvAction({ mainProfile: { ...mainProfile, cv: res.data.url } })
    );
  };
};
