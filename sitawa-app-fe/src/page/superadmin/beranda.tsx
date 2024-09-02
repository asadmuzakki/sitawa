import StatistikPanen from "../../components/StatistikPanen";
import PengaduanDashboard from "../../components/PengaduanDashboard";
import UsersDashboard from "../../components/UsersDashboard";
import DashboardSidebar from "../../components/sidebarComponents/DashboardSidebar";
import Navbar from "../../components/Navbar";
import ExitPopup from "../../components/SuperAdminComponents/ExitPopUp";
import { GlobalContext } from "../../GlobalContext";
import { useContext } from "react";

const beranda = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("context not found");
  }
  const { state } = context;
  return (
    <div className="relative">
      <div
        className={` w-full h-[100vh] absolute   ${
          state.actionLogOut ? "bg-black opacity-50 z-20" : ""
        }`}
      ></div>
      <Navbar />
      <div className="relative">
        <div className="">
          <ExitPopup />
        </div>
        <div className="flex overflow-y-hidden">
          <DashboardSidebar bg={"bg-custom-gradient"} />
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
                  <p className="border-r-[1px] border-[#858585] pr-2">
                    Accounts
                  </p>
                  <p className="border-l-[1px] border-[#858585] pl-2">
                    Muhammad Muayyadin
                  </p>
                </div>
              </div>

              <PengaduanDashboard />
              <UsersDashboard />
              <div className="pb-10">
                <h1 className="mt-5 font-bold text-[16px]">Hasil Produksi</h1>
                <div className="h-[25rem] mt-7 w-[1022px] border border-[#F0F0F0] shadow-md rounded-xl  mb-10">
                  <div className="flex justify-between  h-10 items-center mx-10">
                    <p className="font-bold">
                      Statistik Panen Kabupaten Sumbawa
                    </p>
                    <div className="flex gap-2">
                      <p>2024</p>
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
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="bar-chart ">
                    <StatistikPanen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default beranda;
