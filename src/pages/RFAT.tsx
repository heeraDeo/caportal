import Image from "next/image";
import images from "../../public/images";
import _Table from "../components/common/table";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RFAT() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(1);

  // useEffect(() => {
  //   alert("I m immortal");
  // }, [nums]);

  useEffect(() => {

    // Anything in here is fired on component mount.
    return () => {
      
      console.log("first");
    };
  }, []);

  // const add = () => {
  //   setNum(num + 1);
  // };

  return (
    <div className="w-56 flex justify-center flex-col items-center">
      <button
        onClick={() => {
          navigator;
          // setNum(num + 1);
        }}
      >
        hello{num}
      </button>

      <Link href={'/login'}>
        <div>Push to next</div>
      </Link>

      {/* <button  onClick={()=>{
      setNum(num+1);
     }
     } >
      hello{num}
      </button> */}
      {/* <div className="flex justify-center">
        <div className="py-2 px-10 bg-blue-700 text-white text-2xl text-center">
          {num}
        </div>
        <div className="py-2 px-10 bg-blue-700 text-white text-2xl text-center">
          {nums}
        </div>
      </div>
      <br></br>
      <div className="flex justify-center">
        <button className="text-lg  px-12 bg-red-300 text-white" onClick={add}>
          Click Me
        </button>
        <button
          className="text-lg  px-12 bg-pink-300 text-white"
          onClick={() => {
            setNums(nums * 2);
          }}
        >
          Click Me
        </button>
      </div> */}
    </div>
  );

  return (
    <div className="flex justify-center items-center flex-col py-10 p-0  ">
      <div className="bg-[#f9fbfe] ">
        <div className=" ">
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

        <div className="">
          <div className="absolute mb-12  right-[305px] mt-10 ">
            <Image
              src={images.bg2}
              alt="Picture of the author"
              width={120}
              height={140}
            />
          </div>
          <div className="absolute mb-12  right-[370px] mt-36  ">
            <Image
              src={images.Stamp}
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </div>
          <table className="table-auto mt-5 text-sm font-semibold w-[800px] ">
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
                <td className="border border-current w-36 px-2">Date : </td>
                <td className="border border-current w-44 px-2">21-NOV-22</td>
              </tr>
              <tr>
                <td className="border border-current h-8">
                  <span className="ml-2">2</span>
                </td>
                <td className="border border-current px-2">Name :</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  Aniket Gurjar
                </td>
                <td className="border-l-0 border-b border-r border-current px-2"></td>
                <td className="border border-b-transparent  border-current px-2"></td>
              </tr>
              <tr>
                <td className="border h-8 border-current ">
                  <span className="ml-2">3</span>
                </td>
                <td className="border border-current px-2">Company :</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  SAKET INFRASTUCTURE
                </td>
                <td className="border-l-0 border-b border-r border-current "></td>
                <td className="border border-b-transparent  border-current "></td>
              </tr>
              <tr>
                <td className="border h-8 border-current">
                  <span className="ml-2">4</span>
                </td>
                <td className="border border-current px-2">Location :</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  Gwalior
                </td>
                <td className="border-l-0 border-b border-r border-current "></td>
                <td className="border  border-b-transparent  border-current "></td>
              </tr>
              <tr>
                <td className="border h-8 border-current">
                  <span className="ml-2">5</span>
                </td>
                <td className="border border-current px-2">Client Account :</td>
                <td className="border-t border-r-0 border-b border-current"></td>
                <td className="border-l-0 border-b border-r border-current"></td>
                <td className="border border-b-transparent  border-current"></td>
              </tr>
              <tr>
                <td className="border h-8 border-current">
                  <span className="ml-2">6</span>
                </td>
                <td className="border border-current px-2">Gender :</td>
                <td className="border-t border-r-0 border-b border-current px-2">
                  Male
                </td>
                <td className="border-l-0 border-b border-r border-current"></td>
                <td className="border   border-current"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[800px] border border-current border-t-transparent p-5">
          <p className="text-xl py-3 text-center font-Abril">
            Part 1 - To be filled in by Candidate before Medical Examination
          </p>

          <div className="flex justify-between items-center">
            <p className="text-sm mt-5">
              <span className="mr-5">1.</span> Are you currently being treated
              by a health professional for any illness or injury?
            </p>
            <div className="flex justify-between ">
              <div className="">
                <p className=" font-bold text-center mb-2">NO</p>
                <div className="w-14 h-10 border border-current flex justify-center items-center ">
                  <Image
                    src={images.checkmark}
                    alt="Picture of the author"
                    width={20}
                    height={22}
                  />
                </div>
              </div>
              <div className="ml-5">
                <p className=" font-bold text-center mb-2">YES</p>
                <div className="w-14 h-10 border border-current"></div>
              </div>
            </div>
          </div>
          <_Table
            number={"2"}
            title={"Do you use any drugs or medications prescribed by Doctor?"}
          />
          <_Table
            number={"3"}
            title={
              "Do you use any drugs or medications not prescribed by Doctor?"
            }
          />
          <_Table
            number={"4"}
            title={"Do you use any drugs or medications prescribed by Doctor?"}
          />
          <_Table number={"5"} title={"Do you have heart disease"} />
          <_Table
            number={"6"}
            title={"Do you have vertigo or fear of heights"}
          />
          <_Table number={"7"} title={"Do you have sleep disorder"} />
          <_Table number={"8"} title={"Do you have Epilepsy"} />
          <_Table
            number={"9"}
            title={
              "Have you ever had any serious injury, illness, operation, or been in hospital for any reason?"
            }
          />
          <_Table number={"10"} title={"Have you ever been blackout/fainted"} />
          <_Table number={"11"} title={"Do you drink alcohol?"} />
          <div className="flex justify-between px-5 mt-3 text-center ">
            <div className="">
              <div className="w-40 h-8 border border-current text-xs font-bold flex items-center justify-center">
                Date
              </div>
              <div className="w-40 h-12 border border-current mt-1 text-sm flex items-center justify-center">
                {" "}
                21-NOV-22
              </div>
            </div>
            <div>
              <div className="w-40 h-8 border border-current text-xs font-bold flex items-center justify-center">
                Signature
              </div>
              <div className="w-40 h-12 border border-current mt-1 text-sm flex items-center justify-center">
                Sd/-
              </div>
            </div>
            <div>
              <div className="w-48 h-8 border border-current text-xs font-bold flex items-center justify-center">
                Left Hand Thumb impression
              </div>
              <div className="w-48 h-12 border border-current mt-1"></div>
            </div>
          </div>
        </div>
        <p className="text-xs font-semibold text-center">
          Note : e-verification is mandatory on Email :{" "}
          <span className="text-[#1a1aff]">everifyrfat@gmail.com </span>
        </p>
      </div>
    </div>
  );
}
