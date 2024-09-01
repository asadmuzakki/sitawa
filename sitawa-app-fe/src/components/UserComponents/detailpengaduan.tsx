
import jagung from "../../assets/photos/Mask group.png";
import logo from "../../assets/logo/Mask group (1).png";

const detailpengaduan = () => {
  return (
    <div className=" h-full">

      <div className="scrollbar-hide w-full overflow-auto h-[100vh] ">
        <div className="flex  justify-center ">
          <div className="w-[1230px] h-[699px] border border-[#f0f0f0] shadow-xl my-32 rounded-xl">
            <div className="flex justify-between items-center py-[49px] border-b-2">
              <p className="ml-5 text-[16px]">Hasil Pengaduan</p>
              <button className="mr-5">
                <span>
                  <span>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div className="flex  mt-5 w-full">
              <img
                className="w-[478px] h-[h-308px] object-cover mx-5"
                src={jagung}
                alt=""
              />
              <div className="mx-5 w-[752px]">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold">Dhira Wahyu Febrian</p>
                  <p className="text-[12px]">17 agustus 2024 </p>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02252 4.14752C4.96763 5.20242 4.375 6.63316 4.375 8.125C4.375 10.4325 6.22125 13.44 10 17.0425C13.7788 13.44 15.625 10.4325 15.625 8.125ZM10 18.75C5.41625 14.5837 3.125 11.0413 3.125 8.125C3.125 6.30164 3.84933 4.55295 5.13864 3.26364C6.42795 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.572 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.875 11.0413 14.5837 14.5837 10 18.75Z"
                        fill="#858585"
                      />
                      <path
                        d="M10 10C10.4973 10 10.9742 9.80246 11.3258 9.45083C11.6775 9.09919 11.875 8.62228 11.875 8.125C11.875 7.62772 11.6775 7.15081 11.3258 6.79917C10.9742 6.44754 10.4973 6.25 10 6.25C9.50272 6.25 9.02581 6.44754 8.67417 6.79917C8.32254 7.15081 8.125 7.62772 8.125 8.125C8.125 8.62228 8.32254 9.09919 8.67417 9.45083C9.02581 9.80246 9.50272 10 10 10ZM10 11.25C9.1712 11.25 8.37634 10.9208 7.79029 10.3347C7.20424 9.74866 6.875 8.9538 6.875 8.125C6.875 7.2962 7.20424 6.50134 7.79029 5.91529C8.37634 5.32924 9.1712 5 10 5C10.8288 5 11.6237 5.32924 12.2097 5.91529C12.7958 6.50134 13.125 7.2962 13.125 8.125C13.125 8.9538 12.7958 9.74866 12.2097 10.3347C11.6237 10.9208 10.8288 11.25 10 11.25Z"
                        fill="#858585"
                      />
                    </svg>
                  </span>
                  <p className="text-[12px]">
                    Jl. Panto Daeng No.36, Kerato, Kec. Unter Iwes
                  </p>
                </div>
                <p className="mt-[41px] text-black text-[14px]">
                  Penyakit pada batang jagung
                </p>
                <p className="mt-5 max-w-[513px] max-h-[147px] text-black text-[14px]">
                  Batang jagung saya terlihat rusak, dan seperti ada jamur
                  bagaimana cara saya mengatasinya ? Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vivamus non est accumsan, dapibus
                  urna nec, suscipit lacus. Phasellus dolor eros, tempus a nibh
                  a, vestibulum malesuada ligula. Vivamus volutpat metus quis
                  orci tristique ullamcorper. In sit amet placerat libero.
                  Integer scelerisque nunc sed commodo dictum. Vestibulum porta
                  ut est a vulputate.
                </p>
              </div>
            </div>
            <div className="w-full px-5 mt-10">
              <div className="rounded-xl  h-[129px] border">
                <div className="px-2 py-2">
                  <div className="flex gap-1 items-center">
                    <img
                      className="w-[30px] h-[25px] object-cover"
                      src={logo}
                      alt=""
                    />
                    <p className="font-bold">Dinas Pertanian Kab. Sumbawa</p>
                  </div>
                  <p className="mt-3 overflow-auto">
                    Mengatasi jamur pada batang jagung memerlukan pendekatan
                    yang komprehensif. Pertama, penting untuk memilih varietas
                    jagung yang tahan terhadap penyakit jamur seperti Fusarium
                    dan Diplodia, karena varietas yang tahan dapat mengurangi
                    risiko infeksi.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-5 my-2 text-[12px]">
              <p>10.00 am</p>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default detailpengaduan;
