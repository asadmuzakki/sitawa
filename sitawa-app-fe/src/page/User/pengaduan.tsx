import { useRef, useState } from "react";
import upload from "../../assets/logo/Picture.png";
import NavPengaduan from "../../components/UserComponents/NavPengaduan";

const pengaduan = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); 
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageName(file.name);
      setImageSize(file.size);
    }
  };
  const handlePengaduan = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nama', name);
    formData.append('nomor_hp', phone);
    formData.append('alamat', address);
    formData.append('subjek', subject);
    formData.append('keterangan', description);

    try {
      const response = await fetch('http://localhost:8000/api/pengaduan', {
        method: 'POST',
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`, // Ganti dengan token autentikasi jika dibutuhkan
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Pengaduan berhasil dikirim:', data);
        alert('Pengaduan berhasil dikirim!');
        // Reset form
        setName('');
        setPhone('');
        setAddress('');
        setSubject('');
        setDescription('');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Gagal mengirim pengaduan');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pengaduan');
    }
  };
  return (
    <div className="">
    <NavPengaduan/>
      <div className="flex justify-center h-full  overflow-auto">
        <div className="w-[1230px] h-[1204px] border border-[#f0f0f0] rounded-xl shadow-xl my-32">
          <div className="py-[49px] border-b border-[#f0f0f0] mx-1">
            <p className="ml-5">Buat Pengaduan</p>
          </div>
          <form className="w-full" action="" onSubmit={handlePengaduan}>
            <div className="flex justify-center items-center text-[12px]">
              <div className="mt-5">
                <label className="ml-5 " htmlFor="">
                  Nama
                </label>
                <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                  <input
                    className="w-[920px] h-[35px] outline-none "
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    className="w-[920px] h-[35px] outline-none "
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    className="w-[920px] h-[35px] outline-none "
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      type="file"
                    />
                  </div>
                  <p className="text-center text-[12px]">
                    Anda dapat seret dan lepas berkas di sini untuk menambahkan
                    foto
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
                      <p className="text-[12px] mb-1 text-black">{imageName}</p>
                      <p className="text-[8px]">{(imageSize / 1024).toFixed(2)} KB</p>
                    </div>
                  </div>
                )}

                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center text-[12px]">
              <div className="mt-5">
                <label className="ml-5 " htmlFor="">
                  Subjek
                </label>
                <div className="w-[950px] h-[42px] border border-[#f0f0f0] rounded-xl flex justify-center items-center mt-2">
                  <input
                    className="w-[920px] h-[35px] outline-none "
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                  <textarea className="w-[920px] h-[200px] outline-none  " name="" id="" value={description} onChange={(e) => setDescription(e.target.value)}>
                    
                  </textarea>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="px-24 py-2 rounded-lg bg-[#9BEC00] text-white">Kirim</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default pengaduan;
