import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IconAdd, IconBack, IconLoading, IconSave } from "../components/icons";
import DropZone from "../components/molecules/dropZone";
import SelectStack from "../components/molecules/selectStack";
import Snackbar from "../components/molecules/snackbar";
import { createProjectRest } from "../lib/api/projects/createProject";
import {
  Option,
  stackOptions as initialStackOptions,
} from "../lib/utils/stackOptions";
import { useGlobal } from "../providers/GlobalProviders";
const CreateNewProjectContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm();
  const [initialSelect, setInitialSelect] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectOptions, setSelectOptions] =
    useState<Option[]>(initialStackOptions);
  const [snackMessage, setSnackMessage] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const { user } = useGlobal();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });
  const createProject = async (data: any) => {
    try {
      setLoading(true);
      console.log("DATA", data);
      await createProjectRest(data, user?.id);

      setSelectOptions(
        selectOptions.map((opt) => {
          return { ...opt, selected: false };
        })
      );
      setLoading(false);
      setInitialSelect(true);
      setOpenSnack(true);
      setSnackMessage("Project created successfully");
      reset({ images: [], stack: "", cover: "", description: "", name: "" });
    } catch (err) {
      setSelectOptions(
        selectOptions.map((opt) => {
          return { ...opt, selected: false };
        })
      );
      setLoading(false);
      setInitialSelect(true);
      setOpenSnack(true);
      setSnackMessage("Server is not responding");
      reset({ images: [], stack: "", cover: "", description: "", name: "" });
    }
  };

  const handleError = (err: any) => {
    console.log(err);
  };

  const addImageInput = () => {
    append({});
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
              initial={initialSelect}
              setInitial={setInitialSelect}
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
              name={`images.${ind}.image`}
              remove={remove}
              index={ind + 1}
              errors={errors}
              setValue={setValue}
              initial={initialSelect}
              setInitial={setInitialSelect}
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
          <div className="grid gap-2">
            <label>Github</label>
            <input
              className="w-full border-2 border-black outline-none rounded-md px-3 py-2 placeholder-black"
              type="text"
              placeholder="Github"
              {...register("github", {
                required: {
                  message: "Github is required",
                  value: true,
                },
              })}
            />
            {errors.github && (
              <p className="text-danger font-bold">{errors.github?.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label>Url</label>
            <input
              className="w-full border-2 border-black outline-none rounded-md px-3 py-2 placeholder-black"
              type="text"
              placeholder="Url"
              {...register("url", {
                required: {
                  message: "Url is required",
                  value: true,
                },
              })}
            />
            {errors.url && (
              <p className="text-danger font-bold">{errors.url?.message}</p>
            )}
          </div>
          <SelectStack
            register={register}
            errors={errors}
            setValue={setValue}
            setSelectOptions={setSelectOptions}
            selectOptions={selectOptions}
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
            disabled={loading}
          >
            {loading ? (
              <IconLoading className="fill-current w-7 animation-loading" />
            ) : (
              <IconSave className="fill-current w-7" />
            )}
            <span>Save</span>
          </button>
        </form>
      </div>
      <Snackbar
        message={snackMessage}
        open={openSnack}
        setOpen={setOpenSnack}
        hideDuration={6000}
      />
    </div>
  );
};

export default CreateNewProjectContainer;
