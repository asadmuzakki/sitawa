import { useContext, useState } from "react"
import { GlobalContext } from "../GlobalContext"
const PopUp = () => {
  const context = useContext(GlobalContext)
  if(!context){
    throw new Error("Global context not found")
  }

  const {state,setState} = context
  const[isClose, setClose] = useState(false)

  const xHandler = () => {
    setClose(!isClose)
    setState((prevState)=>{
      return{
        ...prevState,
        actionHapusPengaduan: !prevState.actionHapusPengaduan
      }
    })
  }
  return (
    <div >
         <div className={`bg-white w-[363px] h-[312px] rounded-md border shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate__animated animate__fadeIn ${state.actionHapusPengaduan ? "" : "hidden"}`}>
        <div className="flex justify-end p-2">
          <button onClick={xHandler} type="button">
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
              width="87"
              height="80"
              viewBox="0 0 87 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  d="M43.5 35.5L23.0188 16.6667L47.125 2.83337L69.4188 16.6667L43.5 35.5Z"
                  fill="#FF8A65"
                />
                <path
                  d="M43.5 35.5L23.0188 16.6667L30.8125 7.83337L69.4188 16.6667L43.5 35.5Z"
                  fill="#FFAB91"
                />
                <path
                  d="M54.15 73H30.225C26.6 73 23.5187 70.6667 22.975 67.3333L15 18H69.375L61.2188 67.3333C60.675 70.6667 57.5938 73 54.15 73Z"
                  fill="#06D001"
                />
                <path
                  d="M68.875 21.6667H18.125C16.1312 21.6667 14.5 20.1667 14.5 18.3333C14.5 16.5 16.1312 15 18.125 15H68.875C70.8688 15 72.5 16.5 72.5 18.3333C72.5 20.1667 70.8688 21.6667 68.875 21.6667Z"
                  fill="#9BEC00"
                />
              </g>
            </svg>
          </span>
        </div>
        <div className=" flex justify-center  mt-2">
          <p className="max-w-[170px] text-center font-bold text-black">
            Apakah anda yakin ingin menghapus pengaduan?
          </p>
        </div>
        <div className="w-full flex justify-center mt-[20px]">
          <button className="w-[81px] h-[25px] rounded-full border-none bg-custom-gradient text-white">
            Ya
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp