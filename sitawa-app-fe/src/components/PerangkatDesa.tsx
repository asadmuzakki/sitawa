import {  useNavigate } from "react-router-dom";
import TabelPerangkatDesa from "./TabelPerangkatDesa";

const PerangkatDesa = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between items-center mt-6 ">
        <h3 className="font-bold text-[16px]">Perangkat Kecamatan</h3>
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
          <button onClick={()=>navigate("/perangkat-desa/tambah-akun")} type="button" className="w-[100px] h-[42px]  rounded-full bg-custom-gradient flex items-center justify-center gap-1">
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2331_190)">
                  <path
                    d="M9.10417 9.58333C9.54464 9.58333 9.9808 9.49658 10.3878 9.32801C10.7947 9.15945 11.1645 8.91238 11.4759 8.60092C11.7874 8.28946 12.0345 7.9197 12.203 7.51275C12.3716 7.1058 12.4583 6.66964 12.4583 6.22917C12.4583 5.78869 12.3716 5.35253 12.203 4.94558C12.0345 4.53864 11.7874 4.16888 11.4759 3.85741C11.1645 3.54595 10.7947 3.29888 10.3878 3.13032C9.9808 2.96176 9.54464 2.875 9.10417 2.875C8.21459 2.875 7.36144 3.22838 6.73241 3.85741C6.10338 4.48644 5.75 5.33959 5.75 6.22917C5.75 7.11875 6.10338 7.97189 6.73241 8.60092C7.36144 9.22995 8.21459 9.58333 9.10417 9.58333Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 13.8958V19.6458M14.375 16.7708H20.125M12.9375 13.4167H9.00833C6.86167 13.4167 5.78833 13.4167 4.968 13.8345C4.24674 14.202 3.66034 14.7884 3.29283 15.5097C2.875 16.33 2.875 17.4033 2.875 19.55V20.125H12.9375"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2331_190">
                    <rect width="23" height="23" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p className="text-[10px] text-white">Tambahkan</p>
          </button>
        </div>
      </div>
      <TabelPerangkatDesa/>
    </div>
  );
};

export default PerangkatDesa;
