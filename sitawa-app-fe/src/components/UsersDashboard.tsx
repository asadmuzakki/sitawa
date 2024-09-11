import { useState, useRef, useEffect } from "react";

import users from "../assets/photos/account-avatar-profile-user-svgrepo-com.png";

const UsersDashboard = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const detailProfileRef = useRef<HTMLDivElement>(null);

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
      <h1 className="mt-10 font-bold text-[16px]">Users</h1>
      <div className=" grid gap-5  max-w-[55rem] grid-cols-3 mt-5 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          return (
            <div className="flex  relative">
              <div className="w-[264px] h-[40px] border border-[#F0F0F0] shadow-sm rounded-md flex justify-between mb-5">
                <div className="flex items-center ml-2 gap-5">
                  <img
                    className="w-[32px] h-[31px] rounded-full"
                    src={users}
                    alt=""
                  />
                  <p className="text-[12px]">Anonymous</p>
                </div>
                <button type="button" onClick={() => setClickedIndex(index)}>
                  <span className="flex items-center mr-2">
                    <svg
                      width="25px"
                      height="25px"
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
              {clickedIndex === index && (
                <div
                  ref={detailProfileRef}
                  className="detailProfile w-[80px] h-[25px]  shadow-xl text-[12px] rounded-md mt-12 absolute top-0 right-0 bg-custom-gradient text-white "
                >
                  <button className="w-[80px] h-[25px]  text-[12px] text-center border-none">
                    Lihat Profile
                  </button>
                </div>
              )}

              <button className="w-[58px] h-[25px] "></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersDashboard;
