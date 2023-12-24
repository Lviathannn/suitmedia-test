"use client";
import { updateSearchParams } from "@/utils/updateSearchParams";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  page: string | undefined;
};

export default function Pagination({ page }: Props) {
  const [active, setactive] = useState(Number(page) || 1);
  const router = useRouter();

  const handleUpdateParams = (value: string | number) => {
    const newPathName = updateSearchParams("page", value);
    router.push(newPathName);
  };

  return (
    <div className="mt-16 w-full flex justify-center items-center">
      <div className="flex gap-1 items-center">
        <button
          disabled={active === 1}
          onClick={() => {
            handleUpdateParams(1);
            setactive(1);
          }}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronsLeftIcon size={25} />
        </button>
        <button
          disabled={active === 1}
          onClick={() => {
            handleUpdateParams(active - 1);
            setactive(active - 1);
          }}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon size={25} />
        </button>
        <div className="flex gap-1 items-center justify-center">
          <button
            onClick={() => {
              handleUpdateParams(1);
              setactive(1);
            }}
            className={`${
              active === 1 ? "bg-primary text-white" : "text-gray-700"
            } px-3 py-1 rounded-lg hover:bg-primary hover:text-white`}
          >
            1
          </button>
          <button
            onClick={() => {
              handleUpdateParams(2);
              setactive(2);
            }}
            className={`${
              active === 2 ? "bg-primary text-white" : "text-gray-700"
            } px-3 py-1 rounded-lg hover:bg-primary hover:text-white`}
          >
            2
          </button>
          <button
            onClick={() => {
              handleUpdateParams(3);
              setactive(3);
            }}
            className={`${
              active === 3 ? "bg-primary text-white" : "text-gray-700"
            } px-3 py-1 rounded-lg hover:bg-primary hover:text-white`}
          >
            3
          </button>
          <button
            onClick={() => {
              handleUpdateParams(4);
              setactive(4);
            }}
            className={`${
              active === 4 ? "bg-primary text-white" : "text-gray-700"
            } px-3 py-1 rounded-lg hover:bg-primary hover:text-white`}
          >
            4
          </button>
          <button
            onClick={() => {
              handleUpdateParams(5);
              setactive(5);
            }}
            className={`${
              active === 5 ? "bg-primary text-white" : "text-gray-700"
            } px-3 py-1 rounded-lg hover:bg-primary hover:text-white`}
          >
            5
          </button>
        </div>
        <button
          disabled={active === 5}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={() => {
            handleUpdateParams(active + 1);
            setactive(active + 1);
          }}
        >
          <ChevronRightIcon size={25} />
        </button>
        <button
          disabled={active === 5}
          onClick={() => {
            handleUpdateParams(5);
            setactive(5);
          }}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronsRightIcon size={25} />
        </button>
      </div>
    </div>
  );
}
