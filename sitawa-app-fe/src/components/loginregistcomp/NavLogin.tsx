import React, { useState } from "react";
import logo from "../../assets/logo/sumbawa.jpeg";
const NavLogin = () => {
  const navData = ["Beranda", "Pengaduan", "Hasil Pengaduan"];
  return (
    <div>
      <div className="bg-[#FFFFFF] flex items-center w-full h-[83px] border border-[#F7F7F7] fixed  z-[9999999]">
        <div className="flex justify-between w-full items-center">
          <div className="logo flex gap-2 items-center ml-[41px]">
            <img className="w-[39px] h-[57px]" src={logo} alt="" />
            <p className="text-[20px] text-[#9BEC00] text-bo">si TAWA</p>
          </div>
          <div className="flex gap-10">
            {navData.map((data, index) => {
              return (
                <div key={index}>
                  <p className={`text-[16px] text-[#858585] cursor-pointer`}>
                    {data}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <button className="px-3 py-1 bg-custom-gradient text-white rounded-md mr-[41px]">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLogin;
