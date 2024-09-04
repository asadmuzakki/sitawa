import { useRef, useState, useContext } from "react";
import { supabase } from "../../api/supabaseClient";
import axios from "axios";

import { GlobalContext } from "../../GlobalContext";

import upload from "../../assets/logo/Picture.png";
import NavPengaduan from "../../components/UserComponents/NavPengaduan";
import FooterLogin from "../../components/loginregistcomp/FooterLogin";

import AddPopUp from "../../components/UserComponents/AddPopUp";

const pengaduan = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState(0);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [name, setNmae] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phone_number, setPhone_number] = useState<string>("");
  
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchAddress(latitude, longitude);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Gagal mendapatkan lokasi. Pastikan izin lokasi telah diaktifkan."
          );
          setLoading(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation tidak didukung oleh browser ini.");
    }
  };
  const fetchAddress = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );

      if (response.data && response.data.display_name) {
        setAddress(response.data.display_name);
      } else {
        alert("Alamat tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Gagal mengambil alamat.");
    } finally {
      setLoading(false);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      setImageName(file.name);
      setImageSize(file.size);
    }
  };

  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("context not found");
  }
  const { state, setState } = context;
  const popUpHandler = () => {
    setState((prevState) => {
      return {
        ...prevState,
        actionAddData: !prevState.actionAddData,
      };
    });
  };
  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const { data, error } = await supabase.storage
        .from("images").upload(`public/${file.name}`, file);

      if (error) {
        console.log("Error uploading image:", error);
        throw error;
        ;

      }

      // Mendapatkan URL publik untuk gambar yang baru diupload
      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(`public/${file.name}`);

      setImageUrl(publicUrlData.publicUrl);
      setError(null);
      console.log("Image uploaded successfully:", publicUrlData.publicUrl);
    } catch (error: any) {
      setError("Error uploading image: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // add Data
  const addPengaduan = async (e: any) => {
    e.preventDefault();

    console.log("Mulai proses tambah pengaduan");

    if (
      !name ||
      !phone_number ||
      !address ||
      !selectedImage ||
      !subject ||
      !description
    ) {
      alert("Lengkapi semua data");
      return;
    }
    const currentTimestamp = new Date();
    try {
      console.log("Sebelum mengirim data ke Supabase");

      const { data, error } = await supabase.from("complaints").insert([
        {
          name,
          phone_number,
          address,
          photo:imageUrl,
          subject,
          description,
          updated_at: currentTimestamp,
          created_at: currentTimestamp,
          latitude,
          longitude,
        },
      ]);

      console.log("Setelah mengirim data ke Supabase");
      

      if (error) {
        console.log("Error dari Supabase:", error);
        return;
      }

      console.log("Data berhasil ditambahkan:", data);

      // Reset fields
      setNmae("");
      setPhone_number("");
      setAddress("")
      setSubject("");
      setDescription("");
      setSelectedImage("");
      popUpHandler();
    } catch (error) {
      console.error("Error saat menambahkan pengaduan:", error);
      alert("Terjadi kesalahan saat menambahkan pengaduan. Silakan coba lagi.");
    }
  };

  return (
    <div className="relative ">
      <div
        className={`w-full h-full absolute ${
          state.actionAddData ? "bg-black opacity-50 z-20" : ""
        }`}
      ></div>
      <NavPengaduan />
      <div
        className={`relative h-[100vh] ${
          state.actionAddData ? "overflow-hidden" : ""
        }`}
      >
        <div>
          <AddPopUp />
        </div>
        <div className="flex justify-center overflow-auto scrollbar-hide">
          <div className="w-[1230px]   border border-[#f0f0f0] rounded-xl shadow-xl my-32">
            <div className="py-[49px] border-b border-[#f0f0f0] mx-1">
              <p className="ml-5">Buat Pengaduan</p>
            </div>
            <form onSubmit={addPengaduan} className="w-full" action="">
              <div className="flex justify-center items-center text-[12px]">
                <div className="mt-5">
                  <label className="ml-5 " htmlFor="">
                    Nama
                  </label>
                  <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                    <input
                      onChange={(e) => setNmae(e.target.value)}
                      value={name}
                      className="w-[920px] h-[35px] outline-none "
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-[12px]">
                <div className="mt-5">
                  <label className="ml-5 " htmlFor="">
                    No HP
                  </label>
                  <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                    <input
                      onChange={(e) => setPhone_number(e.target.value)}
                      value={phone_number}
                      className="w-[920px] h-[35px] outline-none "
                      type="tel"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-[12px]">
                <div className="mt-5">
                  <label className="ml-5 " htmlFor="">
                    Alamat
                  </label>
                  <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className="w-[920px] h-[35px] outline-none "
                      type="text"
                    />
                  </div>
                  <div className="flex gap-3 mt-2 items-center">
                    <button
                      onClick={getLocation}
                      disabled={loading}
                      className={`py-1 px-2 rounded-lg  bg-custom-gradient text-white ${
                        loading ? "hidden" : ""
                      }`}
                    >
                      Lokasi Saya
                    </button>
                    <div
                      className={`flex justify-center items-center gap-3  ${
                        loading ? "" : "hidden"
                      }`}
                    >
                      <div className="loader"></div>
                      <p>Sedang Mencari Lokasi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <div className="w-[950px] h-[316px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                  <div>
                    <div
                      onClick={() => handleIconClick()}
                      className="flex justify-center items-center relative cursor-pointer"
                    >
                      <img
                        className="h-[64px] w-[74px] object-cover"
                        src={upload}
                        alt=""
                      />
                      <input
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        type="file"
                      />
                    </div>
                    <p className="text-center text-[12px]">
                      Anda dapat seret dan lepas berkas di sini untuk
                      menambahkan foto
                    </p>
                    <p className="text-center text-[8px] text-[#06D001]">
                      format: PNG, JPG, JPEG, WEBP
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5 ">
                <div className="border border-[#f0f0f0] rounded-xl w-[950px] h-[116px]">
                  {selectedImage && (
                    <div className="p-3 flex  gap-2 items-center">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-[48px] w-[54px] object-cover rounded-sm"
                      />
                      <div>
                        <p className="text-[12px] mb-1 text-black">
                          {imageName}
                        </p>
                        <p className="text-[8px]">
                          {(imageSize / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="px-3">
                    <button className="border px-2 py-1 rounded-lg text-[12px]" onClick={handleUpload} disabled={uploading}>
                      {uploading ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-[12px]">
                <div className="mt-5">
                  <label className="ml-5 " htmlFor="">
                    Subjek
                  </label>
                  <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      className="w-[920px] h-[35px] outline-none "
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center text-[12px]">
                <div className="mt-5">
                  <label className="ml-5 " htmlFor="">
                    Keterangan
                  </label>
                  <div className="w-[950px] h-[222px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-[920px] h-[200px] outline-none  "
                      name=""
                      id=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center pb-10 mt-5">
                <button
                  type="submit"
                  className="px-24 py-2 rounded-lg bg-[#9BEC00] text-white"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
        <FooterLogin />
      </div>
    </div>
  );
};

export default pengaduan;
