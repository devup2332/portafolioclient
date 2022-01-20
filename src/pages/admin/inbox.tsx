import React from "react";
import SideNavAdmin from "../../components/organism/sidenav-admin";
import InboxContainer from "../../containers/inboxContainer";
import withAuth from "../../hocs/withAuth";
import BaseAdmin from "../../layouts/baseAdmin";

const InboxPage = () => {
    return (
        <BaseAdmin section="Admin - Inbox" sidenav={<SideNavAdmin />}>
            <InboxContainer />
        </BaseAdmin>
    );
};
export default withAuth(InboxPage);
