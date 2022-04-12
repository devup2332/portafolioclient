import instance from "../instance";

export const getProjectsRest = async () => {
  const res = await instance.get("/api/projects");

  return res.data;
};
