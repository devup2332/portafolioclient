import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IconAdd, IconBack, IconSave } from "../components/icons";
import DropZone from "../components/molecules/dropZone";
import SelectStack from "../components/molecules/selectStack";
import { createProjectRest } from "../lib/api/projects/createProject";
const CreateNewProjectContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });
  const createProject = async (data: any) => {
    const res = await createProjectRest(data);
    console.log(res);
    reset();
    reset({ images: [], stack: "" });
  };

  const handleError = (err: any) => {
    console.log(err);
  };

  const addImageInput = () => {
    append({ name: "" });
  };

  useEffect(() => {}, []);

  return (
    <div className="font-roboto py-10 w-full px-20 2xl:px-36 max-w-1500 m-auto">
      <div>
        <button type="button" className="flex gap-5">
          <IconBack className="text-black stroke-current w-7" />
          <span className="font-bold text-2xl">back</span>
        </button>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-20 ">
        <div className="grid gap-5">
          <div className="grid gap-5">
            <DropZone
              name="cover"
              register={register}
              errors={errors}
              setValue={setValue}
            />

            <button
              onClick={addImageInput}
              className="bg-primary rounded-md text-white flex items-center justify-center w-full h-12 font-bold gap-2 shadow-sm hover:bg-white transition-all hover:text-primary"
            >
              <IconAdd className="w-7 fill-current" />
              <span>Add Image</span>
            </button>
          </div>
          {fields.map((input, ind) => (
            <DropZone
              register={register}
              key={input?.id}
              name={`images.${ind}.name`}
              remove={remove}
              index={ind + 1}
              errors={errors}
              setValue={setValue}
            />
          ))}
        </div>

        <form
          className="grid gap-10 group max-h-565"
          onSubmit={handleSubmit(createProject, handleError)}
        >
          <div className="grid gap-2">
            <label>Name</label>
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
            {errors.name && (
              <p className="text-danger font-bold">{errors.name?.message}</p>
            )}
          </div>

          <SelectStack
            register={register}
            errors={errors}
            setValue={setValue}
          />

          <div className="grid gap-2">
            <label>Description</label>
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
            {errors.description && (
              <p className="text-danger font-bold">
                {errors.description?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary h-12 text-white rounded-md shadow-sm flex justify-center items-center gap-3 hover:bg-white hover:text-primary transition-all"
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
