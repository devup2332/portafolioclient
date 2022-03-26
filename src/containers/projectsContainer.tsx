import { useRouter } from "next/dist/client/router";
import React from "react";
import { IconAdd, IconEdit, IconTrash } from "../components/icons";

const ProjectsContainer = () => {
    const router = useRouter();
    const goToCreateProject = () => {
        router.push("createProject");
    };
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                    return (
                        <div className="hover:shadow-sm p-7 rounded-xl transition-all cursor-pointer" key={index}>
                            <img
                                className="rounded-md max-h-500"
                                src="https://cdn.dribbble.com/users/1963775/screenshots/17288603/media/fdea3c37d2a7a96f74f4bb97f5fede0d.png?compress=1&resize=1200x900&vertical=top"
                                alt=""
                            />
                            <div className="flex justify-between mt-5">
                                <h2 className="font-bold">Mordigan</h2>
                                <div className="flex justify-between text-white items-center gap-3">
                                    <button type="button" className="bg-primary  fill-current p-2 rounded-md">
                                        <IconEdit className="w-5 stroke-current" />
                                    </button>
                                    <button type="button" className="bg-primary  fill-current p-2 rounded-md">
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
