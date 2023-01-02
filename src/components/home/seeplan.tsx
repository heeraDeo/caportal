import Image from "next/image"
import _Button from "../common/_Button"
import images from "../../../public/images"
export default function SeePlan(){
    return(
        <div className="sm:py-16 flex justify-center ">
        <div className="sm:flex sm:justify-evenly mt-24">
          <div className="px-5 sm:w-[700px]">
            <p className="sm:text-3xl text-2xl font-semibold">
              Income-Tax Expert Services to help you with ITR return filing
            </p>
            <p className="text-lg text-[#777373] mt-4 tracking-wide">
              Let our tax experts handle tax-filing for you. Just update your
              documents. They will prepare and file your tax returns for you.
              It&apos;s that simple.
            </p>
            <_Button title={"See Plan"} padding={"6px 30px"} />
          </div>
          <div className=" flex justify-center p-4 sm:p-0">
            <Image
              src={images.bg2}
              alt="Picture of the author"
              width={380}
              height={380}
            />
          </div>
        </div>
      </div>

    )
}