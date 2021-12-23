import Head from "next/head";
import withAuth from "../hocs/withAuth";

const AdminPage = () => {
    return (
        <div>
            <Head>
                <title>Drojas - Admin</title>
            </Head>
            <div>dasdas</div>
        </div>
    );
};
export default withAuth(AdminPage);
