import Head from "next/head";
import LoginContainer from "../containers/loginContainer";

const LoginPage = () => {
    return (
        <div>
            <Head>
                <title>Drojas - Login</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <LoginContainer />
        </div>
    );
};

export default LoginPage;
