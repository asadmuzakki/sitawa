import { useRef, useState } from "react";
import addPhoto from "../assets/photos/Screenshot 2024-08-06 033013.png";
import { dataKecamatan, form } from "../data/data";

const TambahAkun = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [getText, setText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleIconClick = () => {
    // Memicu klik pada input file ketika ikon diklik
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    // Mengambil file yang dipilih
    const file = event.target.files[0];
    if (file) {
      console.log("File yang dipilih:", file.name);
    }
  };

  const checkIndex = (text: string) => {
    setText(text);
    setShowOptions(!showOptions);
  };

 
  const filteredData = dataKecamatan
      .map((data) => data.kecamatan)
      .filter((kecamatan) =>
        kecamatan.toLowerCase().includes(getText.toLowerCase())
      );

  return (
    <div className="mt-6">
      <h3 className="font-bold text-[16px]">Perangkat Desa</h3>
      <div className="w-full  border border-[#F0F0F0] rounded-lg shadow-xl mt-[18px]">
        <p className="p-[17px] font-bold text-[16px] border-b border-[#F0F0F0]">
          Akun
        </p>
        <div className="flex items-center justify-center">
          <div className="">
            <div
              onClick={() => handleIconClick()}
              className="relative cursor-pointer"
            >
              <div className="w-full flex justify-center items-center mt-10 ">
                <img
                  className="flex justify-center items-center w-[85px] h-[85px] rounded-full object-cover brightness-75"
                  src={addPhoto}
                  alt=""
                />
              </div>

              <span className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2374_797)">
                    <path
                      d="M33.0625 17.2031H28.0156L26.8133 13.8336C26.7302 13.603 26.578 13.4037 26.3774 13.2629C26.1768 13.1221 25.9377 13.0467 25.6926 13.0469H14.3074C13.8064 13.0469 13.3574 13.3623 13.1904 13.8336L11.9844 17.2031H6.9375C5.29727 17.2031 3.96875 18.5316 3.96875 20.1719V37.0938C3.96875 38.734 5.29727 40.0625 6.9375 40.0625H33.0625C34.7027 40.0625 36.0312 38.734 36.0312 37.0938V20.1719C36.0312 18.5316 34.7027 17.2031 33.0625 17.2031ZM33.3594 37.0938C33.3594 37.257 33.2258 37.3906 33.0625 37.3906H6.9375C6.77422 37.3906 6.64062 37.257 6.64062 37.0938V20.1719C6.64062 20.0086 6.77422 19.875 6.9375 19.875H13.8658L14.5004 18.1012L15.3502 15.7188H24.6461L25.4959 18.1012L26.1305 19.875H33.0625C33.2258 19.875 33.3594 20.0086 33.3594 20.1719V37.0938ZM20 22.25C16.7195 22.25 14.0625 24.907 14.0625 28.1875C14.0625 31.468 16.7195 34.125 20 34.125C23.2805 34.125 25.9375 31.468 25.9375 28.1875C25.9375 24.907 23.2805 22.25 20 22.25ZM20 31.75C18.0332 31.75 16.4375 30.1543 16.4375 28.1875C16.4375 26.2207 18.0332 24.625 20 24.625C21.9668 24.625 23.5625 26.2207 23.5625 28.1875C23.5625 30.1543 21.9668 31.75 20 31.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2374_797">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center max-w-[357px] mt-4">
                Gambar yang diunggah harus memiliki lebar 500px dan panjang
                500px
              </p>
            </div>

            <div className="mt-[77px] flex items-center justify-center">
              <form className="block r" action="">
                {form.map((data, index) => {
                  return (
                    <div key={index} className=" mb-3">
                      <label className="mx-6" htmlFor="">
                        {data.label}
                      </label>
                      <div className="flex items-center border w-[433px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1">
                        <input
                          className=" w-[433px] outline-none mx-6 text-[14px]"
                          type={data.type}
                          placeholder={data.placeholder}
                        />
                      </div>
                    </div>
                  );
                })}
                <div>
                  <div className=" ">
                    <label className="mx-6" htmlFor="">
                      Kecamatan
                    </label>
                    <div
                      className="flex items-center border w-[433px] h-[39px] border-[#F0F0F0] outline-none rounded-lg mt-1 px-6"
                    >
                      <input
                      onClick={() => setShowOptions(true)}
                        className=" w-[433px] outline-none  text-[14px]"
                        type="text"
                        placeholder="Keacamatan"
                        value={getText}
                        onChange={(e)=>setText(e.target.value)}
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
                  </div>
                </div>
                {/* kecamatan options */}
                <div className={`scrollbar-hide ${showOptions ? "block" : "hidden"}  max-h-[117px] overflow-auto`}>
                  {filteredData.map((data, index) => {
                    return (
                      <div
                        onClick={() => checkIndex(data)}
                        key={index}
                        className="flex items-center border w-[433px] h-[39px] border-[#F0F0F0] outline-none rounded-lg px-6 cursor-pointer"
                      >
                        <p className="text-[14px]">{data}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center mt-5 mb-10">
                  <button
                    type="submit"
                    className="px-[22px] py-[12px] bg-custom-gradient rounded-full text-white font-bold text-[10px]"
                  >
                    Tambahkan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahAkun;
