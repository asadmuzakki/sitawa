import React from 'react'
import { useNavigate } from 'react-router-dom'

type propsFromBeranda = {
    bg: string
  }
const PerangkatSidebar
:React.FC<propsFromBeranda> = ({bg}) => {
  const navigate = useNavigate()
  return (
    <div>
         <div className="sidebar h-[100vh]  border-r-[3px] border-[#F7F7F7] ">
        <div className="pt-36">
          <div className="w-[290px] ">
            <div onClick={() => navigate('/')} className={`flex items-center gap-3 mb-5  w-[273px]  h-[54px] rounded-r-[50px] cursor-pointer`}>
              <span className="ml-10">
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 11C11.25 11 16 6.25 16 6C16 5.75 11.25 1 8.5 1C5.75 1 1 5.875 1 6C1 6.125 5.75 11 8.5 11Z"
                    stroke="url(#paint0_linear_2314_53)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 7.25C9.88071 7.25 11 6.13071 11 4.75C11 3.36929 9.88071 2.25 8.5 2.25C7.11929 2.25 6 3.36929 6 4.75C6 6.13071 7.11929 7.25 8.5 7.25Z"
                    stroke="url(#paint0_linear_2314_53)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <p className="text-[#858585] text-[12px] mr-7">Dashboard</p>
            </div>
            {/* icon 2 ------- */}
            <div onClick={() => navigate('/pengaduan-masyarakat')} className="flex items-center gap-3 mb-5 w-[273px] h-[54px] rounded-r-[50px] cursor-pointer">
              <span className="icon2 ml-10">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.09282 1H10.4177C11.5687 1 12.5105 1.94177 12.5105 3.09282V7.38309C12.5105 8.53414 11.5687 9.47591 10.4177 9.47591H6.28436L3.40674 11.9873V9.47591H2.46497C1.62785 9.47591 1 8.84806 1 8.06326V3.09282C1 1.94177 1.94177 1 3.09282 1Z"
                    stroke="url(#paint0_linear_2314_61)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.70845 10.4178C5.70845 10.9934 6.17933 11.4642 6.75486 11.5166L10.365 11.6212L13.2426 14.1326V11.6212H14.1844C14.9692 11.6212 15.6493 10.9934 15.6493 10.1562V5.18579C15.6493 4.03474 14.7076 3.09297 13.5565 3.09297H12.5101"
                    stroke="url(#paint1_linear_2314_61)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2314_61"
                      x1="7.33077"
                      y1="-0.729481"
                      x2="7.92253"
                      y2="18.736"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2314_61"
                      x1="11.1759"
                      y1="1.35526"
                      x2="11.8674"
                      y2="20.9071"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <p className="text-[#858585] text-[12px] mr-7">
                Pengaduan Masyarakat
              </p>
            </div>
            {/* icon 3 ------- */}
            <div onClick={() => navigate('/perangkat-desa')} className={`flex items-center gap-3 mb-5 ${bg} w-[273px]  h-[54px] rounded-r-[50px] cursor-pointer`}>
              <span className="icon3 ml-10">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.05833 9.10833C9.98333 9.10833 11.6167 6.54167 11.6167 4.55833C11.6167 2.575 9.98333 1 8.05833 1C6.075 1 4.5 2.575 4.5 4.55833C4.5 6.54167 6.075 9.10833 8.05833 9.10833Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 8.5834L10.9167 10.3334C12.8417 10.3334 14.4167 11.9084 14.4167 13.8334L15 15.5834H1L1.58333 13.8334C1.58333 11.9084 3.15833 10.3334 5.08333 10.3334L6.25 8.5834"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.08319 10.3334C7.00819 11.9084 8.99152 11.9084 10.9165 10.3334"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2314_53"
                      x1="8.41417"
                      y1="-0.276312"
                      x2="8.93521"
                      y2="14.0831"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2314_53"
                      x1="8.7"
                      y1="7.48155"
                      x2="8.89761"
                      y2="19.8913"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2314_53"
                      x1="8.29152"
                      y1="10.1475"
                      x2="8.30503"
                      y2="12.2421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <p className="text-white text-[12px] mr-7">Perangkat Kecamatan</p>
              {/* icon 4 ------- */}
            </div>
            <div onClick={() => navigate('/hasil-produksi')} className="flex items-center gap-3 mb-5 w-[273px] h-[54px] rounded-r-[50px] cursor-pointer">
              <span className="icon2 ml-10">
                <svg
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.034 18.3265L8.034 6.33822"
                    stroke="url(#paint0_linear_2315_398)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3038 18.3265L11.3038 3.0687"
                    stroke="url(#paint1_linear_2315_398)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.76494 18.3265L4.76494 9.60775"
                    stroke="url(#paint2_linear_2315_398)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.49513 18.3265L1.49513 11.7874"
                    stroke="url(#paint3_linear_2315_398)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 8.24043L8.24043 1"
                    stroke="url(#paint4_linear_2315_398)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2315_398"
                      x1="8.034"
                      y1="12.3323"
                      x2="7.034"
                      y2="12.3323"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2315_398"
                      x1="11.3038"
                      y1="10.6976"
                      x2="12.3038"
                      y2="10.6976"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2315_398"
                      x1="4.76494"
                      y1="13.9671"
                      x2="5.76494"
                      y2="13.9671"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2315_398"
                      x1="1.49513"
                      y1="15.057"
                      x2="2.49513"
                      y2="15.057"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2315_398"
                      x1="4.62021"
                      y1="1"
                      x2="4.62021"
                      y2="8.24043"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <p className="text-[#858585] text-[12px] mr-7">Hasil Produksi</p>
            </div>
            {/* icon 5 ------- */}
            <div className="flex items-center gap-3 mb-5 w-[273px] h-[54px] rounded-r-[50px] cursor-pointer">
              <span className="icon2 ml-10">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8 6.60001L17 6.60001L17 2.60001L13.8 2.60002L13.8 6.60001Z"
                    stroke="url(#paint0_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4 6.75937L15.4 14.7594"
                    stroke="url(#paint1_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.4 9.8L10.6 9.79999L10.6 5.79999L7.39999 5.8L7.4 9.8Z"
                    stroke="url(#paint2_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.7594V14.7594"
                    stroke="url(#paint3_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 1.15936V5.15936"
                    stroke="url(#paint4_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4 1.15936V1.95936"
                    stroke="url(#paint5_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.00002 13L4.20001 13L4.2 8.99998L1.00001 8.99998L1.00002 13Z"
                    stroke="url(#paint6_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.60001 8.99999L2.60001 1"
                    stroke="url(#paint7_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.60001 14.6V13.8"
                    stroke="url(#paint8_linear_2314_43)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2314_43"
                      x1="15.24"
                      y1="7.22964"
                      x2="14.958"
                      y2="0.147774"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2314_43"
                      x1="15.5574"
                      y1="11.1594"
                      x2="13.7842"
                      y2="11.1664"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2314_43"
                      x1="8.83999"
                      y1="10.4296"
                      x2="8.55805"
                      y2="3.34776"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2314_43"
                      x1="9.15741"
                      y1="12.9594"
                      x2="7.38424"
                      y2="12.9735"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2314_43"
                      x1="9.15741"
                      y1="3.35936"
                      x2="7.38424"
                      y2="3.37348"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_2314_43"
                      x1="15.5574"
                      y1="1.59936"
                      x2="13.7869"
                      y2="1.66984"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_2314_43"
                      x1="2.44002"
                      y1="13.6296"
                      x2="2.15807"
                      y2="6.54774"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_2314_43"
                      x1="2.75741"
                      y1="5.39999"
                      x2="0.984167"
                      y2="5.40705"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_2314_43"
                      x1="2.75741"
                      y1="14.24"
                      x2="0.986944"
                      y2="14.3105"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9BEC00" stop-opacity="0.8" />
                      <stop offset="1" stop-color="#06D001" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <p className="text-[#858585] text-[12px] mr-7">Settings</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  mt-[12rem]">
          <button className="flex items-center justify-center gap-2">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83166 5.83332C5.83166 6.29448 6.2055 6.66832 6.66666 6.66832C7.12782 6.66832 7.50166 6.29448 7.50166 5.83332H5.83166ZM7.50166 14.1667C7.50166 13.7055 7.12782 13.3317 6.66666 13.3317C6.2055 13.3317 5.83166 13.7055 5.83166 14.1667H7.50166ZM7.57668 18.1517L7.95576 17.4077L7.95576 17.4077L7.57668 18.1517ZM6.84832 17.4233L6.10433 17.8024H6.10433L6.84832 17.4233ZM16.485 17.4233L17.229 17.8024H17.229L16.485 17.4233ZM15.7566 18.1517L15.3776 17.4077L15.3776 17.4077L15.7566 18.1517ZM15.7566 1.84831L15.3776 2.5923V2.5923L15.7566 1.84831ZM16.485 2.57667L15.741 2.95575L15.741 2.95575L16.485 2.57667ZM6.84832 2.57667L6.10433 2.19759L6.84832 2.57667ZM7.57668 1.84831L7.1976 1.10432L7.57668 1.84831ZM2.49999 9.16499C2.03884 9.16499 1.66499 9.53883 1.66499 9.99999C1.66499 10.4611 2.03884 10.835 2.49999 10.835L2.49999 9.16499ZM11.6667 10.835C12.1278 10.835 12.5017 10.4612 12.5017 9.99999C12.5017 9.53883 12.1278 9.16499 11.6667 9.16499V10.835ZM4.7571 8.09042C5.08318 7.76434 5.08318 7.23564 4.7571 6.90956C4.43101 6.58347 3.90232 6.58347 3.57623 6.90956L4.7571 8.09042ZM2.60947 9.05718L2.01904 8.46675L2.01904 8.46675L2.60947 9.05718ZM2.60947 10.9428L2.01903 11.5332L2.01904 11.5332L2.60947 10.9428ZM3.57623 13.0904C3.90232 13.4165 4.43101 13.4165 4.7571 13.0904C5.08318 12.7643 5.08318 12.2356 4.7571 11.9096L3.57623 13.0904ZM2.05263 9.74247L2.84676 10.0005H2.84676L2.05263 9.74247ZM2.05263 10.2575L2.84676 9.99947L2.05263 10.2575ZM7.50166 5.83332V4.33332H5.83166V5.83332H7.50166ZM9.33333 2.50166H14V0.831657H9.33333V2.50166ZM15.8317 4.33332V15.6667H17.5017V4.33332H15.8317ZM14 17.4983H9.33333V19.1683H14V17.4983ZM7.50166 15.6667V14.1667H5.83166V15.6667H7.50166ZM9.33333 17.4983C8.85284 17.4983 8.54269 17.4977 8.30666 17.4784C8.08038 17.4599 7.99669 17.4285 7.95576 17.4077L7.1976 18.8957C7.51319 19.0565 7.84111 19.1159 8.17067 19.1428C8.49048 19.169 8.8804 19.1683 9.33333 19.1683V17.4983ZM5.83166 15.6667C5.83166 16.1196 5.83101 16.5095 5.85714 16.8293C5.88407 17.1589 5.94353 17.4868 6.10433 17.8024L7.59231 17.0442C7.57145 17.0033 7.54008 16.9196 7.5216 16.6933C7.50231 16.4573 7.50166 16.1471 7.50166 15.6667H5.83166ZM7.95576 17.4077C7.79927 17.3279 7.67204 17.2007 7.59231 17.0442L6.10433 17.8024C6.34417 18.2731 6.72688 18.6558 7.1976 18.8957L7.95576 17.4077ZM15.8317 15.6667C15.8317 16.1471 15.831 16.4573 15.8117 16.6933C15.7932 16.9196 15.7619 17.0033 15.741 17.0442L17.229 17.8024C17.3898 17.4868 17.4493 17.1589 17.4762 16.8293C17.5023 16.5095 17.5017 16.1196 17.5017 15.6667H15.8317ZM14 19.1683C14.4529 19.1683 14.8428 19.169 15.1627 19.1428C15.4922 19.1159 15.8201 19.0565 16.1357 18.8957L15.3776 17.4077C15.3366 17.4285 15.2529 17.4599 15.0267 17.4784C14.7906 17.4977 14.4805 17.4983 14 17.4983V19.1683ZM15.741 17.0442C15.6613 17.2007 15.5341 17.3279 15.3776 17.4077L16.1357 18.8957C16.6064 18.6558 16.9892 18.2731 17.229 17.8024L15.741 17.0442ZM14 2.50166C14.4805 2.50166 14.7906 2.50231 15.0267 2.52159C15.2529 2.54008 15.3366 2.57145 15.3776 2.5923L16.1357 1.10432C15.8201 0.943521 15.4922 0.884063 15.1627 0.857137C14.8428 0.831007 14.4529 0.831657 14 0.831657V2.50166ZM17.5017 4.33332C17.5017 3.88039 17.5023 3.49047 17.4762 3.17066C17.4493 2.84111 17.3898 2.51318 17.229 2.19759L15.741 2.95575C15.7619 2.99668 15.7932 3.08037 15.8117 3.30666C15.831 3.54269 15.8317 3.85283 15.8317 4.33332H17.5017ZM15.3776 2.5923C15.5341 2.67204 15.6613 2.79927 15.741 2.95575L17.229 2.19759C16.9892 1.72687 16.6064 1.34416 16.1357 1.10432L15.3776 2.5923ZM7.50166 4.33332C7.50166 3.85283 7.50231 3.54269 7.5216 3.30666C7.54008 3.08037 7.57145 2.99668 7.59231 2.95575L6.10433 2.19759C5.94353 2.51318 5.88407 2.84111 5.85714 3.17066C5.83101 3.49047 5.83166 3.88039 5.83166 4.33332H7.50166ZM9.33333 0.831657C8.8804 0.831657 8.49048 0.831007 8.17067 0.857137C7.84111 0.884063 7.51319 0.943521 7.1976 1.10432L7.95576 2.5923C7.99669 2.57145 8.08038 2.54008 8.30666 2.52159C8.54269 2.50231 8.85284 2.50166 9.33333 2.50166V0.831657ZM7.59231 2.95575C7.67204 2.79927 7.79927 2.67204 7.95576 2.5923L7.1976 1.10432C6.72688 1.34417 6.34417 1.72687 6.10433 2.19759L7.59231 2.95575ZM2.49999 10.835L11.6667 10.835V9.16499L2.49999 9.16499L2.49999 10.835ZM3.57623 6.90956L2.01904 8.46675L3.19991 9.64761L4.7571 8.09042L3.57623 6.90956ZM2.01904 11.5332L3.57623 13.0904L4.7571 11.9096L3.1999 10.3524L2.01904 11.5332ZM2.01904 8.46675C1.86377 8.62201 1.71136 8.77351 1.59392 8.91184C1.47016 9.05762 1.33704 9.24272 1.25849 9.48445L2.84676 10.0005C2.83004 10.052 2.81033 10.0594 2.86703 9.99262C2.93006 9.91838 3.02516 9.82236 3.19991 9.64761L2.01904 8.46675ZM3.19991 10.3524C3.02516 10.1776 2.93007 10.0816 2.86703 10.0074C2.81033 9.94056 2.83004 9.94802 2.84676 9.99947L1.25849 10.5155C1.33704 10.7573 1.47017 10.9424 1.59392 11.0881C1.71136 11.2265 1.86377 11.378 2.01903 11.5332L3.19991 10.3524ZM1.25849 9.48445C1.14962 9.81952 1.14962 10.1805 1.25849 10.5155L2.84676 9.99947C2.84687 9.99981 2.84687 10.0002 2.84676 10.0005L1.25849 9.48445Z"
                  fill="#181818"
                />
              </svg>
            </span>
            <p className="text-[12px] text-[#858585]">Logout</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PerangkatSidebar
