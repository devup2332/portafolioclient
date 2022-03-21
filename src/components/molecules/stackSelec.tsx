import React, { useState } from "react";
import { FieldValues, UseFormRegister, UseFormReset } from "react-hook-form";
import { optionsStack } from "../../lib/utils/optionsStack";
import { IconCheck } from "../icons";

interface StackSelectProps {
  register: UseFormRegister<FieldValues>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectRef: React.RefObject<HTMLDivElement>;
  reset: UseFormReset<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

const StackSelect = ({
  register,
  open,
  setOpen,
  reset,
  selectRef,
  errors,
}: StackSelectProps) => {
  const [options, setOptions] = useState(optionsStack);

  const setOption = (opt: { label: string; selected: boolean }) => {
    const arr = [...options];
    const ind = arr.findIndex((o) => {
      return o.label === opt.label;
    });
    arr[ind].selected = !opt.selected;
    setOptions(arr);
    reset({
      stack: arr.filter((i) => i.selected),
    });
  };

  const openSelect = () => {
    setOpen(true);
  };
  return (
    <div className="relative grid gap-2" ref={selectRef} onClick={openSelect}>
      <div className="w-full border-2 border-black outline-none rounded-md px-3 py-2 placeholder-black cursor-pointer flex gap-3">
        <input
          type="hidden"
          {...register("stack", {
            required: {
              value: true,
              message: "Please choose an stack item",
            },
          })}
        />
        {options.filter((opt) => {
          return opt.selected === true;
        }).length < 1 ? (
          <p>Select a stack</p>
        ) : null}
        {options.map((opt, ind) => {
          if (opt.selected)
            return (
              <span
                key={ind}
                className="text-xs rounded-md bg-primary px-3 py-1 text-white"
              >
                {opt.label}
              </span>
            );
          return null;
        })}
      </div>
      {errors?.stack && (
        <p className="text-danger text-sm font-bold">{errors.stack?.message}</p>
      )}
      <ul
        className="shadow-sm rounded-md absolute transition-all top-0 left-0 w-full z-10 bg-white"
        style={{
          transform: open ? "translateY(40px)" : "translateY(0px)",
          opacity: open ? "1" : "0",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {options.map((opt, ind) => {
          return (
            <li
              key={ind}
              className="py-4 px-5 hover:bg-hover transition-all cursor-pointer flex justify-between items-center"
              onClick={() => setOption(opt)}
            >
              {opt.label}
              {opt.selected && (
                <IconCheck className="text-success fill-current w-5" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackSelect;
