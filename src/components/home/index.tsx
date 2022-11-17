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
import { deepOrange, deepPurple, red } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import Checkicon from "../common/checkicon";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { color } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Header from "../common/Header";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Hero from "./hero";
import FileITR from "./fileITR";
export default function Home() {
  // const [Input, setInput] = useState(false);
  // function call() {
  //   setInput(!Input);
  // }
  // console.log(Input);
  return (
    <div className="bg-[#f8f9fd] ">
      {/* <button onClick={call} className="text-center">
        login
      </button> */}
      {/* {Input && (
          <p className="text-3xl font-semibold tracking-wide px-5 sm:text-[40px] ">
            Income tax filing made easy
          </p>
        )} */}
      <div className="py-5 ">
        <Hero />
        <FileITR />
      </div>
      <div className=" mt-16 text-[#377dff]  flex items-center justify-center">
        <WhatsAppIcon style={{ marginRight: 5, width: 20 }} />
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
          <Header
            Htitle={"Have Form-16? Tax filing is even simpler"}
            Ptitle={" Choose the ITR e-filing method that suits you best"}
          />
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
            <_Button title={"Upload now >"} bgcolor={"#377dff"} />
          </div>
        </div>
      </div>

      <p className="text-3xl text-center font-semibold mt-10 tracking-normal">
        Here&apos;s how e-filing of ITR with myITreturn works
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
      <div className="sm:py-20 flex justify-center ">
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

      <div className="mt-36">
        <Header
          Htitle={"Everything you need to file your Income tax return"}
          Ptitle={" Tools and resources for Income tax return filing"}
        />
      </div>

      <div className=" sm:grid sm:grid-cols-3 gap-y-8 py-12 justify-items-center sm:px-20 px-2 ">
        <div className="sm:sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] ">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] ">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] ">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] ">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px] ">
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              For salaried professionals, the fastest way to file. Upload your
              Form-16 and get your return prepared in minutes. Review and file.
              Upload now.
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] bg-white  rounded-lg mb-5 flex justify-evenly py-5 ">
          <div>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <div className="w-[260px]">
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
          <Header
            Htitle={" See what our users say about us"}
            Ptitle={"Users love our tax filing service"}
          />
        </div>
        <div className="sm:flex  mt-12  ">
          <div className="w-[300px] h-80 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                    </div>
                  );
                })}
              </div>

              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div className="pb-3">
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>

          <div className="w-[300px] h-80 bg-white sm:mx-5 rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                    </div>
                  );
                })}
              </div>
              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div className="pb-3">
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>

          <div className="w-[300px] h-80 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[260px] py-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                    </div>
                  );
                })}
              </div>
              <div className="text-xl font-semibold">Form-16 Upload</div>
              <div className="text-base text-[#777373]">
                You guys are the best, awesome ui, smooth transaction, you
                redefined Indian return filing.
              </div>
            </div>

            <div className="pb-3">
              <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-base font-semibold text-[#777373]">lorem</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-16 ">
        <div className="sm:px-10">
          <Header
            Htitle={"Trusted by employees from over 2000 companies"}
            Ptitle={
              "We are India's oldest income tax e-filing service provider registered with incometax.gov.in"
            }
          />
        </div>

        <div className="px-8  sm:flex sm:justify-evenly sm:w-[1100px] mt-10">
          <Image
          alt="Picture of the author"
            src={images.logo1}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
          alt="Picture of the author"
            src={images.logo2}
            width={180}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
          alt="Picture of the author"
            src={images.logo3}
            width={100}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo4}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo5}
            width={40}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo6}
            width={60}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo7}
            width={130}
            height={60}
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div className=" px-8 sm:flex sm:justify-evenly sm:w-[1100px] ">
          <Image
          alt="Picture of the author"
            src={images.logo1}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
          alt="Picture of the author"
            src={images.logo2}
            width={180}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
          alt="Picture of the author"
            src={images.logo3}
            width={100}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo4}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo5}
            width={40}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo6}
            width={60}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
          alt="Picture of the author"
            src={images.logo7}
            width={130}
            height={60}
            style={{
              position: "absolute",
            }}
          />
        </div>
      </div>

      <div className="py-8">
        <div className="sm:mx-[370px]">
          <Header
            Htitle={"Our Pricing Plans"}
            Ptitle={
              "A small fee to ensure Safe and Accurate Income Tax Filing We do not sell your data like other free portals"
            }
          />
        </div>
        <div className="sm:flex sm:justify-center sm:flex-row mt-16 flex flex-col items-center">
          <div className=" w-80 sm:w-60 bg-white mx-3 rounded-lg mb-5  p-6 ">
            <div className="text-xl font-semibold">Free</div>
            <div className="flex justify-center h-[350px]">
              <ul className="space-y-2 text-sm text-[#777373] mt-2">
                <li>
                  <CheckIcon />
                  Unemployed
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon /> Student
                </li>
                <li>
                  <CheckIcon />
                  Retired
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="flex text-lg font-semibold">
                ₹ <div className="pt-1 text-3xl">0</div>
              </div>
              <_Button title={"Start Now"} padding={"4px 50px"} />
            </div>
          </div>

          <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
            <div className="text-xl font-semibold">Free</div>
            <div className="flex justify-center h-[350px]">
              <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
                <li>
                  <CheckIcon />
                  Unemployed
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon /> Student
                </li>
                <li>
                  <CheckIcon />
                  Retired
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="flex text-lg font-semibold">
                ₹ <div className="pt-1 text-3xl">0</div>
              </div>
              <_Button title={"Start Now"} padding={"4px 50px"} />
            </div>
          </div>

          <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
            <div className="text-xl font-semibold">Free</div>
            <div className="flex justify-center h-[350px]">
              <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
                <li>
                  <CheckIcon />
                  Unemployed
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon /> Student
                </li>
                <li>
                  <CheckIcon />
                  Retired
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="flex text-lg font-semibold">
                ₹ <div className="pt-1 text-3xl">0</div>
              </div>
              <_Button title={"Start Now"} padding={"4px 50px"} />
            </div>
          </div>

          <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
            <div className="text-xl font-semibold">Free</div>
            <div className="flex justify-center h-[350px]">
              <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
                <li>
                  <CheckIcon />
                  Unemployed
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon /> Student
                </li>
                <li>
                  <CheckIcon />
                  Retired
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
                <li>
                  <CheckIcon />
                  Widow with family pension
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="flex text-lg font-semibold">
                ₹ <div className="pt-1 text-3xl">0</div>
              </div>
              <_Button title={"Start Now"} padding={"4px 50px"} />
            </div>
          </div>
        </div>
      </div>
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

      <div className="py-20 bg-white">
        <div className="sm:px-10 mt-10">
          <p className="sm:text-3xl text-2xl text-center font-semibold mt-10 tracking-wide ">
            Frequently Asked Questions - FAQs
          </p>
          <p className="text-lg text-center p-2 text-[#777373] sm:mx-[370px]">
            Here are some very common questions that we are asked
          </p>
        </div>
        <div className="mt-10 sm:px-56">
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                What are the main stages in individual income-tax return
                preparation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                How to check If I have filed my Income tax return?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                I have not filed my Income Tax return for FY 2020-21 (last
                year), what should I do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                What is e-Verification of ITR?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                What is e-Verification of ITR?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<SentimentSatisfiedAltIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                What is e-Verification of ITR?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
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
