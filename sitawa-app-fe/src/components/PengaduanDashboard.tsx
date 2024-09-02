import { useEffect, useState, useRef } from "react";
import users from "../assets/photos/ansel.png";
import { profileBeranda } from "../data/data";

const PengaduanDashboard = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  
  const detailProfileRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailProfileRef.current &&
      !detailProfileRef.current.contains(event.target as Node)
    ) {
      setClickedIndex(null);
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
      <h3 className="font-bold text-[16px] mt-6">Pengaduan Masyarakat</h3>
      <div className="mt-5 flex gap-12">
        {profileBeranda.map((data, index) => {
          return (
            <div key={index} className="flex relative">
              <div className="flex w-[430px] h-[148px] border border-[#F0F0F0] shadow-lg rounded-xl items-center gap-2">
                <img
                  className="ml-2 w-[137px] h-[130px] rounded-full"
                  src={users}
                  alt=""
                />
                <div className="mr-2 h-[137px] w">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-1">
                      <img
                        className="w-[15px] h-[14px] rounded-full"
                        src={users}
                        alt=""
                      />
                      <p>{data.nama}</p>
                    </div>
                    <button
                      className="detail-btn"
                      onClick={() => handleClick(index)}
                      type="button"
                    >
                      <span>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                            fill="#1C274C"
                          />
                          <path
                            d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                            fill="#1C274C"
                          />
                          <path
                            opacity="0.5"
                            d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                            fill="#1C274C"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex gap-4 text-[8px] mb-3">
                    <p>{data.tanggal}</p>
                    <p>{data.jam}</p>
                  </div>
                  <p className="text-[12px]">{data.deskripsi}</p>
                </div>
              </div>
              <div className="w-[63px] h-[55px]"></div>
              {clickedIndex === index && (
                <div
                  ref={detailProfileRef}
                  className="detailProfile w-[80px] h-[55px] shadow-xl text-[12px] rounded-md mt-8 absolute top-0 right-0 mr-4"
                >
                  <button className="h-[50%] w-full bg-custom-gradient rounded-t-md text-white">
                    Komentar
                  </button>
                  <button className="h-[50%] w-full">Hapus</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PengaduanDashboard;
