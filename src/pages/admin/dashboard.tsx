import Head from "next/head";
import SideNavAdmin from "../../components/organism/sidenav-admin";
import DashboardContainer from "../../containers/dashboardContainer";
import withAuth from "../../hocs/withAuth";
import BaseAdmin from "../../layouts/baseAdmin";

const AdminPage = () => {
    return (
        <BaseAdmin section="Admin - Dashboard" sidenav={<SideNavAdmin />}>
            <DashboardContainer />
        </BaseAdmin>
    );
};
export default withAuth(AdminPage);
