import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

const withAuth = (Component: React.FunctionComponent) => {
    return (props: any) => {
        const router = useRouter();
        const [verify, setVerify] = useState(false);
        useEffect(() => {
            const token = localStorage?.getItem("api-token");
            if (!token) {
                setVerify(false);
                router.replace("/login");
                return;
            }
            if (router.pathname === "/admin") {
                setVerify(true);
                router.replace("/admin/dashboard");
                return;
            }
            setVerify(true);
        }, []);
        if (verify) return <Component {...props} />;
        return null;
    };
};

export default withAuth;
