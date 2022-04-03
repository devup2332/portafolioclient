import { getProjectsAction, ProjectsDispatch } from "..";
import instance from "../../../lib/api/instance";

export const fetchProjects = () => {
  return async (dispatch: ProjectsDispatch) => {
    const res = await instance.get("/api/projects");
    dispatch(getProjectsAction(res.data.projects));
  };
};
