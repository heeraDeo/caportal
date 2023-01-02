import Image from "next/image"
import images from "../../../public/images"
export default function TaxFilling2(){
    return(
        <div className=" flex justify-center px-5 py-20">
        <div className="sm:flex sm:justify-evenly sm:flex-row-reverse  flex flex-col-reverse bg-white rounded-xl ">
          <div className="px-5 sm:w-[700px] sm:mr-20 text-center sm:flex sm:flex-col sm:justify-center sm:text-start">
            <p className="text-base text-[#f04c4c] mt-4 tracking-wide">
              Free Tax Assistance for everyone
            </p>
            <p className="sm:text-3xl text-2xl font-semibold">
              Income-Tax Expert Services to help you with ITR return filing
            </p>
            <p className="text-base text-[#777373] mt-4 tracking-wide">
              You get full access to our Tax Experts on Chat, 1000+ Income Tax
              Article Guides, and Customer Support for any technical issue with
              option to upgrade to full Tax Expert Services.
            </p>
          </div>
          <div className=" flex justify-center p-5">
            <Image
              className="rounded-md w-full h-full"
              src={images.bg3}
              alt="Picture of the author"
              width={260}
              height={260}
            />
          </div>
        </div>
      </div>
    )
}