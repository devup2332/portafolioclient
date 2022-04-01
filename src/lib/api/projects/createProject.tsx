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

export const createProjectRest = async (data: Data) => {
  const fd = new FormData();
  const requests: Promise<AxiosResponse<any, any>>[] = [];
  fd.append("image", data.cover[0]);
  data.images.forEach((img) => {
    requests.push(instance.post("/api/projects/upload-image", fd));
    const formData = new FormData();
    formData.append("image", img.image[0]);
    requests.push(instance.post("/api/projects/upload-image", formData));
  });

  const responses = await Promise.all(requests);

  // fd.append("description", data.description);
  // fd.append("name", data.name);
  // data.stack.forEach((stack, ind) => {
  //   fd.append(`stack_${ind}`, stack.label);
  // });
  // data.images?.forEach((img, ind) => {
  //   fd.append(`image_${ind}`, img.image[ind]);
  // });
  return responses;
};
