import { useContext, useEffect, useRef, useState } from "react";
import PopUp from "../../components/PopUp";
import { GlobalContext } from "../../GlobalContext";
import Navbar from "../../components/Navbar";
import HasilProduksiSidebar from "../../components/sidebarComponents/HasilProduksiSidebar";
import { year } from "../../data/data";
import TabelProduksi from "../../components/SuperAdminComponents/TabelProduksi";

const hasilProduksi = () => {
  const [showYear, setShowYear] = useState<boolean>(false);

  const context = useContext(GlobalContext);
  if (!context) {
    console.error("Global context not found");
    return; // or throw an error, depending on your use case
  }
  const { state, setState } = context;

  const choiseYear = (year: string) => {
    setShowYear(!showYear);
    setState((prevState) => {
      return {
        ...prevState,
        yearChoiceed: year,
      };
    });
    console.log(state.yearChoiceed);
  };
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowYear(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div className="relative ">
        <div className="flex overflow-y-hidden">
          <HasilProduksiSidebar bg={"bg-custom-gradient"} />
          <div className="h-[100vh] overflow-auto   w-full  pt-36 flex justify-center scrollbar-hide">
            <div className=" w-[85%]">
              <div className="flex justify-between text-[12px] font-bold text-[#858585]">
                <div className="flex ">
                  <p className="border-r-[1px] border-[#858585] pr-2">Admin</p>
                  <p className="border-l-[1px] border-[#858585] pl-2">
                    Hasil Produksi
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
                  <h3 className="font-bold text-[16px]">Hasil Produksi</h3>
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
                    <div className=" w-32 relative">
                      <button
                        onClick={() => setShowYear(!showYear)}
                        type="button"
                        className="w-[100px] h-[42px]  rounded-full bg-custom-gradient flex items-center justify-center gap-3"
                      >
                        <span>
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H15V0M14 11H9V16H14V11Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <p className="text-[10px] text-white">Filter</p>
                      </button>
                      <div
                        ref={ref}
                        className={`mt-12 absolute top-0 right-0 mr-1 bg-white z-[999999] ${
                          showYear ? "block" : "hidden"
                        }`}
                      >
                        <div className="scrollbar-hide max-w-24 h-40 border rounded-lg overflow-auto">
                          {year.map((data, index) => {
                            return (
                              <div
                                onClick={() => choiseYear(data.year)}
                                key={index}
                                className={`group w-24 h-8 border-b flex justify-center items-center text-[12px] cursor-pointer hover:bg-custom-gradient ${
                                  index === year.length - 1 ? "border-none" : ""
                                }`}
                              >
                                <p className="group-hover:text-white">
                                  {data.year}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <TabelProduksi />
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

export default hasilProduksi;
