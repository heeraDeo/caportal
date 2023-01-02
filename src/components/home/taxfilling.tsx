import Header from "../common/Header"
import _Button from "../common/_Button"
export default function TexFilling(){
    return(
        <div className="py-14 flex flex-col justify-center items-center ">
        <div className="px-5">
          <Header
            Htitle={"Have Form-16? Tax filing is even simpler"}
            Ptitle={" Choose the ITR e-filing method that suits you best"}
          />
        </div>

        <div className="px-10 py-5 rounded-lg sm:flex bg-white mt-16 ">
          <div className="sm:w-[450px]">
            <p className="text-lg font-semibold">Upload Form-16</p>
            <p className="text-sm text-[#777373] mt-1">
              Upload your Form-16 and get your tax return prepared in minutes.
            </p>
            <_Button title={"Upload now >"}
                  padding={"8px 25px"} />
          </div>
          <div className="sm:w-36 flex justify-center h-10 ">
            <hr className="w-[1px] h-[100px]  sm:bg-[#bebbbb]" />
          </div>
          <div className="sm:w-[450px]">
            <p className="text-lg font-semibold">Download App</p>
            <p className="text-sm text-[#777373] mt-1">
            Salaried tax filers can file using our mobile app.
            </p>
            <_Button title={"Download App >"} bgcolor={"#377dff"}
             padding={"8px 20px"} />
          </div>
        </div>
      </div>
    )
}