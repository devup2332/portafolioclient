import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IconAdd, IconBack, IconCamera, IconSave } from "../components/icons";
import StackSelect from "../components/molecules/stackSelec";

const CreateNewProjectContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const createProject = (data: any) => {
    console.log("created proejct", data);
  };

  const checkClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!selectRef.current?.contains(e.target as Node)) {
      setOpenSelect(false);
    }
  };
  return (
    <div
      className="font-roboto py-10 w-full px-20 2xl:px-36 max-w-1500"
      onClick={checkClick}
    >
      <div>
        <button type="button" className="flex gap-5">
          <IconBack className="text-black stroke-current w-7" />
          <span className="font-bold text-2xl">back</span>
        </button>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-20">
        <div className="grid gap-10 ">
          <div className="border-2 border-black min-h-300 border-dashed rounded-md flex items-center justify-center flex-col">
            <IconCamera className="w-20" />
            <span>Drag your image</span>
          </div>

          <button className="bg-primary rounded-md text-white flex items-center justify-center w-full h-12 font-bold gap-2 shadow-sm">
            <IconAdd className="w-7 text-white fill-current" />
            <span>Add Image</span>
          </button>
        </div>

        <form className="grid gap-10" onSubmit={handleSubmit(createProject)}>
          <div className="grid gap-2">
            <input
              className="w-full border-2 border-black outline-none rounded-md px-3 py-2 placeholder-black"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: {
                  message: "Name is required",
                  value: true,
                },
              })}
            />
            {errors.name && <p className="text-danger text-sm font-bold">{errors.name?.message}</p>}
          </div>
          <StackSelect
            register={register}
            open={openSelect}
            reset={reset}
            setOpen={setOpenSelect}
            selectRef={selectRef}
            errors={errors}
          />
          <div className="grid gap-2">
            <textarea
              placeholder="Description"
              className="w-full outline-none border-2 border-black rounded-md px-3 py-2 placeholder-black h-52 resize-none"
              {...register("description", {
                required: {
                  message: "Please enter a description",
                  value: true,
                },
              })}
            />
            {errors.description && <p className="text-danger text-sm font-bold">{errors.description?.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary h-12 text-white rounded-md shadow-sm flex justify-center items-center gap-3 hover:bg-white transition-all hover:text-primary"
          >
            <IconSave className="fill-current w-7" />
            <span>Save</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProjectContainer;
