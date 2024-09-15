import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import 'animate.css'
import checklist from '../../assets/checklist-check-approve-ok-approved-list-svgrepo-com.png'
import { useNavigate } from "react-router-dom";

const AddPopUp = () => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error("context not found")
    }
    const {state, setState} = context
    const navigate = useNavigate()

    const exitHandler = ()=>{
        setState((prevState)=>{
            return{
                ...prevState,
                actionAddData:!prevState.actionAddData
            }
        })
        navigate("/")

    }
  return (
    <div className="">
      <div
        className={`addPopup bg-white w-[363px] h-[312px] rounded-md border shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate__animated animate__fadeIn  ${state.actionAddData ? "" : "hidden"}`}
      >
        <div className="flex justify-end p-2">
          
        </div>
        <div className=" flex justify-center mt-2">
            <div className="flex justify-center items-center ">

          <img className="w-[140px] h-[140px] object-cover" src={checklist}   alt="" />
            </div>
        </div>
        <div className=" flex justify-center  mt-2">
          <p className="max-w-[170px] text-center font-bold text-black">
            Pengaduan Anda Berhasil !!!
          </p>
        </div>
        <div className="p w-full flex justify-center mt-[20px]">
          <button onClick={exitHandler} className="py-2 px-7 rounded-full border-none bg-custom-gradient text-white">
            Oke
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPopUp;
