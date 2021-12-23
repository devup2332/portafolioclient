import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconLoading } from "../components/icons";
import Snackbar from "../components/molecules/snackbar";
import { Credentials, loginUser } from "../lib/api/auth/loginUser";

const LoginContainer = () => {
    const [message, setMessage] = useState("");
    const [open, setOpenSnack] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const handleLogin = async (data: Credentials) => {
        try {
            setLoading(true);
            const { token } = await loginUser(data);
            localStorage.setItem("api-token", token);
            router.push("/admin");
            setLoading(false);
        } catch (err: any) {
            const text = err.response.data.message as string;
            setMessage(text);
            setOpenSnack(true);
            setLoading(false);
        }
    };

    const handleErrorLogin = (err: any) => {
        console.log(err);
    };

    return (
        <div className="w-full flex items-center justify-center h-screen bg-primary">
            <div className="w-4/5 py-5 px-4 bg-white rounded-2xl max-w-400 lg:px-10 md:py-10">
                <h1 className="text-center text-3xl font-bold">Login</h1>
                <form className="grid gap-5 mt-5" onSubmit={handleSubmit(handleLogin, handleErrorLogin)}>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full  border-black-transparent border-2 text-base outline-none border-solid rounded-lg py-2 px-2"
                            placeholder="Username"
                            autoComplete="off"
                            {...register("username", {
                                required: {
                                    message: "Username is required",
                                    value: true,
                                },
                            })}
                        />
                        {errors && <h1 className="mt-1 text-xs text-danger font-bold">{errors.username?.message}</h1>}
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            autoComplete="off"
                            className="border-black-transparent border-2 w-full text-base outline-none border-solid rounded-lg py-2 px-2"
                            placeholder="Password"
                            {...register("password", {
                                required: {
                                    message: "Passowrd is required",
                                    value: true,
                                },
                            })}
                        />
                        {errors && <h1 className="mt-1 text-xs text-danger font-bold">{errors.password?.message}</h1>}
                    </div>
                    <button
                        type="submit"
                        className="group justify-self-center bg-primary w-full py-2 flex justify-center gap-2 rounded-lg text-white font-bold outline-none hover:bg-white hover:text-black transition-all shadow-sm"
                    >
                        {loading && (
                            <IconLoading className="fill-current group-hover:text-black transition-all text-white w-7 h-7 animation-loading" />
                        )}
                        Login
                    </button>
                </form>
            </div>
            <Snackbar message={message} open={open} setOpen={setOpenSnack} hideDuration={6000} />
        </div>
    );
};

export default LoginContainer;
