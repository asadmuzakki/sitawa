import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import 'animate.css'

const ExitPopup = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error("context not found")
    }
    const {state, setState} = context

    const exitHandler = ()=>{
        setState((prevState)=>{
            return{
                ...prevState,
                actionLogOut:!prevState.actionLogOut
            }
        })

    }
  return (
    <div className="">
      <div
        className={`bg-white w-[363px] h-[312px] rounded-md border shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate__animated animate__fadeIn ${state.actionLogOut?"":"hidden"} `}
      >
        <div className="flex justify-end p-2">
          <button onClick={exitHandler} type="button">
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
          </button>
        </div>
        <div className=" flex justify-center mt-7">
          <span>
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.166687 36.8332V0.166504H18.5459V2.45817H2.45835V34.5415H18.5459V36.8332H0.166687ZM28.7254 26.61L27.1167 24.96L32.4311 19.6457H12.065V17.354H32.4311L27.1144 12.0373L28.7231 10.3919L36.8334 18.4998L28.7254 26.61Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className=" flex justify-center  mt-7">
          <p className="max-w-[170px] text-center font-bold text-black">
            Apakah anda yakin ingin keluar ?
          </p>
        </div>
        <div className="w-full flex justify-center mt-[20px]">
          <button className="w-[81px] h-[25px] rounded-full border-none bg-custom-gradient text-white">
            Ya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
