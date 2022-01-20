import SideNavAdmin from "../../components/organism/sidenav-admin";
import ProfileContainer from "../../containers/profileContainer";
import withAuth from "../../hocs/withAuth";
import BaseAdmin from "../../layouts/baseAdmin";

const ProfilePage = () => {
    return (
        <BaseAdmin section="Admin - Profile" sidenav={<SideNavAdmin />}>
            <ProfileContainer />
        </BaseAdmin>
    );
};
export default withAuth(ProfilePage);
