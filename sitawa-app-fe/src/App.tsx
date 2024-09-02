import { Route, Routes } from "react-router-dom";

import settings from "./page/superadmin/settings";
import Navbar from "./components/Navbar";
import pengaduanmasyarakat from "./page/superadmin/pengaduanmasyarakat.tsx";
import tambahakun from "./page/superadmin/tambahakun.tsx";
import perangkatdesa from "./page/superadmin/perangkatdesa.tsx";
import login from "./page/loginregist/login.tsx";
import beranda from "./page/superadmin/beranda";
import regist from "./page/loginregist/regist.tsx";
import home from "./page/User/home.tsx";
import hasilpengaduan from "./page/User/hasilpengaduan.tsx";

import FooterLogin from "./components/loginregistcomp/FooterLogin.tsx";


import pengaduan from "./page/User/pengaduan.tsx";

import detailpengaduan from "./components/UserComponents/detailpengaduan.tsx";
import editprofile from "./page/User/editprofile.tsx";
import balasPengaduan from "./page/superadmin/balasPengaduan.tsx";
import hasilProduksi from "./page/superadmin/hasilProduksi.tsx";
import statistikProduksi from "./page/superadmin/statistikProduksi.tsx";




const App = () => {
  return (
    <div className=" relative  w-full h-[100vh] ">
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/pengaduan" Component={pengaduan} />
        <Route path="/hasil-pengaduan" Component={hasilpengaduan} />
        <Route path="/edit-profile" Component={editprofile} />
        <Route path="/settings" Component={settings} />

        <Route path="/pengaduan-masyarakat" Component={pengaduanmasyarakat} />
        <Route path="/hasil-produksi" Component={hasilProduksi} />
        <Route path="/statistik-produksi" Component={statistikProduksi} />
        <Route path="/balas-pengaduan" Component={balasPengaduan} />
        <Route path="/perangkat-desa" Component={perangkatdesa} />
        <Route path="/perangkat-desa/tambah-akun" Component={tambahakun} />
        <Route path="/register" Component={regist} />
      </Routes>
    
    </div>
  );
};
export default App;
