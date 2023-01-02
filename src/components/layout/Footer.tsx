import React from "react";
import Image from "next/image";
import images from "../../../public/images";
import _Footer from "../common/footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
export default function Footer() {
  return (
    <div className=" flex justify-evenly pr-4 mt-14">
      <div className=" grid  grid-cols-2  sm:grid sm:grid-cols-5 sm:w-[1140px] justify-evenly gap-x-2 gap-y-8 ml-5 ">
        <div className="col-span-2 sm:col-span-1 pr-2 ">
          <Image
            className="  "
            src={images.headerlogo}
            alt="Picture of the author"
            width={190}
            height={50}
          />
          <ul className="text-sm font-medium text-[#71869D] py-8 leading-6">
            <li>
        <LocationOnIcon  style={{width:18, marginRight:5}}/>
              410, Tulsiani Chambers, Nariman Point, Mumbai - 400021,
              Maharashtra, India
            </li>
            <li className="mt-2">
              <button> <PersonIcon style={{width:18, marginRight:5}}/>Support Details</button>
            </li>
          </ul>
        </div>
        <div className=" ">
          <p className="text-base font-semibold pb-3">myITreturn</p>
          <_Footer footerlist={"myITreturn Home"} />
          <_Footer footerlist={"Support"} />
          <_Footer footerlist={"Track Refund"} />
          <_Footer footerlist={"About Us"} />
          <_Footer footerlist={"Privacy Policy"} />
          <_Footer footerlist={"Terms of Use"} />
          <_Footer footerlist={"Refund Policy"} />
          <_Footer footerlist={"Pricing"} />
          <_Footer footerlist={"Team"} />
          <_Footer footerlist={"Branding"} />
          <_Footer footerlist={"Refer & earn"} />
          <_Footer footerlist={"Share with friends"} />
        </div>
        <div className="">
          <p className="text-base font-semibold pb-3">Important Tools</p>
          <_Footer footerlist={"Advance Tax Estimator"} />
          <_Footer footerlist={"Tax Calculator 2023"} />
          <_Footer footerlist={"Tax Calculator 2022"} />
          <_Footer footerlist={"Generate Form 12BB"} />
          <_Footer footerlist={"Generate Rent Receipt"} />
          <_Footer footerlist={"Check Refund Status"} />
          <_Footer footerlist={"Find IFSC Code"} />
          <_Footer footerlist={"HRA Calculator"} />
          <_Footer footerlist={"EMI Calculator"} />
          <_Footer footerlist={"BMI Calculator"} />
        </div>
        <div className=" ">
          <p className="text-base font-semibold ">Corporate</p>
          <_Footer footerlist={"Form-16 Software"} />
          <_Footer footerlist={"Digital Signature"} />
          <_Footer footerlist={"TDS Software"} />
          <_Footer footerlist={"TDS Outsourcing"} />
          <_Footer footerlist={"STACOS"} />
          <_Footer footerlist={"Lexlegis"} />
          <_Footer footerlist={"Teamnest"} />
        </div>
        <div className="">
          <p className="text-base font-semibold  ">Other Links</p>
          <_Footer footerlist={"Last Income tax"} />
          <_Footer footerlist={"return"} />
          <_Footer footerlist={"Notice Assistance"} />
        </div>
        <div className="py-5 col-span-2 sm:col-span-5">
          <hr></hr>
        </div>
        <div className="text-[#71869D] col-span-2 sm:col-span-5 ">
          <p className="text-base py-8">
            © 2022, myITreturn. All rights reserved.
          </p>
          <div className="text-[15px] leading-6 mt-4 ">
            File your Income tax return online with myITreturn. E-filing with
            myitreturn is easy, secure and fast. Upload Form-16 and file within
            15 minutes. myitreturn.com covers salary income, bank and other
            interest income, capital gains, house property income, business and
            professional income. The myitreturn mobile app lets you fil your
            income-tax return from your smart phone. Start filing for free, and
            be assured of maximum refund, guaranteed. We are clearly the best
            tool for individuals to e-file their tax return. We are authorized
            e-return intermediary of the income tax Department, Government of
            India and we are committed to give you the best e-filing experience.
            We are myITreturn.com
            <p className="mt-5">
              Registered with{" "}
              <button className="text-blue-500">incometax.gov.in</button> as a
              registered e-filing intermediary having ERI ID ERIP000249.
              Copyright © 2022 Skorydov Systems Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
