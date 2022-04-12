import React, { useEffect, useRef, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Option, stackOptions } from "../../lib/utils/stackOptions";
import { IconArrowDown, IconCheck } from "../icons";

interface SelectStackProps {
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
  setValue: UseFormSetValue<FieldValues>;
  selectOptions: Option[];
  setSelectOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

const SelectStack = ({
  register,
  errors,
  setValue,
  selectOptions,
  setSelectOptions,
}: SelectStackProps) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [openSelect, setOpenSelect] = useState(false);
  const addOption = (opt: Option) => {
    const arr = [...selectOptions];
    const ind = arr.findIndex((o) => o.label === opt.label);
    arr[ind].selected = !opt.selected;
    setValue(
      "stack",
      arr.filter((o) => o.selected)
    );
    setSelectOptions(arr);
  };
  const openSelectInput = () => {
    window.addEventListener("click", (e) => {
      if (
        !optionsRef.current?.contains(e.target as Node) &&
        !selectRef.current?.contains(e.target as Node)
      ) {
        setOpenSelect(false);
      }
    });
  };
  useEffect(() => {
    openSelectInput();
  }, []);

  return (
    <div className="relative grid gap-2">
      <label>Stack</label>
      <div
        className="flex justify-between border-2 border-primary rounded-md w-full items-center py-2 px-3 cursor-pointer"
        ref={selectRef}
        onClick={() => setOpenSelect(true)}
      >
        {selectOptions.filter((o) => o.selected).length === 0 ? (
          <p>Please choose a stack</p>
        ) : (
          <div className="flex gap-3 flex-wrap">
            {selectOptions
              .filter((o) => o.selected)
              .map((o, ind) => (
                <span
                  key={ind}
                  className="text-xs bg-primary rounded-lg px-3 py-1 text-white"
                >
                  {o.label}
                </span>
              ))}
          </div>
        )}
        <input
          type="hidden"
          autoComplete="off"
          placeholder="Stack"
          {...register("stack", {
            required: {
              message: "Please select an option",
              value: true,
            },
          })}
        />

        <IconArrowDown
          style={{
            transform: openSelect ? "rotate(180deg)" : "rotate(0deg)",
          }}
          className="text-primary w-7 stroke-current  transition-all"
        />
      </div>
      {errors.stack && (
        <p className="text-danger font-bold">{errors.stack?.message}</p>
      )}

      <div
        style={{
          opacity: openSelect ? 1 : 0,
          visibility: openSelect ? "visible" : "hidden",
          transform: openSelect ? "translateY(50px)" : "translateY(0px)",
        }}
        ref={optionsRef}
        className="w-full group-focus:bg-danger bg-white rounded-md transition-all shadow-2xl max-h-225 overflow-y-scroll opacity-0 absolute top-0 transform translate-y-10 left-0"
      >
        <ul className="list-none">
          {selectOptions.map((opt, index) => {
            return (
              <li
                className="px-5 py-3 hover:bg-card cursor-pointer transition-all flex justify-between"
                onClick={() => addOption(opt)}
                key={index}
              >
                <span>{opt.label}</span>
                {opt.selected ? (
                  <IconCheck className="w-7 fill-current text-success" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectStack;
