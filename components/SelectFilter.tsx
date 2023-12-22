"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  label: string;
  options: string[] | number[];
};

export default function SelectFilter({ label, options }: Props) {
  const [open, setopen] = useState(false);
  const [selected, setselected] = useState(options[0]);
  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="limit">{label}</label>
      <div className="relative">
        <div
          className="px-3 flex gap-5 py-2 border-2 border-gray-300 rounded-full"
          onClick={() => {
            setopen(!open);
          }}
        >
          <p>{selected}</p>
          <ChevronDown />
        </div>
        {open && (
          <div className="absolute top-12 w-full bg-white border-2 border-gray-300 rounded-lg">
            {options.map((option) => (
              <div
                className="px-3 py-2 hover:bg-gray-300"
                key={option.toString()}
                onClick={() => {
                  setselected(option);
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
