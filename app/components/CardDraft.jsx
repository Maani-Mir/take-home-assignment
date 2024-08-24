import Link from "next/link";
import React from "react";

import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";

const CardDraft = () => {
  return (
    <div className="mx-5 mt-8 rounded-3xl bg-[#FFF8BC] relative overflow-hidden ">
      <div className="flex flex-row pt-5 pl-5">
        <div className="font-bold text-black">GH</div>
        <div className="font-normal text-slate-800">(Draft)</div>
        <div className="ml-[231px] pt-0.5 text-slate-800">
          <HiOutlineArchiveBoxArrowDown />
        </div>
      </div>
      <div className="flex flex-row pl-5 pt-5">
        <div className="text-slate-800">07/22/24 | 14:48</div>
      </div>
      <div className="mt-4 flex flex-row mb-3">
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-[#2E6FF3] pt-4.5 ml-4 px-3 py-3 font-normal text-center text-[#2E6FF3]"
        >
          Reassessment
        </Link>
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-[#2E6FF3] pt-4.5 ml-4 px-4 py-3 font-normal text-center text-[#2E6FF3]"
        >
          EKG
        </Link>
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-[#2E6FF3] pt-4.5 ml-4 px-5 py-3 font-normal text-center text-[#2E6FF3]"
        >
          Disposition
        </Link>
      </div>
    </div>
  );
};

export default CardDraft;
