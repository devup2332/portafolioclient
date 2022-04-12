import { AxiosResponse } from "axios";
import instance from "../instance";

interface Data {
  cover: FileList;
  description: string;
  images: { image: FileList }[];
  name: string;
  stack: [
    {
      label: string;
      selected: boolean;
    }
  ];
}

export const createProjectRest = async (data: Data, user_id?: string) => {
  const fd = new FormData();
  const requests: Promise<AxiosResponse<any, any>>[] = [];
  const res = await instance.post("/api/projects", { ...data, user_id });
  fd.append("image", data.cover[0]);
  fd.append("type", "cover");
  fd.append("project_id", res.data.project_id);
  requests.push(instance.post("/api/projects/upload-image", fd));
  data.images.forEach((img) => {
    const formData = new FormData();
    formData.append("image", img.image[0]);
    formData.append("type", "image");
    formData.append("project_id", res.data.project_id);
    requests.push(instance.post("/api/projects/upload-image", formData));
  });
  const responses = await Promise.all(requests);
  return responses;
};
