import Image from "next/image";
import images from "../../public/images";
import _Table from "../components/common/table";
import DoneIcon from "@mui/icons-material/Done";
export default function RFAT3() {
  return (
    <div className="flex justify-center items-center flex-col py-10 p-0 ">
      <div className="bg-[#f9fbfe] ">
        <div className="">
          <div className="flex justify-between items-center  mt-8 ">
            <div className="absolute mb-12 ml-5">
              <Image
                src={images.RFlogo}
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </div>
            <div className="ml-16 ">
              <p className="text-[#2f3f90] font-extrabold text-3xl tracking-wider text-center">
                RESCUE FIRST AID TRANING PVT. LTD.
              </p>
              <p className=" text-center tracking-wider text-xs font-bold ">
                DR ATUL B BAND, MBBS, DPH, DCH, AFIH,
                <br />
                CERTYING SURGEON, (GOVT OF MAHARSHTRA), MARINE MEDICAL EXAMINER
                (APPROVED BY GOVT INDIA)
                <br />
                <span className="text-[#2f3f90]">
                  CERTIFYING SURGEON, FIRST AID TRAINING, HI TECH MEDICAL CHECK
                  UPS, OHC MANAGEMENT
                </span>
              </p>
            </div>
          </div>
          <hr className="border-current mt-3"></hr>
          <p className="text-xs text-[#2f3f90] font-semibold text-center mt-2">
            Om Dwarkanath C.H.S., R. No. 9, Plot No. 11, Sector-19A, Nerul-East,
            Navi Mumbai-400 706.
            <br />
            Email :<span className="text-[#1a1aff]">
              {" "}
              mediglob13@gmail.com
            </span>{" "}
            Mob: +91 8956727718 / +91 9969789080
          </p>
        </div>
        <div className="border border-current p-2 mt-2">
          <p className="text-xs font-semibold text-center mt-2">
            Part 3- Certificate of Physical fitness
          </p>
          <table className="table-auto mt-5 text-xs font-normal w-[800px] ">
            <tbody className="">
              <tr className="border  h-8 ">
                <td className="w-10 border  border-current ">
                  {" "}
                  <span className="ml-2">1</span>{" "}
                </td>
                <td className="border border-current w-44 px-2">
                  Certificate Number :{" "}
                </td>
                <td className="border border-current w-72 px-2">
                  SI-MED-002211122
                </td>
                <td className="border border-current w-36 px-2">
                  Checkup Date{" "}
                </td>
                <td className="border border-current w-44 px-2">21-NOV-22</td>
              </tr>
              <tr className="border  h-8 ">
                <td className="w-10 border  border-current ">
                  {" "}
                  <span className="ml-2">1</span>{" "}
                </td>
                <td className="border border-current w-44 px-2">Name : </td>
                <td className="border border-current w-72 px-2">
                  Aniket Gurjar
                </td>
                <td className="border border-current w-36 px-2">
                  Valid Till -{" "}
                </td>
                <td className="border border-current w-44 px-2">21-NOV-23</td>
              </tr>
              <tr>
                <td className="border border-current h-8">
                  <span className="ml-2">2</span>
                </td>
                <td className="border border-current px-2">Company:</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  SAKET INFRASTUCTURE
                </td>
                <td className="border-l-0 border-b border-r border-current px-2"></td>
                <td className="border border-b-transparent  border-current px-2"></td>
              </tr>
              <tr>
                <td className="border h-8 border-current ">
                  <span className="ml-2">3</span>
                </td>
                <td className="border border-current px-2">Gender:</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  Male
                </td>
                <td className="border-l-0 border-b border-r border-current "></td>
                <td className="border border-b-transparent  border-current "></td>
              </tr>
              <tr>
                <td className="border h-8 border-current">
                  <span className="ml-2">4</span>
                </td>
                <td className="border border-current px-2">DOB/AGE :</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  11/10/2000
                </td>
                <td className="border-l-0 border-b border-r border-current "></td>
                <td className="border  border-b-transparent  border-current "></td>
              </tr>
              <tr>
                <td className="border h-8 border-current">
                  <span className="ml-2">5</span>
                </td>
                <td className="border border-current px-2">Fitness:</td>
                <td className="border-t border-r-0 border-b border-current">
                  <span className="ml-3">Fit</span>
                </td>
                <td className="border-l-0 border-b border-r border-current"></td>
                <td className="border border-b  border-current"></td>
              </tr>
            </tbody>
          </table>
          <div className="px-8 text-xs">
            <p className="  mt-5">
              I hereby certify that Mr/Ms.{" "}
              <span className="text-sm font-semibold">ANIKET GURJAR</span>{" "}
              <br />
              has been examined by us, we cannot discover that he / she has got
              any disease, communicable or otherwise, constitutional or <br />
              bodily deformity except __
            </p>

            <p className=" mt-5">Candidate is hereby declared,</p>

            <div className="flex justify-evenly mt-2">
              <div className="flex">
                FIT
                <div className="w-24 h-8 border border-current flex justify-center items-center ml-5">
                  FIT
                </div>
              </div>

              <div className="flex">
                UNFIT
                <div className="w-24 h-8 border border-current  ml-5"></div>
              </div>

              <div className="flex">
                Temporarily UNFIT
                <div className="w-24 h-8 border border-current  ml-5"></div>
              </div>
            </div>

            <p className=" mt-5">for the post of</p>

            <div className=" mt-3 w-72  ">
              <div className="flex justify-between ">
                1. Working on Height
                <div className="w-20 h-6 border border-current flex justify-center items-center ml-5">
                  <DoneIcon style={{ width: 20 }} />
                </div>
              </div>
              <div className="flex justify-between mt-0.5">
                2. Electrical work
                <div className="w-20 h-6 border border-current flex justify-center items-center ml-5">
                  <DoneIcon style={{ width: 20 }} />
                </div>
              </div>
              <div className="flex justify-between mt-0.5">
                3. Material lifting
                <div className="w-20 h-6 border border-current flex justify-center items-center ml-5">
                  <DoneIcon style={{ width: 20 }} />
                </div>
              </div>
              <div className="flex justify-between mt-0.5">
                4. Four wheeler Driving
                <div className="w-20 h-6 border border-current flex justify-center items-center ml-5">
                  <DoneIcon style={{ width: 20 }} />
                </div>
              </div>
            </div>
            <p className="mt-5">
              <span className="font-bold">Vertigo Test:</span> No Giddiness, No
              any other Abnormality seen during the test.
              <br />
              Doctor’s Full Name:{" "}
              <span className="font-bold">DR. ATUL B BAND</span>
            </p>
          </div>
          <div className="flex  mt-2 items-center">
            <div>
              <Image
                src={images.RFlogo}
                alt="Picture of the author"
                width={80}
                height={75}
              />
            </div>

            <div className="text-[#2f3f90] font-semibold text-center   ">
              <div>
                <Image
                  src={images.sigimg}
                  alt="Picture of the author"
                  width={100}
                  height={30}
                />
              </div>
              <p className="text-lg  ">DR. ATUL B. BAND</p>
              <p className="text-xs">MBBS, DPH, DCH, AFIH</p>
              <p className="text-[10px]">
                Indrustrial Health Thysician and Certifying Surgeon <br /> Regn.
                MMC48470
              </p>
            </div>
          </div>
          <p className="text-xs ml-8 ">Seal & Signature:</p>
          <p className="text-xs mt-6">Registration Number: MMC48470</p>
          <p className="text-xs mt-2">Date : 21-NOV-22</p>
        </div>

        <p className="text-xs font-semibold text-center">
          Note : e-verification is mandatory on Email :{" "}
          <span className="text-[#1a1aff]">everifyrfat@gmail.com </span>
        </p>
      </div>
    </div>
  );
}
