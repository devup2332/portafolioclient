import instance from "../instance";

export const updateUserProfile = async (data: any) => {
    const profile = {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        links: {
            linkedin: data.linkedin,
            github: data.github,
        },
        about_me: data.about_me,
    };
    const response = await instance.put("/api/users", profile);
    return response.data;
};
