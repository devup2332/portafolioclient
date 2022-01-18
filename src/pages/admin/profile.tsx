
import SideNavAdmin from "../../components/organism/sidenav-admin";
import ProfileContainer from "../../containers/profileContainer";
import withAuth from "../../hocs/withAuth";
import BaseAdmin from "../../layouts/baseAdmin";

const ProfilePage = () => {
    return <BaseAdmin section={<ProfileContainer />} sidenav={<SideNavAdmin />} />;
};
export default withAuth(ProfilePage);
