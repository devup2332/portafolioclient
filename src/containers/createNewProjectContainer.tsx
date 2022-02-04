import { create } from "domain";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IconAdd, IconArrowDown, IconBack, IconCamera, IconCheck, IconSave } from "../components/icons";

interface Option {
    label: string;
    selected: boolean;
    icon?: JSX.Element;
}

const options: Option[] = [
    {
        label: "React",
        selected: false,
        icon: <IconSave />,
    },
    {
        label: "Angular",
        selected: false,
    },
    {
        label: "Vue",
        selected: false,
    },
    {
        label: "Express",
        selected: false,
    },
    {
        label: "Nodejs",
        selected: false,
    },
    {
        label: "Next",
        selected: false,
    },
    {
        label: "Tailwind",
        selected: false,
    },
    {
        label: "Material UI",
        selected: false,
    },
];

const CreateNewProjectContainer = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const [openSelect, setOpenSelect] = useState(false);
    const [selectOptions, setSelectOptions] = useState<Option[]>(options);
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    const openSelectInput = () => {
        mainRef.current?.addEventListener("click", (e) => {
            if (!optionsRef.current?.contains(e.target as Node) && !selectRef.current?.contains(e.target as Node)) {
                console.log("close");
            }
        });
        setOpenSelect(!openSelect);
    };

    const createProject = (data: any) => {
        console.log(data);
    };

    const addOption = (opt: Option) => {
        const list = [...selectOptions];
        const i = list.findIndex((item) => {
            return item.label === opt.label;
        });
        let strings: string[] = [];
        if (opt.selected === true) {
            console.log("removed");
            list[i].selected = false;
            list.forEach((item) => {
                item.selected && strings.push(item.label);
            });

            reset({
                stack: strings.join(" , "),
            });
            setSelectOptions(list);
            return;
        }
        list[i].selected = true;
        list.forEach((item) => {
            item.selected && strings.push(item.label);
        });

        reset({
            stack: strings.join(" , "),
        });
        setSelectOptions(list);
    };
    return (
        <div className="font-roboto py-10 w-full px-20 2xl:px-36 max-w-1500" ref={mainRef}>
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

                    <button className="bg-primary rounded-md text-white flex items-center justify-center w-full h-12 font-bold gap-2 shadow-sm hover:bg-white transition-all hover:text-primary">
                        <IconAdd className="w-7 fill-current" />
                        <span>Add Image</span>
                    </button>
                </div>

                <form className="grid gap-10 grup" onSubmit={handleSubmit(createProject)}>
                    <div>
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
                        {errors.name && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="relative ">
                        <div
                            className="flex justify-between border-2 border-primary rounded-md w-full items-center  px-3 cursor-pointer"
                            ref={selectRef}
                            onClick={openSelectInput}
                        >
                            <input
                                type="text"
                                className="outline-none w-full py-2 placeholder-black cursor-pointer"
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
                            {errors.name && <p>{errors.name?.message}</p>}
                        </div>
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

                    <div className="flex flex-wrap gap-5">
                        {selectOptions.map((opt, index) => {
                            return (
                                opt.selected && (
                                    <span className="bg-primary text-white rounded-xl px-3 text-xs" key={index}>
                                        {opt.label}
                                    </span>
                                )
                            );
                        })}
                    </div>

                    <div>
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
                        {errors.name && <p>{errors.name?.message}</p>}
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
