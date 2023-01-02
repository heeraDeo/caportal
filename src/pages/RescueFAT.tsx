import React from "react";
import Image from "next/image";
import images from "../../public/images";
export default function RescueFAT() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  border-2 flex justify-center items-center p-5 w-[800px]">
        <div className=" border-2 bg-[#f9fbfe] w-[770px] ">
          <div className="h-4 bg-yellow-400 ">
            <p className="text-center  mx-48 bg-white">
              Certificate No. : ZTPL-FAT-008211122
            </p>
          </div>
          <div className="flex justify-evenly items-center px-14 mt-4 ">
            <div>
              <Image
                src={images.RFlogo}
                alt="Picture of the author"
                width={80}
                height={80}
              />
            </div>
            <div>
              <p className="text-[#374aab] font-extrabold text-2xl tracking-wider">
                RESCUE FIRST AID TRANING PVT. LTD.
              </p>
              <p className=" text-center tracking-wider">
                FIRST AID EMERGENCY AND PREPAREDNESS TRAINING
              </p>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-[#374aab] text-center mb-5 font-Certificate ">
            Certificate of Participation
          </p>
          <div className="flex justify-evenly items-center text-[15px]">
            <div className=" flex justify-center pl-5">
              <div className=" absolute z-10 mt-28 mr-28">
                <Image
                  src={images.Stamp}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                />
              </div>
              <div className="border-2 border-current rounded-2xl ">
                <Image
                  className="rounded-2xl"
                  src={images.bg2}
                  alt="Picture of the author"
                  width={120}
                  height={140}
                />
              </div>
            </div>
            <div>
              <div className="w-[350px]">
                <div className="flex justify-between ">
                  <p>Mr./Ms.</p>

                  <p className="text-start  w-64">: PILLA VENKATESWARLU</p>
                </div>
                <div className="flex justify-between mt-1">
                  <p>Designation </p>

                  <p className="  w-64">: Engineer</p>
                </div>
                <div className="flex justify-start  mt-1">
                  <p>Employee ID</p>

                  <p className="  ml-2 ">: ZTPL-2237</p>
                </div>
                <div className="flex justify-between  mt-1">
                  <p>Held at</p>

                  <p className="  w-64">: HYDERABAD</p>
                </div>

                <div className="flex justify-between  mt-1">
                  <p>Company </p>

                  <p className="  w-64">: ZONTA TECHNOLOGIES PVT LTD</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-current rounded-2xl ">
              <Image
                className="rounded-2xl"
                src={images.bg3}
                alt="Picture of the author"
                width={120}
                height={140}
              />
            </div>
          </div>

          <div className="text-center text-[15px] py-5 leading-7 ">
            This is to certify that the above named participant has successfully
            completed the <br />
            <span className="italic font-semibold">
              “FIRST AID EMERGENCY AND PREPAREDNESS TRAINING"
            </span>{" "}
            Programme <br />
            with Grade : <span className="font-bold">Excellent</span>
          </div>

          <div className="flex justify-evenly ">
            <div className="text-[15px] pt-3">
              DATE : <span className="font-semibold">21 NOV 2022</span>
            </div>
            <div className="text-[10px] pt-10">
              Note : e-verification is mandatory on Email :
              everifyrfat@gmail.com{" "}
            </div>

            <div className="">
              <div className="absolute bottom-20 mt-2">
                <Image
                  className="rounded-2x "
                  src={images.sigimg}
                  alt="Picture of the author"
                  width={130}
                  height={50}
                  color="#374aab"
                />
              </div>
          
              <p className="italic text-sm"> Chief Learning Officer</p>
              <p className="font-semibold">DR. ATUL B. BAND.</p>
              <p className="text-[10px] mb-3"> MBBS,DPH,DCH,AFIH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
