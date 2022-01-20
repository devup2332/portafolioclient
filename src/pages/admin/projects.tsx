import React from "react";
import SideNavAdmin from "../../components/organism/sidenav-admin";
import ProjectsContainer from "../../containers/projectsContainer";
import withAuth from "../../hocs/withAuth";
import BaseAdmin from "../../layouts/baseAdmin";

const ProjectsPage = () => {
    return (
        <BaseAdmin section="Admin - Projects" sidenav={<SideNavAdmin />}>
            <ProjectsContainer />
        </BaseAdmin>
    );
};
export default withAuth(ProjectsPage);
