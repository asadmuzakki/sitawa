import React from "react";
import TabelPengaduan from "./TabelPengaduan";

const PengaduanMasyarakat = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-6 ">
        <h3 className="font-bold text-[16px]">Pengaduan Masyarakat</h3>
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
      <TabelPengaduan/>
    </div>
  );
};

export default PengaduanMasyarakat;
