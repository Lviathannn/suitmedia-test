"use client";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  title: string;
  label: string;
  options: string[] | number[];
  sort?: string | undefined;
  limit?: string | undefined;
};

export default function SelectFilter({
  title,
  label,
  options,
  sort,
  limit,
}: Props) {
  const [open, setopen] = useState(false);
  const [selected, setselected] = useState(sort || limit || options[0]);
  const router = useRouter();

  const handleUpdateParams = (value: string) => {
    const newPathName = updateSearchParams(title, value);
    router.push(newPathName);
  };

  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="limit">{label}</label>
      <div className="relative">
        <div
          className="px-3 flex gap-5 py-2 border-2 border-gray-300 rounded-full cursor-pointer"
          onClick={() => {
            setopen(!open);
          }}
        >
          <p>{selected}</p>
          <ChevronDown
            className={`${
              open ? "rotate-180" : ""
            } transition-transform duration-300 ease-in-out`}
          />
        </div>
        {open && (
          <div className="absolute top-12 w-full bg-white border-2 border-gray-300 rounded-lg z-20">
            {options.map((option) => (
              <div
                className="px-3 py-2 hover:bg-gray-300 cursor-pointer"
                key={option.toString()}
                onClick={() => {
                  setselected(option);
                  handleUpdateParams(option.toString());
                  setopen(false);
                }}
              >
                <p>{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
