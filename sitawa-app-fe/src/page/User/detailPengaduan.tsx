import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/Mask group (1).png";
import jagung from "../../assets/photos/Mask group.png";
import { useParams } from "react-router-dom";
import NavHasilPengaduan from "../../components/UserComponents/NavHasilPengaduan";
import FooterLogin from "../../components/loginregistcomp/FooterLogin";
import { supabase } from "../../api/supabaseClient";
import { pengaduan } from "../../components/TabelPengaduan";
import { format, toZonedTime } from "date-fns-tz";
type dataRespon = {
  id: number;
  respon: string;
  created_at: string;
  id_user: number;
};
const detailPengaduan = () => {
  // ----------- State ------------
  const { id } = useParams();

  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [data, getData] = useState<pengaduan[]>([]);
  const [dataRespon, setDataRespon] = useState<dataRespon[]>([]);
  const [responAdmin, setResponAdmin] = useState<string>("");
  // ----------- State ------------

  // ----------- fetch data --------
  const fetchDataById = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from("complaints")
        .select("*")
        .eq("id", id);

      if (error) {
        throw error;
      }
      getData(data);

      data.forEach((item) => {
        setImage(item.image);
        setName(item.name);
        setSubject(item.subject);
        setDescription(item.description);
        setAddress(item.address);
      });
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };
  const fetchDataRespon = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from("respon_superadmin")
        .select("*")
        .eq("id_user", id);

      if (error) {
        throw error;
      }

      if (data) {
        // Set data respon ke state
        setDataRespon(data);

        data.forEach((respon) => {
          setResponAdmin(respon.respon);
        });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };
  // ----------- fetch data --------

  // ----------- Waktu --------
  const formatDate = (dateStrings: string[]): string[] => {
    return dateStrings.map((dateString) => {
      const zonedDate = toZonedTime(dateString, "Asia/Makassar");
      return format(zonedDate, "dd MMMM yyyy ");
    });
  };
  const formatDateRespon = (dateStrings: string[]): string[] => {
    return dateStrings.map((dateString) => {
      const zonedDate = toZonedTime(dateString, "Asia/Makassar");
      return format(zonedDate, "HH : mm : ss ");
    });
  };
  const dates = data.map((item: { created_at: string }) => item.created_at);
  const responDates = dataRespon.map(
    (item: { created_at: string }) => item.created_at
  );
  const formattedDateTime = formatDate(dates);
  const formattedDateTimeResponse = formatDateRespon(responDates);
  // ----------- Waktu --------
  useEffect(() => {
    fetchDataById(Number(id));
    fetchDataRespon(Number(id));
  }, []);
  return (
    <div>
      {/* ----- Detail Pengaduan ------ */}
      <div className={``}>
        <NavHasilPengaduan />
        <div className="scrollbar-hide w-full overflow-auto h-[100vh] ">
          <div className="flex  justify-center ">
            return (
            <div className="w-[1230px] h-[699px] border border-[#f0f0f0] shadow-xl my-32 rounded-xl">
              <div className="flex justify-between items-center py-[49px] border-b-2">
                <p className="ml-5 text-[16px]">Hasil Pengaduan </p>
              </div>
              <div className="flex  mt-5 w-full">
                <img
                  className="w-[478px] h-[308px] rounded-lg mx-5"
                  src={image}
                  alt=""
                />
                <div className="mx-5 w-[752px]">
                  <div className="flex justify-between items-center">
                    <p className="text-[20px] font-bold">{name}</p>
                    <div className="flex items-center gap-5">
                      <p className="text-[12px]">{formattedDateTime} </p>
                      <p
                        className={`status text-[12px]  ${
                          dataRespon
                            .map((status) => status.id_user)
                            .includes(Number(id))
                            ? "text-[#06D001]"
                            : "text-[#E5D206]"
                        }`}
                      >
                        {dataRespon
                          .map((status) => status.id_user)
                          .includes(Number(id))
                          ? "Selesai"
                          : "Diproses"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <span className="mt-1">
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
                    <p className="text-[12px] max-w-[70%]">{address}</p>
                  </div>
                  <p className="mt-[41px] font-bold text-[18px]">{subject}</p>
                  <p className="scrollbar-hide mt-5 max-w-[553px] max-h-[147px] overflow-auto text-black text-[14px]">
                    {description}
                  </p>
                </div>
              </div>
              <div className="w-full px-5 mt-10">
                <div className="scrollbar-hide border rounded-xl sh h-[150px] overflow-auto">
                  <div className="px-2 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 items-center">
                        <img className="w-[30px] h-[25px] " src={logo} alt="" />
                        <p className="font-bold">
                          Dinas Pertanian Kab. Sumbawa
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 overflow-auto">{responAdmin}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-5 my-2 text-[12px]">
                <p>{formattedDateTimeResponse}</p>
              </div>
            </div>
            );
          </div>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};

export default detailPengaduan;
