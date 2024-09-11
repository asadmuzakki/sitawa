import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NavKecamatanComp from "../../components/perangkatKecamatanComp/NavKecamatanComp";
import FormHasilProduksi from "../../components/perangkatKecamatanComp/FormHasilProduksi";
import { GlobalContext } from "../../GlobalContext";

const perangkatKecamatan = () => {
  const context = useContext(GlobalContext);
  if(!context) {
    throw new Error("Global context not found");
  }
  const {state} = context
  return (
    <div className="relative">
      <Navbar />
      <div className="relative ">
        <div className="flex overflow-y-hidden">
          <NavKecamatanComp bg={"bg-custom-gradient"} />
          <div className="h-[100vh] overflow-auto relative w-full  pt-36 flex justify-center scrollbar-hide ">
            <div className={`w-full h-full absolute flex justify-center items-center ${state.loadingProduksi ? "block" : "hidden"}`}>
              <div className="loader-produksi"></div>
            </div>
            <div className=" w-[85%]">
              <div className="flex justify-between text-[12px] font-bold text-[#858585]">
                <div className="flex ">
                  <p className="border-r-[1px] border-[#858585] pr-2">Admin</p>
                  <p className="border-l-[1px] border-[#858585] pl-2">
                    Dashboard
                  </p>
                </div>
                <div className="flex">
                  <p className="border-r-[1px] border-[#858585] pr-2">
                    Accounts
                  </p>
                  <p className="border-l-[1px] border-[#858585] pl-2">
                    Amylya Nurul
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mt-6 ">
                  <h3 className="font-bold text-[16px]">
                    Pengaduan Masyarakat
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-[216px] h-[40px] border border-[#06D001] rounded-full flex justify-between items-center">
                      <span className="flex items-center ml-5">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.80357 12.1429C10.0088 12.1429 12.6071 9.64844 12.6071 6.57143C12.6071 3.49441 10.0088 1 6.80357 1C3.59835 1 1 3.49441 1 6.57143C1 9.64844 3.59835 12.1429 6.80357 12.1429Z"
                            stroke="#858585"
                          />
                          <path
                            d="M11.3174 10.9048L14.5415 14"
                            stroke="#858585"
                            stroke-linecap="square"
                          />
                        </svg>
                      </span>
                      <input
                        className="w-[70%] mr-5  outline-none"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <FormHasilProduksi />
              </div>
              <div className="pb-10"></div>
            </div>
          </div>
        </div>
        <div className="tabel-pengaduan "></div>
      </div>
    </div>
  );
};

export default perangkatKecamatan;
