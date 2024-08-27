import { useState } from "react";
import PengaduanMasyarakat from "../../components/PengaduanMasyarakat";
import PopUp from "../../components/PopUp";

import PengaduanSidebar from "../../components/sidebarComponents/PengaduanSidebar";

const pengaduanmasyarakat = () => {
  return (
    <div className="relative ">
      <div className="hidden">
        <PopUp />
      </div>
      <div className="flex overflow-y-hidden">
        <PengaduanSidebar bg={"bg-custom-gradient"} />
        <div className="h-[100vh] overflow-auto   w-full  pt-36 flex justify-center scrollbar-hide">
          <div className=" w-[85%]">
            <div className="flex justify-between text-[12px] font-bold text-[#858585]">
              <div className="flex ">
                <p className="border-r-[1px] border-[#858585] pr-2">Admin</p>
                <p className="border-l-[1px] border-[#858585] pl-2">
                  Dashboard
                </p>
              </div>
              <div className="flex">
                <p className="border-r-[1px] border-[#858585] pr-2">Accounts</p>
                <p className="border-l-[1px] border-[#858585] pl-2">
                  Amylya Nurul
                </p>
              </div>
            </div>
            <PengaduanMasyarakat />
            <div className="pb-10"></div>
          </div>
        </div>
      </div>
      <div className="tabel-pengaduan "></div>
    </div>
  );
};

export default pengaduanmasyarakat;
