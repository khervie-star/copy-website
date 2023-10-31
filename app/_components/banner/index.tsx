"use client";

import { HiMiniXMark } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-secondary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white uppercase font-cardo font-semibold">
          New in the shop: 6-Figure IG! Get $100 off Now thru 11/05
        </p>
        <span className="hidden lg:block" aria-hidden="true">
          &rarr;
        </span>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <HiMiniXMark className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
