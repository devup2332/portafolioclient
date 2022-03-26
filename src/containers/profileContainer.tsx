import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IconCamera, IconLoading, IconLock, IconSave } from "../components/icons";
import Snackbar from "../components/molecules/snackbar";
import { getSuperAdminProfile } from "../lib/api/profile/getSuperAdminProfile";
import { updateUserProfile } from "../lib/api/profile/updateUserProfile";
import { User } from "../providers/GlobalProviders";

const ProfileContainer = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("Alerta csm");
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const saveProfile = async (profile: any) => {
        try {
            setLoading(true);
            const res = await updateUserProfile(profile);
            setMessage(res.message);
            setOpen(true);
            setLoading(false);
        } catch (err) {
            setMessage("Server is not responding, please try later");
            setOpen(true);
            setLoading(false);
        }
    };

    const loadImageProfile = () => {
        inputFileRef.current?.click();
    };
    const saveImageProfile = () => {
        console.log(inputFileRef.current?.files);
    };
    const getProfile = async () => {
        const response: {
            profile: User;
        } = await getSuperAdminProfile();
        reset({
            email: response.profile.email,
            fullname: response.profile.fullname,
            phone: response.profile.phone,
            username: response.profile.username,
            linkedin: response.profile.links.linkedin,
            github: response.profile.links.github,
            about_me: response.profile.about_me,
        });
    };
    useEffect(() => {
        getProfile();
    }, []);
    return (
        <div className="py-10 m-auto w-full px-20 2xl:px-36 max-w-1500 font-roboto">
            <div className="flex justify-between w-full">
                <h1 className="text-5xl font-bold font-roboto">PROFILE</h1>
                <button
                    type="button"
                    className="bg-primary self-center h-10 items-center gap-5 py-2 px-7 shadow-sm cursor-pointer text-white rounded-md outline-none flex justify-center hover:bg-white hover:text-black transition-all"
                >
                    <IconLock className="fill-current w-7" />
                    <span className="block ">Change Password</span>
                </button>
            </div>

            <div className="flex w-full justify-between mt-24">
                <div
                    className="group cursor-pointer overflow-hidden w-72 h-72 rounded-full relative"
                    onClick={loadImageProfile}
                >
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <input type="file" hidden ref={inputFileRef} onChange={saveImageProfile} />
                    <div className="absolute w-full h-full bg-black-transparent top-0 left-0 flex justify-center items-center flex-col transition-all opacity-0 group-hover:opacity-100">
                        <IconCamera className="text-white fill-current w-28" />
                        <span className="block text-white font-bold text-2xl">Upload your photo</span>
                    </div>
                </div>

                <form className="w-7/12 grid grid-cols-2 gap-y-5 gap-x-10 " onSubmit={handleSubmit(saveProfile)}>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            type="text"
                            placeholder="Full Name"
                            {...register("fullname", {
                                required: {
                                    message: `Full Name is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors.fullname && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.fullname?.message}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required: {
                                    message: `Email is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.email?.message}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            type="text"
                            placeholder="Phone"
                            {...register("phone", {
                                required: {
                                    message: `Phone is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.phone?.message}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            placeholder="Username"
                            {...register("username", {
                                required: {
                                    message: `Username is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.username?.message}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            placeholder="Linkedin"
                            {...register("linkedin", {
                                required: {
                                    message: `Linkedin is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.linkedin?.message}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <input
                            className="border-2 block h-11 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            placeholder="Github"
                            {...register("github", {
                                required: {
                                    message: `Github is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.github?.message}</p>
                            </>
                        )}
                    </div>
                    <div className="col-start-1 col-end-3">
                        <textarea
                            className="border-2 block h-48 font-roboto w-full border-black rounded-md py-2 placeholder-black px-5 outline-none"
                            placeholder="About me"
                            {...register("about_me", {
                                required: {
                                    message: `About me is required`,
                                    value: true,
                                },
                            })}
                        />
                        {errors && (
                            <>
                                <p className="mt-1 text-xs text-danger font-bold">{errors.about_me?.message}</p>
                            </>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="col-start-1 gap-3 col-end-3 flex justify-center items-center h-11 text-white submit w-full block bg-primary rounded-md outline-none shadow-sm hover:bg-white transition-all hover:text-primary"
                    >
                        {loading ? (
                            <IconLoading className="fill-current w-7 animation-loading" />
                        ) : (
                            <IconSave className="fill-current w-7" />
                        )}

                        <span className="font-bold">Save</span>
                    </button>
                </form>
            </div>
            <Snackbar message={message} open={open} setOpen={setOpen} hideDuration={6000} />
        </div>
    );
};

export default ProfileContainer;
