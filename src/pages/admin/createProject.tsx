import React from "react";
import SideNavAdmin from "../../components/organism/sidenav-admin";
import CreateNewProjectContainer from "../../containers/createNewProjectContainer";
import BaseAdmin from "../../layouts/baseAdmin";

const CreateProjectPage = () => {
    return (
        <BaseAdmin section="Admin - New Project" sidenav={<SideNavAdmin />}>
            <CreateNewProjectContainer />
        </BaseAdmin>
    );
};
export default CreateProjectPage;
