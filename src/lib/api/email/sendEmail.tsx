import instance from "../instance";

export const sendEmailRest = async (email: any) => {
  const res = await instance.post("/api/email/send", email);
  return res.data;
};
