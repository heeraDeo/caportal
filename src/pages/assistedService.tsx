import Image from "next/image";
import * as React from "react";
import _Button from "../components/common/_Button";
import images from "../../public/images";
import CheckIcon from "@mui/icons-material/Check";
import WhatsAppIcon from "@mui/icons-material/Check";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Header from "../components/common/Header";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, red, yellow } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
export default function AssistedService() {
  return (
    <div className="bg-[#f6f7fe]">
      <div className="sm:flex sm:justify-center sm:flex-row-reverse mt-8 sm:items-center flex flex-col-reverse py-16 ">
        <div className=" flex justify-center px-5">
          <Image
            src={images.bg2}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="px-5 sm:w-[600px]  ">
          <p className="sm:text-[42px] text-2xl font-bold sm:font-semibold sm:leading-[45px] ">
            Year-round Services of Tax Expert
          </p>
          <p className="sm:text-base text-sm tracking-wide  py-3">
            Leave all your Tax-filing work with us. Our CPAs and Tax-Experts
            will review your documents and file your return for you. Sit back
            and relax, and let us do the heavy lifting for you. You can get help
            for:
          </p>
          <div className="text-[#858181] text-base">
            <div className="mb-2">
              <CheckIcon
                style={{ color: "#377dff", width: 15, marginRight: 10 }}
              />
              Tax Filing
            </div>
            <div className="mb-2">
              <CheckIcon
                style={{ color: "#377dff", width: 15, marginRight: 10 }}
              />
              Notice Assistance
            </div>
            <div className="mb-2">
              <CheckIcon
                style={{ color: "#377dff", width: 15, marginRight: 10 }}
              />
              Refunds Assistance
            </div>
            <div className="mb-2">
              <CheckIcon
                style={{ color: "#377dff", width: 15, marginRight: 10 }}
              />
              Tax Planning
            </div>
            <div className="mb-2">
              <CheckIcon
                style={{ color: "#377dff", width: 15, marginRight: 10 }}
              />
              Tax Queries
            </div>
          </div>
          <div className="sm:flex sm:justify-start text-center mr-3 ">
            <_Button
              title={"Login and Continue"}
              padding={"8px 25px"}
              fontSize={"16px"}
            />
            <div className="sm:ml-4">
              <_Button
                title={"Start Now"}
                padding={"8px 85px"}
                fontSize={"16px"}
                bgcolor={"#00c9a7"}
                icon={<WhatsAppIcon style={{ width: 20, marginRight: 5 }} />}
              />
              <p className="text-[#858181] text-sm py-2 mb-5">
                {" "}
                or WhatsApp us on +91-9113783671
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-3xl font-semibold text-center mt-10">How It Works</p>
      <div className="sm:flex  mt-10 justify-evenly sm:mx-24 mb-20">
        <div className=" flex justify-evenly  sm:flex-col ">
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col justify-evenly items-center pb-5 ">
            <div className="w-12 h-12 rounded-full bg-[#cfd6f4] flex items-center justify-center">
              <span className="text-[#377dff]">1</span>
            </div>
            <div className="border border-slate-300 sm:w-48 sm:h-0 h-48 w-0 bg-slate-600 "></div>
          </div>
          <div className="w-[250px]  bg-white  rounded-lg mb-5 flex justify-evenly py-5">
            <div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
            <div className="sm:w-[120px] sm:h-[400px] w-[180px] ">
              <div className="text-xl font-semibold">
                Purchase plan and upload documents and details
              </div>
              <div className="text-base text-[#777373] my-2 mt-2 tracking-wide">
                Upload your documents securely using email or WhatsApp. The
                documents needed will be shared in your interaction with the tax
                expert.
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-evenly  sm:flex-col  ">
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col justify-evenly items-center pb-5 ">
            <div className="w-12 h-12 rounded-full bg-[#cfd6f4] flex items-center justify-center">
              <span className="text-[#377dff]">2</span>
            </div>
            <div className="border border-slate-300 sm:w-48 sm:h-0 h-48 w-0 bg-slate-600 "></div>
          </div>
          <div className="w-[250px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
            <div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
            <div className="sm:w-[120px] sm:h-[400px] w-[180px]  ">
              <div className="text-xl font-semibold">
                Clarify doubts with the assigned tax expert
              </div>
              <div className="text-base text-[#777373] my-2 mt-2 tracking-wide">
                Our Tax Experts will clarify doubts over email, WhatsApp or
                call. Our platform makes it easy to communicate and resolve
                queries.
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-evenly  sm:flex-col  ">
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col justify-evenly items-center pb-5 ">
            <div className="w-12 h-12 rounded-full bg-[#cfd6f4] flex items-center justify-center">
              <span className="text-[#377dff]">3</span>
            </div>
            <div className="border border-slate-300 sm:w-48 sm:h-0 h-48 w-0 bg-slate-600 "></div>
          </div>
          <div className="w-[250px]  bg-white  rounded-lg mb-5 flex justify-evenly py-5">
            <div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
            <div className="sm:w-[120px] sm:h-[400px] w-[180px] ">
              <div className="text-xl font-semibold">
                Review and approve your return
              </div>
              <div className="text-base text-[#777373] my-2 mt-2 tracking-wide">
                Once your return is prepared, our tax expert will send a summary
                to you. They will file your return once you approve it and send
                ITR-V to you
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-evenly  sm:flex-col  ">
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col justify-evenly items-center pb-5 ">
            <div className="w-12 h-12 rounded-full bg-[#cfd6f4] flex items-center justify-center">
              <span className="text-[#377dff]">4</span>
            </div>
            <div className="border border-slate-300 sm:w-48 sm:h-0 h-48 w-0 bg-slate-600 "></div>
          </div>
          <div className="w-[250px] bg-white  rounded-lg mb-5 flex justify-evenly py-5">
            <div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
            <div className="sm:w-[120px] sm:h-[400px] w-[180px]">
              <div className="text-xl font-semibold">
                Planning for Next year
              </div>
              <div className="text-base text-[#777373] my-2 mt-2 tracking-wide">
                Once your return is filed, we will support for post filing
                services like Refund Assistance or Notice Assistance (if any) as
                well as Tax Saving plans for next year Tax Filing
              </div>
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
          <div className="w-[350px] h-56 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[280px] py-5">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon
                        style={{ width: 20, marginBottom: 3, color: "#f5ca99" }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="text-base text-[#777373]">
                Really easy! They discussed and filed my return solving all my
                queries. Thanks team!
              </div>
            </div>

            <div className="pb-3">
              <p className="text-base font-semibold">Amol Verma</p>
              <p className="text-sm font-semibold text-[#777373]">Pune</p>
            </div>
          </div>

          <div className="w-[350px] h-56 bg-white sm:mx-5 rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[280px] py-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon
                        style={{ width: 20, marginBottom: 3, color: "#f5ca99" }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="text-base text-[#777373]">
                Tax experts know what we need and it is a good and easy to use
                service.
              </div>
            </div>

            <div className="pb-3">
              <p className="text-base font-semibold">Preeti Singh</p>
              <p className="text-sm font-semibold text-[#777373]">Bangalore</p>
            </div>
          </div>

          <div className="w-[350px] h-56 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
            <div className="w-[280px] py-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i, index) => {
                  return (
                    <div key={index}>
                      <StarOutlineIcon
                        style={{ width: 20, marginBottom: 3, color: "#f5ca99" }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="text-base text-[#777373]">
                At first it seemed expensive, but the service was worth it. I
                would recommend it.
              </div>
            </div>

            <div className="pb-3">
              <p className="text-base font-semibold">K Swamy</p>
              <p className="text-sm font-semibold text-[#777373]">Namakkal</p>
            </div>
          </div>
        </div>
      </div>


      <div className="p-5 sm:py-16 bg-white">
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
    </div>
  );
}
