import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

<<<<<<< Updated upstream
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======

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
        <Route path="/" Component={beranda} />
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
>>>>>>> Stashed changes
