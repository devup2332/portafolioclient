import axios from "axios";
import instance from "../instance";

interface Data {
  cover: FileList;
  description: string;
  images: File[];
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
  fd.append("cover", data.cover[0]);
  fd.append("description", data.description);
  fd.append("name", data.name);
  data.stack.forEach((stack, ind) => {
    fd.append(`stack_${ind}`, stack.label);
  });
  data.images.forEach((img, ind) => {
    fd.append(`image_${ind}`, img);
  });

  const res = await instance.post("/api/projects", fd);
  return res.data;
};
