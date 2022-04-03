import React, { useEffect, useRef, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IconCamera } from "../icons";

interface DropzoneProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  remove?: (index?: number | number[] | undefined) => void;
  errors: {
    [x: string]: any;
  };
  index?: number;
  setValue: UseFormSetValue<FieldValues>;
  initial: boolean;
  setInitial: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropZone = ({
  index,
  register,
  errors,
  remove,
  name,
  setValue,
  initial,
  setInitial,
}: DropzoneProps) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState("");

  const openInputFile = () => {
    const input = dropzoneRef.current?.children[0] as HTMLInputElement;
    input?.click();
  };

  const readImage = (e: DragEvent) => {
    setInitial(false);
    const file = e.dataTransfer?.files[0];
    const input = dropzoneRef.current?.children[0] as HTMLInputElement;
    if (!file) return;
    const reader = new FileReader();
    const dt = new DataTransfer();
    dt.items.add(file);
    setValue(index ? `images.${index - 1}.image` : "cover", dt.files);
    input.files = dt.files;
    reader.onload = () => {
      setUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
    setInitial(false);
    const input = dropzoneRef.current?.children[0] as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const removeEvent = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const setStyles = () => {
    setHover(true);
  };
  const removeHover = () => {
    setHover(false);
  };
  useEffect(() => {
    ["drop", "dragleave", "dragenter", "dragover"].forEach((ev) =>
      dropzoneRef.current?.addEventListener(ev, removeEvent)
    );
    ["dragenter", "dragover"].forEach((ev) =>
      dropzoneRef.current?.addEventListener(ev, setStyles)
    );
    ["dragleave", "drop"].forEach((ev) =>
      dropzoneRef.current?.addEventListener(ev, removeHover)
    );
    dropzoneRef.current?.addEventListener("drop", readImage);

    return () => {
      ["drop", "dragleave", "dragenter", "dragover"].forEach((ev) =>
        dropzoneRef.current?.removeEventListener(ev, removeEvent)
      );
      ["dragenter", "dragover"].forEach((ev) =>
        dropzoneRef.current?.removeEventListener(ev, setStyles)
      );
      ["dragleave", "drop"].forEach((ev) =>
        dropzoneRef.current?.removeEventListener(ev, removeHover)
      );
      dropzoneRef.current?.removeEventListener("drop", readImage);
    };
  }, []);
  return (
    <>
      <div
        className="border-2 border-black min-h-450 cursor-pointer border-dashed rounded-md flex items-center justify-center flex-col max-h-800"
        onClick={openInputFile}
        ref={dropzoneRef}
        style={{
          border: hover ? "2px solid #06a800" : "2px dashed #000000",
        }}
      >
        <input
          type="file"
          hidden
          className="inputFile"
          onInput={handleImage}
          {...register(name, {
            required: {
              value: true,
              message:
                name !== "cover" ? "Insert a image" : "Please choose a cover",
            },
            validate: {
              maxSize: (val) => {
                if (val[0].size > 6000000) {
                  return "Max size is 6M";
                }
                return true;
              },
            },
          })}
        />
        {!initial && url ? (
          <img
            src={url}
            alt=""
            className="object-contain block h-full w-full"
          />
        ) : (
          <>
            <IconCamera className="w-20" />
            <span>Drag your image</span>
          </>
        )}
      </div>
      {remove && index && (
        <button
          type="button"
          className="shadow-xl py-3 hover:bg-hover transition-all rounded-md"
          onClick={() => {
            console.log(index - 1);
            remove(index - 1);
          }}
        >
          Delete Field
        </button>
      )}
      {!index && errors.cover ? (
        <p className="font-bold text-danger">{errors.cover.message}</p>
      ) : null}
      {index && errors?.images?.[index - 1] ? (
        <p className="font-bold text-danger">
          {errors?.images[index - 1]?.image.message}
        </p>
      ) : null}
    </>
  );
};

export default DropZone;
