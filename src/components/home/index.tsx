import images from "../../../public/images";
// import { Button } from "@mui/material";
import _Button from "../common/_Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Card from "../../components/common/card";
import { CleaningServices, PropaneSharp } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import _Box from "../common/box";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Newcard from "../common/Newcard";
import { useState } from "react";
import { convertLength } from "@mui/material/styles/cssUtils";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
export default function Home() {
  const [Input, setInput] = useState(false);
  function call() {
    setInput(!Input);
  }
  console.log(Input);
  return (
    <div className="bg-[#f8f9fd] p-1">
      <button onClick={call} className="text-center">
        login
      </button>
      <div className=" text-center my-8">
        {Input && (
          <div className="text-3xl font-semibold tracking-wide px-5 sm:text-[40px] ">
            Income tax filing made easy
          </div>
        )}
        <div className=" text-base tracking-wider text-[#858181] p-3 sm:mx-96   ">
          Registered eRI of Income-tax Department and award winning platform
          that assures maximum refund
        </div>
      </div>

      <div className="sm:flex sm:justify-center ">
        <Card
          headertext={"File ITR yourself on web"}
          paragraphtext={"Get acknowledgment (ITR-V) in 10 minutes"}
        />
        <div className="my-14 sm:my-0">
          <Card
            headertext={"File ITR with Tax Expert"}
            paragraphtext={"Get Year-round Services of Our Tax Expert"}
          />
        </div>
        <div className="">
          <Card
            headertext={"Get your Notice / Demand resolved"}
            paragraphtext={"Let our Experts handle your Income-tax issues"}
          />
        </div>
      </div>
      <div className=" mt-16 text-[#377dff]  flex items-center justify-center">
        {" "}
        <WhatsAppIcon />
        Automated WhatsApp Support
      </div>

      <div className="  py-20 sm:justify-evenly gap-y-14  grid grid-cols-2  sm:grid-cols-4 ">
        <_Box title={"Registered eRI of Income-tax Department"} />
        <_Box title={"Awarded by the Government of India"} />
        <_Box title={"4.70 out of 5 stars from our reviews"} />
        <_Box title={"Over 29,21,626 users and counting"} />
      </div>

      <div className="py-14 flex flex-col justify-center items-center ">
        <div className="px-5">
          <p className="text-2xl sm:text-3xl text-center font-semibold">
            Have Form-16? Tax filing is even simpler
          </p>
          <p className="text-base text-[#777373] text-center py-2">
            Choose the ITR e-filing method that suits you best
          </p>
        </div>

        <div className="px-10 py-5 rounded-lg sm:flex bg-white mt-16 ">
          <div className="">
            <p className="text-lg font-semibold">Upload Form-16</p>
            <p className="text-sm text-[#777373] mt-1">
              Upload your Form-16 and get your tax return prepared in minutes.
            </p>
            <_Button title={"Upload now >"} />
          </div>
          <div className="sm:w-36 flex justify-center h-10 ">
            <hr className="w-[1px] h-[120px]  sm:bg-[#bebbbb]" />
          </div>
          <div className="">
            <p className="text-lg font-semibold">Upload Form-16</p>
            <p className="text-sm text-[#777373] mt-1">
              Upload your Form-16 and get your tax return prepared in minutes.
            </p>
            <_Button title={"Upload now >"} />
          </div>
        </div>
      </div>

      <p className="text-3xl text-center font-semibold mt-10 tracking-normal">
        Here's how e-filing of ITR with myITreturn works
      </p>
      <div className="mt-8 sm:flex sm:justify-center sm:flex-row flex flex-col items-center ">
        <Newcard
          Htext={"You answer easy questions"}
          Ptext={
            "Out step-by-step Q&A model makes tax filing easy for you. It also ensures that you do not miss anything."
          }
        />
        <Newcard
          Htext={"We ensure accuracy"}
          Ptext={
            "Our AI engine and backend team ensures that your return is doucble checked for accuracy."
          }
        />
        <Newcard
          Htext={"You get maximum tax refund"}
          Ptext={
            "All this to ensure that you finish tax filing easily and get the maximum possible tax refund."
          }
        />
      </div>
      <div className="sm:py-20 flex justify-center">
        <div className="sm:flex sm:justify-evenly mt-24 ">
          <div className="px-5 sm:w-[700px]">
            <p className="sm:text-3xl text-2xl font-semibold">
              Income-Tax Expert Services to help you with ITR return filing
            </p>
            <p className="text-lg text-[#777373] mt-4 tracking-wide">
              Let our tax experts handle tax-filing for you. Just update your
              documents. They will prepare and file your tax returns for you.
              It's that simple.
            </p>
            <_Button title={"See Plan"} />
          </div>
          <div className=" flex justify-center py-5">
            <Image
              src={images.bg2}
              alt="Picture of the author"
              width={380}
              height={380}
              style={{
                position: "absolute",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-36">
        <p className="text-3xl text-center font-semibold mt-10 tracking-normal">
          Everything you need to file your Income tax return
        </p>
        <p className="text-xl text-center p-2 text-[#777373]">
          Tools and resources for Income tax return filing
        </p>
      </div>

      <div className=" sm:grid sm:grid-cols-3 gap-y-8 py-12 content-center place-items-center  px-4">
        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-white mx-3 rounded-lg mb-5 flex justify-evenly ">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] py-5">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>
      </div>




     <div className="bg-[#e9edf5] py-14 flex flex-col items-center justify-center ">
        <div className="px-10">
        <p className="text-3xl text-center font-semibold mt-10 tracking-normal">
          See what our users say about us
        </p>
        <p className="text-lg text-center p-2 text-[#777373]">
          Users love our tax filing service
        </p>
        </div>

        <div className="sm:flex  mt-12  ">
          <div className="w-[320px] h-80 bg-white mx-3 rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>

          <div className="w-[320px] h-80 bg-white mx-3 rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>

          <div className="w-[320px] h-80 bg-white mx-3 rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
