import logo from "../../assets/logo/Mask group (1).png";
import { supabase } from "../../api/supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import { format } from "date-fns";
import { pengaduan } from "../TabelPengaduan";
import axios from "axios";
import { ca } from "date-fns/locale";

type dataRespon = {
  id: number;
  respon: string;
  created_at: string;
};

const BalasPengaduan = () => {
  // ----------- State ------------
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [dateComplaint, setDateComplaint] = useState<number>();

  const [valueRespon, setValueRespon] = useState<string>("");
  const [data, setData] = useState<pengaduan[]>([]);

  const [dataRespon, setDataRespon] = useState<dataRespon[]>([]);
  const [responAdmin, setResponAdmin] = useState<string>("");

  const [editToggle, setEditToggle] = useState<boolean>(false);
  const [responEdit, setResponEdit] = useState<string>("");
  const [idRespon, setIdRespon] = useState<number | null>(null);
  const { id } = useParams();
  // ----------- State ------------

  // ----------- fetch data --------
  const fetchComplaintById = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/complaints/${id}`);
      setData(response.data.data);
      // console.log(data);

      setImage(response.data.data.image);
      setName(response.data.data.name);
      setSubject(response.data.data.subject);
      setDescription(response.data.data.description);
      setAddress(response.data.data.address);
      setDateComplaint(response.data.data.created_at);
      
    } catch (error) {
      console.log(error)
    }
  };
  // -------------- fetch data --------------
  // ----------- input reply --------
  const addReply = async (id: number) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/replies`, {
        respon: valueRespon,
      });
      console.log(response);
      setValueRespon("");
      fetchComplaintById(Number(id));
    } catch (error) {
      console.log(error);
    }
  };
  // ----------- input reply --------
  // ----------- Konversi Waktu --------------
  const formatDate = (timestamp: any): string => {
    const date = new Date(timestamp);
    
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long', // for full month name (e.g., January, February)
      year: 'numeric',
    });
  };
  const formatedDate = formatDate(dateComplaint);
  // ----------- Konversi Waktu --------------



  useEffect(() => {
    fetchComplaintById(Number(id));
    // fetchDataById(Number(id));
  }, []);

  return (
    <div className="">
      <div className="scrollbar-hide w-full overflow-auto ">
        <div className=" mt-10 ">
          <div className="w-[1230px]  border-2 border-[#f0f0f0] rounded-xl p-5 ">
            <div className="flex w-full ">
              <div className=" flex items-center">
                <img
                  onClick={() => console.log(data)}
                  className=" w-[478px] h-[308px] object-center flex items-center rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="mx-5 w-[752px] ">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold"></p>
                  <p className="text-[12px]">{formatedDate}</p>
                </div>

                <div className="flex mt-1 gap-1">
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
                <p className="mt-[41px]  text-[18px] font-bold">{subject}</p>
                <p className="scrollbar-hide mt-5 max-w-[553px] max-h-[147px] overflow-auto text-black text-[14px]">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1230px]  border-[#f0f0f0] rounded-xl mt-1 p-5 border-2 ">
            <div className="w-full  ">
              <div className="border rounded-xl sh h-[150px] overflow-auto">
                <div className="px-2 py-2">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <img
                        className="w-[30px] h-[25px] object-cover"
                        src={logo}
                        alt=""
                      />
                      <p className="font-bold">Dinas Pertanian Kab. Sumbawa</p>
                    </div>
                    <span
                      onClick={() => setEditToggle(!editToggle)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z"
                            stroke="#06D001"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z"
                            fill="#06D001"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 overflow-auto">{responAdmin}</p>
                </div>
              </div>
              <div className="flex justify-end mt-3 text-[12px]">
                <p>{`0000`}</p>
              </div>
            </div>
            <div
              className={`mt-7 ${editToggle ? "hidden" : ""} ${responAdmin !== "" ? "hidden" : ""
                }`}
            >
              <form action="">
                <div className="border h-12 rounded-full flex justify-between items-center px-5 gap-3">
                  <input
                    onChange={(e) => setValueRespon(e.target.value)}
                    className=" w-full outline-none"
                    type="text"
                  />
                  <button type="submit">
                    <span className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.73 8.8734L5.39671 0.706735C4.75212 0.385912 4.02426 0.271697 3.31238 0.379662C2.60051 0.487627 1.93925 0.812517 1.41876 1.31004C0.898282 1.80756 0.543906 2.45349 0.403953 3.15978C0.263999 3.86607 0.345279 4.59833 0.636711 5.25673L3.43671 11.5217C3.50024 11.6732 3.53296 11.8358 3.53296 12.0001C3.53296 12.1643 3.50024 12.3269 3.43671 12.4784L0.636711 18.7434C0.399528 19.2762 0.299259 19.8599 0.345018 20.4413C0.390776 21.0228 0.58111 21.5836 0.898723 22.0727C1.21634 22.5619 1.65116 22.9639 2.16367 23.2423C2.67618 23.5207 3.25014 23.6666 3.83338 23.6667C4.37965 23.6613 4.91778 23.5337 5.40838 23.2934L21.7417 15.1267C22.3211 14.8353 22.8081 14.3886 23.1483 13.8365C23.4886 13.2844 23.6688 12.6486 23.6688 12.0001C23.6688 11.3515 23.4886 10.7157 23.1483 10.1636C22.8081 9.61155 22.3211 9.16485 21.7417 8.8734H21.73ZM20.6917 13.0384L4.35838 21.2051C4.1439 21.3081 3.90306 21.343 3.66816 21.3052C3.43326 21.2674 3.21552 21.1588 3.04414 20.9937C2.87276 20.8287 2.75594 20.6152 2.70933 20.3819C2.66272 20.1486 2.68856 19.9066 2.78338 19.6884L5.57171 13.4234C5.60781 13.3397 5.63897 13.254 5.66504 13.1667H13.7034C14.0128 13.1667 14.3095 13.0438 14.5283 12.825C14.7471 12.6062 14.87 12.3095 14.87 12.0001C14.87 11.6907 14.7471 11.3939 14.5283 11.1751C14.3095 10.9563 14.0128 10.8334 13.7034 10.8334H5.66504C5.63897 10.7461 5.60781 10.6604 5.57171 10.5767L2.78338 4.31174C2.68856 4.09353 2.66272 3.85154 2.70933 3.61823C2.75594 3.38492 2.87276 3.17144 3.04414 3.00641C3.21552 2.84138 3.43326 2.73269 3.66816 2.69491C3.90306 2.65714 4.1439 2.69209 4.35838 2.79507L20.6917 10.9617C20.8828 11.0596 21.0432 11.2084 21.1552 11.3916C21.2672 11.5748 21.3264 11.7853 21.3264 12.0001C21.3264 12.2148 21.2672 12.4253 21.1552 12.6086C21.0432 12.7918 20.8828 12.9405 20.6917 13.0384Z"
                          fill="#9BEC00"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className={`mt-7 ${editToggle ? "" : "hidden"}`}>
              <form action="">
                <div className="border h-12 rounded-full flex justify-between items-center px-5 gap-3">
                  <input
                    onChange={(e) => setResponEdit(e.target.value)}
                    className=" w-full outline-none"
                    type="text"
                    value={responEdit}
                  />
                  <button type="submit">
                    <span className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.73 8.8734L5.39671 0.706735C4.75212 0.385912 4.02426 0.271697 3.31238 0.379662C2.60051 0.487627 1.93925 0.812517 1.41876 1.31004C0.898282 1.80756 0.543906 2.45349 0.403953 3.15978C0.263999 3.86607 0.345279 4.59833 0.636711 5.25673L3.43671 11.5217C3.50024 11.6732 3.53296 11.8358 3.53296 12.0001C3.53296 12.1643 3.50024 12.3269 3.43671 12.4784L0.636711 18.7434C0.399528 19.2762 0.299259 19.8599 0.345018 20.4413C0.390776 21.0228 0.58111 21.5836 0.898723 22.0727C1.21634 22.5619 1.65116 22.9639 2.16367 23.2423C2.67618 23.5207 3.25014 23.6666 3.83338 23.6667C4.37965 23.6613 4.91778 23.5337 5.40838 23.2934L21.7417 15.1267C22.3211 14.8353 22.8081 14.3886 23.1483 13.8365C23.4886 13.2844 23.6688 12.6486 23.6688 12.0001C23.6688 11.3515 23.4886 10.7157 23.1483 10.1636C22.8081 9.61155 22.3211 9.16485 21.7417 8.8734H21.73ZM20.6917 13.0384L4.35838 21.2051C4.1439 21.3081 3.90306 21.343 3.66816 21.3052C3.43326 21.2674 3.21552 21.1588 3.04414 20.9937C2.87276 20.8287 2.75594 20.6152 2.70933 20.3819C2.66272 20.1486 2.68856 19.9066 2.78338 19.6884L5.57171 13.4234C5.60781 13.3397 5.63897 13.254 5.66504 13.1667H13.7034C14.0128 13.1667 14.3095 13.0438 14.5283 12.825C14.7471 12.6062 14.87 12.3095 14.87 12.0001C14.87 11.6907 14.7471 11.3939 14.5283 11.1751C14.3095 10.9563 14.0128 10.8334 13.7034 10.8334H5.66504C5.63897 10.7461 5.60781 10.6604 5.57171 10.5767L2.78338 4.31174C2.68856 4.09353 2.66272 3.85154 2.70933 3.61823C2.75594 3.38492 2.87276 3.17144 3.04414 3.00641C3.21552 2.84138 3.43326 2.73269 3.66816 2.69491C3.90306 2.65714 4.1439 2.69209 4.35838 2.79507L20.6917 10.9617C20.8828 11.0596 21.0432 11.2084 21.1552 11.3916C21.2672 11.5748 21.3264 11.7853 21.3264 12.0001C21.3264 12.2148 21.2672 12.4253 21.1552 12.6086C21.0432 12.7918 20.8828 12.9405 20.6917 13.0384Z"
                          fill="#9BEC00"
                        />
                      </svg>
                    </span>
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

export default BalasPengaduan;
