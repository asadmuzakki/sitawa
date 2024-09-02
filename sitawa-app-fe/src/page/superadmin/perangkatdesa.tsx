import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import PerangkatSidebar from "../../components/sidebarComponents/PerangkatSidebar";
import PerangkatDesa from "../../components/PerangkatDesa";
import Navbar from "../../components/Navbar";
import PopUpPerangkat from "../../components/SuperAdminComponents/PopUpPerangkat";

const perangkatdesa = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    console.error("Global context not found");
    return; // or throw an error, depending on your use case
  }
  const {state} = context
  return (
    <div>
      <div
        className={` w-full h-[100vh] absolute   ${
          state.actionHapusPerangkat ? "bg-black opacity-50 z-20" : ""
        }`}
      ></div>
      <Navbar />

      <div className="relative ">
        <div className="">
          <PopUpPerangkat/>
        </div>
        <div className="flex overflow-y-hidden">
          <PerangkatSidebar bg={"bg-custom-gradient"} />
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
                    Amylya Nurul
                  </p>
                </div>
              </div>
              <PerangkatDesa />
              <div className="pb-10"></div>
            </div>
          </div>
        </div>
        <div className="tabel-pengaduan "></div>
      </div>
    </div>
  );
};

export default perangkatdesa;
