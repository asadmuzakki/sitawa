import Navbar from "../../components/Navbar";
import PerangkatSidebar from "../../components/sidebarComponents/PerangkatSidebar";
import TambahAkun from "../../components/TambahAkun";
const tambahakun = () => {
  return (
    <div>
      <Navbar />
      <div className="relative ">
        <div className="flex overflow-y-hidden">
          <PerangkatSidebar bg={"bg-custom-gradient"} />
          <div className="h-[100vh] overflow-auto   w-full  pt-36 flex justify-center scrollbar-hide">
            <div className=" w-[85%]">
              <div className="flex justify-between text-[12px] font-bold text-[#858585]">
                <div className="flex ">
                  <p className="border-r-[1px] border-[#858585] pr-2">Admin</p>
                  <p className="border-x-[1px] border-[#858585] px-2">
                    Perangkat Desa
                  </p>
                  <p className="border-l-[1px] border-[#858585] pl-2">
                    Tambah Akun
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
              <TambahAkun />
              <div className="pb-10"></div>
            </div>
          </div>
        </div>
        <div className="tabel-pengaduan "></div>
      </div>
    </div>
  );
};

export default tambahakun;
