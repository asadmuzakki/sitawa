import { useState } from "react";
import NavLogin from "../../components/loginregistcomp/NavLogin";
import imglogin from "../../assets/photos/WhatsApp Image 2024-08-21 at 12.37.39.jpeg";
import { formUser } from "../../data/data";
import logo from "../../assets/logo/sumbawa.jpeg";
import FooterLogin from "../../components/loginregistcomp/FooterLogin";
const login = () => {
  const [color, setColor] = useState(2);
  return (
    <div className="h-[100vh] ">
      <NavLogin />
      <div>

      </div>
      <div className="h-full w-full  flex justify-center items-center">
        <div className="w-[1044px] h-[599px] border border-[#F0F0F0] flex shadow-xl rounded-xl">
          <div className="form-user w-[522px] border-r">
            <h1 className="text-center text-[24px] text-black mt-[71px]">
              Masuk
            </h1>
            <form className="w-full mt-[78px]" action="post">
              <div className="flex justify-center">
                <div>
                  {formUser.map((data, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setColor(index)}
                        className="w-[433px] h-[34px]  relative mb-[34px]"
                      >
                        <div className="h-[12px]"></div>
                        <label
                          className="absolute top-0 ml-[42px] bg-white px-1"
                          htmlFor=""
                        >
                          {data.label}
                        </label>
                        <div
                          className={`w-[433px] h-[34px] border rounded-full flex ${
                            color == index && "border-[#9BEC00]"
                          } items-center`}
                        >
                          <input
                            className="w-[334px] h-[32px] ml-[46px] outline-none  "
                            type={data.type}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-end">
                    <button className="text-[#9BEC00]">Lupa Password ?</button>
                  </div>
                  <button className="w-full h-[34px] rounded-xl border bg-custom-gradient text-white mt-5">
                    Masuk
                  </button>
                  <div className="w-full flex justify-center gap-2 mt-2">
                    <p>Belum punya akun ?</p>
                    <p className="text-[#9BEC00] cursor-pointer">Daftar</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="img-form relative">
            <div className=" right-[12.5rem] mt-2 absolute flex gap-2 items-center ">
              <img className="w-[39px] h-[57px]" src={logo} alt="" />
              <p className="text-[20px] text-[#9BEC00] font-bold s">si TAWA</p>
            </div>
            <img
              className="w-[522px] h-[599px] object-cover object-center rounded-tr-xl rounded-br-xl opacity-30"
              src={imglogin}
              alt=""
            />
          </div>
        </div>
      </div>
      <FooterLogin/>
    </div>
  );
};

export default login;
