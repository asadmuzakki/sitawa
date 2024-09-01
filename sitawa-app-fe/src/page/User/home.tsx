import { useNavigate } from "react-router-dom";
import Carousel from "../../components/UserComponents/Carousels";
import pemandangan from "../../assets/photos/pemandangan.jpeg";
import padi from "../../assets/photos/padi.jpeg";
import sayuran from "../../assets/photos/sayuran.jpeg";
import petani from "../../assets/logo/petani.jpg";
import FooterLogin from "../../components/loginregistcomp/FooterLogin";
import NavHome from "../../components/UserComponents/NavHome";

const home = () => {
  const images = [pemandangan, padi, sayuran];
  const navigate = useNavigate();
  return (
    <div>
      <NavHome/>
      <div className=" w-full ">
        <div className="w-full flex justify-center">
          <div className="w-[98%] flex justify-center  mt-32">
            <div className="carousel w-full">
              <Carousel images={images} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[70%]  mt-10 mb-16  border border-[#F0F0F0] shadow-xl rounded-xl">
            <div className="pt-12">
              <div className="flex justify-center">
                <div className="w-1/2 flex items-center justify-end ">
                  <p className="max-w-[533px] text-[16px] text-center  ">
                    <span className="font-bold text-[32px]">Si Tawa </span>
                    adalah “Sistem Informasi Pertanian Sumbawa” yang dirancang
                    khusus untuk memudahkan para petani dalam menyampaikan
                    pengaduan. Dengan Si Tawa, para petani dapat langsung
                    melaporkan masalah yang terjadi di kebun mereka tanpa perlu
                    repot-repot mengirim surat ke kantor dinas pertanian
                    Sumbawa. Sistem ini mempercepat respons dan penanganan
                    masalah, sehingga para petani bisa mendapatkan solusi yang
                    lebih cepat dan efektif.
                  </p>
                </div>
                <div className="w-1/2 flex items-center ">
                  <img className=" " src={petani} alt="" />
                </div>
              </div>
              <div className="mt-20 flex justify-center  items-center">
                <div className="">
                  <p className="pb-3 text-[30px]">
                    Ayo coba menyampaikan pengaduan sekarang!!
                  </p>
                  <div className="flex justify-center pb-10">
                    <button onClick={() => navigate("/pengaduan")} className="px-10 py-2 border border-[#06D001] rounded-xl text-[#06D001] ">
                      Pengaduan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLogin/>
    </div>
  );
};

export default home;
