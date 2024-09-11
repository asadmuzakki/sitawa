import { useState, useContext } from "react";
import { bulan, dataKecamatan, fieldProduksi } from "../../data/data";
import { GlobalContext } from "../../GlobalContext";

const FormHasilProduksi = () => {
  const [getText, setText] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [showMonth, setShowMonth] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [nextToggle1, setNextToggle1] = useState<boolean>(false); // [nextToggle1]
  const [nextToggle2, setNextToggle2] = useState<boolean>(false); // [nextToggle2]
  const [nextToggle3, setNextToggle3] = useState<boolean>(false); // [nextToggle3]
  const [nextToggle4, setNextToggle4] = useState<boolean>(false); // [nextToggle4]

  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "FormHasilProduksi must be used within a FormHasilProduksiProvider"
    );
  }
  const { state, setState } = context;
  const loading = ()=>{
    setState((prevState) => {
      return {
        ...prevState,
        loadingProduksi: !prevState.loadingProduksi,
       
      };
    });
  }
  const nexttoggle1 = () => {
    loading();
    setTimeout(() => {
     loading(); 
    }, 500); 

    setNextToggle1(!nextToggle1);
  };
  const prevtoggle1 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500);

    setNextToggle1(!nextToggle1);
  };

  const nexttoggle2 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500); // Delay 2000ms (2 detik)

    setNextToggle2(!nextToggle2);
  };
  const prevtoggle2 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500);
    setNextToggle2(!nextToggle2);
  };

  const nexttoggle3 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500); // Delay 2000ms (2 detik)

    setNextToggle3(!nextToggle3);
  };
  const prevtoggle3 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500);

    setNextToggle3(!nextToggle3);
  };
  const nexttoggle4 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500); // Delay 2000ms (2 detik)

    setNextToggle4(!nextToggle4);
  };
  const prevtoggle4 = () => {
    loading();
    setTimeout(() => {
      loading();
    }, 500);
    setNextToggle4(!nextToggle4);
  };
  const checkIndex = (text: string) => {
    setText(text);
    setShowOptions(!showOptions);
  };
  const checkMonth = (text: string) => {
    setMonth(text);
    setShowMonth(!showMonth);
  };
  const filteredData = dataKecamatan
    .map((data) => data.kecamatan)
    .filter((kecamatan) =>
      kecamatan.toLowerCase().includes(getText.toLowerCase())
    );

  return (
    <div className={`w-full h-full border-l border-r mt-3 `}>
      <form action="">
        <div className={state.loadingProduksi ? "hidden" : ""}>
          <div className={`${nextToggle1 ? "hidden" : ""}`}>
            <div className="border-y">
              <p className="my-1 ml-10">Laporan Hasil Produksi</p>
            </div>
            <div className="flex justify-center ">
              <div className="pt-5 ">
                <label className="" htmlFor="">
                  Kecamatan
                </label>
                <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                  <input
                    onClick={() => setShowOptions(true)}
                    className=" w-[659px] outline-none  text-[14px]"
                    type="text"
                    placeholder="Keacamatan"
                    value={getText}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <span onClick={() => setShowOptions(!showOptions)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2582_26)">
                        <path
                          d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                          fill="#9BEC00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_26">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div
                  className={`scrollbar-hide ${
                    showOptions ? "block" : "hidden"
                  }  max-h-[117px] overflow-auto`}
                >
                  {filteredData.map((data, index) => {
                    return (
                      <div
                        onClick={() => checkIndex(data)}
                        key={index}
                        className="group flex items-center border w-[659px] h-[39px] hover:bg-custom-gradient  border-[#F0F0F0] outline-none rounded-lg px-6 cursor-pointer"
                      >
                        <p className="text-[14px] group-hover:text-white">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-2">
                <label htmlFor="">Bulan</label>
                <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                  <input
                    onClick={() => setShowMonth(true)}
                    className=" w-[659px] outline-none  text-[14px]"
                    type="text"
                    placeholder=""
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <span onClick={() => setShowMonth(!showMonth)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2582_26)">
                        <path
                          d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                          fill="#9BEC00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_26">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div
                  className={`scrollbar-hide ${
                    showMonth ? "block" : "hidden"
                  }  max-h-[117px] overflow-auto`}
                >
                  {bulan.map((data, index) => {
                    return (
                      <div
                        onClick={() => checkMonth(data)}
                        key={index}
                        className="group flex items-center border w-[659px] h-[39px] hover:bg-custom-gradient  border-[#F0F0F0] outline-none rounded-lg px-6 cursor-pointer"
                      >
                        <p className="text-[14px] group-hover:text-white">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="pt-2 pb-5">
                <label htmlFor="">Tahun</label>
                <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                  <input
                    className=" w-[659px] outline-none  text-[14px]"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={nextToggle1 ? "hidden" : ""}>
            <div className="border-y b">
              <p className="my-1 ml-10">Jumlah Padi</p>
            </div>
            {fieldProduksi.map((data, index) => {
              return (
                <div key={index} className="flex justify-center ">
                  <div className="py-2">
                    <label htmlFor="">{data}</label>
                    <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                      <input
                        className=" w-[659px] outline-none  text-[14px] "
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center  ">
              <p className="text-[12px] text-red-500 w-[659px] pb-2">
                Dihitung otomatis
              </p>
            </div>
            <div className="flex justify-center pb-3 border-b">
              <p
                onClick={nexttoggle1}
                className="px-8 py-2 bg-custom-gradient text-white rounded-md cursor-pointer"
              >
                Selanjutnya
              </p>
            </div>
          </div>
        </div>

        {/*------------------ Hibrida ---------------------------*/}
        <div
          className={` ${state.loadingProduksi ? "hidden" : ""} ${
            nextToggle1 ? "" : "hidden"
          } ${nextToggle2 ? "hidden" : ""}`}
        >
          <div className="border-y">
              <p className="my-1 ml-10">Jumlah Padi</p>
            </div>
          <div className="flex justify-center">
            <p>Hibrida - Bantuan Pemerintah</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center ">
            <p>Hibrida - Non Bantuan Pemerintah</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center gap-10 pb-3 border-b">
            <p
              onClick={prevtoggle1}
              className="w-[10rem] py-2 bg-custom-gradient text-center text-white rounded-md cursor-pointer"
            >
              Kembali
            </p>
            <p
              onClick={nexttoggle2}
              className="w-[10rem] text-center py-2 bg-custom-gradient text-white rounded-md cursor-pointer"
            >
              Selanjutnya
            </p>
          </div>
        </div>

        {/* -----------------Inbrida -----------------*/}

        <div
          className={` ${state.loadingProduksi ? "hidden" : ""} ${
            nextToggle2 ? "" : "hidden"
          } ${nextToggle3 ? "hidden" : ""}`}
        >
          <div className="border-y">
              <p className="my-1 ml-10">Jumlah Padi</p>
            </div>
          <div className="flex justify-center">
            <p>Inbrida - Bantuan Pemerintah</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <p>Inbrida - Non Bantuan Pemerintah</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center gap-10 pb-3 border-b">
            <p
              onClick={prevtoggle2}
              className="w-[10rem] py-2 bg-custom-gradient text-center text-white rounded-md cursor-pointer"
            >
              Kembali
            </p>
            <p
              onClick={nexttoggle3}
              className="w-[10rem] text-center py-2 bg-custom-gradient text-white rounded-md cursor-pointer"
            >
              Selanjutnya
            </p>
          </div>
        </div>

        {/* ------------------------33333-----------------------*/}

        <div
          className={`${state.loadingProduksi ? "hidden" : ""} ${nextToggle3 ? "" : "hidden"} ${
            nextToggle4 ? "hidden" : ""
          }`}
        >
          <div className="border-y">
              <p className="my-1 ml-10">Jumlah Padi</p>
            </div>
          <div className="flex justify-center">
            <p>Sawah Irigasi</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <p>Sawah Tadah Hujan</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center gap-10 pb-3 border-b">
            <p
              onClick={prevtoggle3}
              className="w-[10rem] py-2 bg-custom-gradient text-center text-white rounded-md cursor-pointer"
            >
              Kembali
            </p>
            <p
              onClick={nexttoggle4}
              className="w-[10rem] text-center py-2 bg-custom-gradient text-white rounded-md cursor-pointer"
            >
              Selanjutnya
            </p>
          </div>
        </div>

        {/* ------------------444444-----------------------------*/}

        <div className={`${nextToggle4 ? "" : "hidden"} ${state.loadingProduksi ? "hidden" : ""}`}>
        <div className="border-y">
              <p className="my-1 ml-10">Jumlah Padi</p>
            </div>
          <div className="flex justify-center">
            <p>Sawah Rawa Pasang Surut</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <p>Sawah Rawa Lebak</p>
          </div>
          {fieldProduksi.map((data, index) => {
            return (
              <div key={index} className="flex justify-center ">
                <div className="py-2">
                  <label htmlFor="">{data}</label>
                  <div className="flex items-center border w-[659px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6">
                    <input
                      className=" w-[659px] outline-none  text-[14px] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center  ">
            <p className="text-[12px] text-red-500 w-[659px] pb-2">
              Dihitung otomatis
            </p>
          </div>
          <div className="flex justify-center gap-10 pb-3 border-b">
            <p
              onClick={prevtoggle4}
              className="w-[10rem] py-2 bg-custom-gradient text-center text-white rounded-md cursor-pointer"
            >
              Kembali
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormHasilProduksi;
