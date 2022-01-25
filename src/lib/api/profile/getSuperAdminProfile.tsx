import instance from "../instance";
export const getSuperAdminProfile = async () => {
    const url = "/api/users/superadmin";
    const response = await instance.get(url);
    return response.data;
};
