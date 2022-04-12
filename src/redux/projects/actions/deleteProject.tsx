import { deleteProjectAtion, ProjectsDispatch } from "..";
import instance from "../../../lib/api/instance";
import { RootState } from "../../store";

export const fetchDeleteProject = (id: string) => {
  return async (dispatch: ProjectsDispatch, getState: () => RootState) => {
    await instance.delete(`/api/projects/${id}`);
    const { projects } = getState();
    const newProjects = projects.projects.filter((item) => {
      return item.id !== id;
    });
    dispatch(deleteProjectAtion({ projects: newProjects }));
  };
};
