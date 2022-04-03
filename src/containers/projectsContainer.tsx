import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconAdd, IconEdit, IconTrash } from "../components/icons";
import { fetchDeleteProject } from "../redux/projects/actions/deleteProject";
import { fetchProjects } from "../redux/projects/actions/fetchProjects";
import { useAppSelector } from "../redux/store";

const ProjectsContainer = () => {
  const { projects } = useAppSelector((state) => {
    return state.projects;
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const goToCreateProject = () => {
    router.push("createProject");
  };

  const getProjects = async () => {
    try {
      dispatch(fetchProjects());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProject = (id: string) => {
    try {
      dispatch(fetchDeleteProject(id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="m-auto py-10 w-full px-20 2xl:px-36 max-w-1500 font-roboto flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">PROJECTS</h1>
        </div>
        <button
          type="button"
          className="text-white bg-primary flex rounded-md shadow-sm py-1 px-8 items-center gap-3 h-10 hover:bg-white transition-all hover:text-primary"
          onClick={goToCreateProject}
        >
          <IconAdd className="w-7 fill-current" />
          <span>Create New Project</span>
        </button>
      </div>

      <div className="grid gap-16 mt-10 grid-cols-3 h-full overflow-y-scroll p-5 scroll-custom">
        {projects?.map((item, index) => {
          return (
            <div
              className="hover:shadow-sm p-7 rounded-xl transition-all cursor-pointer"
              key={index}
            >
              <img
                className="rounded-md max-h-500"
                src={
                  item.images.filter((img) => img.type_image === "cover")[0]
                    .secure_url
                }
                alt=""
              />
              <div className="flex justify-between mt-5">
                <h2 className="font-bold">{item.name}</h2>
                <div className="flex justify-between text-white items-center gap-3">
                  <button
                    type="button"
                    className="bg-primary  fill-current p-2 rounded-md"
                  >
                    <IconEdit className="w-5 stroke-current" />
                  </button>
                  <button
                    type="button"
                    className="bg-primary  fill-current p-2 rounded-md"
                    onClick={() => deleteProject(item.id)}
                  >
                    <IconTrash className="w-5 stroke-current" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
