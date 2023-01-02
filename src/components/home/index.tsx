import _Button from "../common/_Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import _Box from "../common/box";
import Newcard from "../common/Newcard";
import Header from "../common/Header";
import Hero from "./hero";
import FileITR from "./fileITR";
import ItReturn from "./itReturn";
import TexFilling from "./taxfilling";
import SeePlan from "./seeplan";
import AboutUs from "./aboutUs";
import BrandLogo from "./brandlogo";
import OurPlans from "./ourPlans";
import TaxFilling2 from "./taxfilling2";
import Accordian from "./accordian";
export default function Home() {
  return (
    <div className="bg-[#f8f9fd] ">
      <div className="py-5 ">
        <Hero />
        <FileITR />
      </div>

       <div className="text-center">
        <button className="">
          <div className=" text-center mt-16 text-[#377dff]  flex items-center justify-center">
            <WhatsAppIcon style={{ marginRight: 5, width: 20 }} /> Automated
            WhatsApp Support
          </div>
        </button>
      </div> 
      
      <div className="  py-20 sm:justify-evenly gap-y-14  grid grid-cols-2  sm:grid-cols-4 ">
        <_Box title={"Registered eRI of Income-tax Department"} />
        <_Box title={"Awarded by the Government of India"} />
        <_Box title={"4.70 out of 5 stars from our reviews"} />
        <_Box title={"Over 29,21,626 users and counting"} />
      </div>

      <TexFilling />

      <p className="text-3xl text-center font-semibold mt-10 tracking-normal">
        Here&apos;s how e-filing of ITR with myITreturn works
      </p>
      <div className="mt-8 sm:flex sm:justify-center sm:flex-row   ">
        <Newcard
        width={"350px"}
          Htext={"You answer easy questions"}
          Ptext={
            "Out step-by-step Q&A model makes tax filing easy for you. It also ensures that you do not miss anything."
          }
        />
        <Newcard
             width={"350px"}
          Htext={"We ensure accuracy"}
          Ptext={
            "Our AI engine and backend team ensures that your return is doucble checked for accuracy."
          }
        />
        <Newcard
             width={"350px"}
          Htext={"You get maximum tax refund"}
          Ptext={
            "All this to ensure that you finish tax filing easily and get the maximum possible tax refund."
          }
        />
      </div>

      <SeePlan />

      <div className="mt-36">
        <Header
          Htitle={"Everything you need to file your Income tax return"}
          Ptitle={" Tools and resources for Income tax return filing"}
        />
      </div>

      <ItReturn />
      <AboutUs />
      <BrandLogo />
      <OurPlans />
      <TaxFilling2 />
      <Accordian />
      <div className="py-10 bg-white">
        <div className="sm:flex justify-between py-12 bg-[#161648] items-center sm:px-20 text-[white] ">
          <div className="sm:text-3xl text-xl font-semibold text-center my-2">
            Are you ready to start filing?
          </div>
          <div className="text-center">
            <button className="text-base bg-white font-medium rounded-md py-3 px-5 text-[#000]">
              Start For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
