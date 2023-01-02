import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _Button from "../components/common/_Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { color } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { Icon } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
export default function TaxFiler() {
  return (
    <div>
      <div className="sm:h-[200px]  bg-[#F7FAFF]  w-full ">
        <div><button className="text-[#377DFF] p-5">Home</button> / Add Tax Filer</div>
      </div>

      <div className="sm:flex sm:justify-evenly sm:pb-16 mt-10">
        <div className="sm:w-[800px] border-2 rounded-xl ">
          <p className="text-xl font-semibold p-8">Add Tax Filer</p>
          <hr />
          <div className="sm:p-8  p-8  ">
            <div className="sm:flex justify-start ">
              <Box className="w-full sm:w-[220px]" sx={{}}>
                <TextField
                  fullWidth
                  label="Pan"
                  id="pan"
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box className="sm:ml-6 w-full sm:w-[220px] mt-4 sm:mt-0" sx={{}}>
                <TextField
                  fullWidth
                  label="Date Of Birth"
                  id="Date Of Birth"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </div>

            <div className="sm:mt-8 mt-4">
              <Box className="sm:w-[465px] w-full" sx={{}}>
                <TextField
                  fullWidth
                  label="johndoe@yopmail.com"
                  id="Email"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </div>

            <div className="sm:flex justify-start sm:mt-8 mt-4">
              <Box className="w-full sm:w-[220px]" sx={{}}>
                <TextField
                  fullWidth
                  label="First Name"
                  id="First Name"
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box className="sm:ml-6 w-full sm:w-[220px] mt-4 sm:mt-0" sx={{}}>
                <TextField
                  fullWidth
                  label="Middle Name"
                  id="Middle Name"
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Box className="sm:ml-6 w-full sm:w-[220px] mt-4 sm:mt-0" sx={{}}>
                <TextField
                  fullWidth
                  label="Last Name"
                  id="Last Name"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </div>
            <div className="sm:flex justify-start sm:mt-8 mt-4">
              <Box className="w-full sm:w-[220px]" sx={{}}>
                <TextField
                  fullWidth
                  label="Gender"
                  id="Gender"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box className="sm:ml-6 w-full sm:w-[220px] mt-4 sm:mt-0" sx={{}}>
                <TextField
                  fullWidth
                  label="Father Name"
                  id="Father Name"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </div>

            <div className="sm:flex justify-start sm:mt-8 mt-4">
              <Box className="w-full sm:w-[220px]">
                <TextField
                  fullWidth
                  label="Mobile Number"
                  id="Mobile Number"
                  variant="outlined"
                  size="small"
                />
                <p className="text-xs text-[#8C98A4] leading-5">
                  WhatsApp number preferred - for updates to tax filing
                </p>
              </Box>

              <Box className="sm:ml-6 w-full sm:w-[220px] mt-4 sm:mt-0">
                <TextField
                  fullWidth
                  label="12 digit Aadhar Number"
                  id="12 digit Aadhar Number"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </div>

            <div className="mt-3">
              <_Button
                title={"Submit"}
                padding={"8px 20px"}
                fontSize={"16px"}
              />
            </div>
          </div>
        </div>
        <div className=" sm:w-64 text-[#8C98A4] mt-5 p-2  ">
          <div className="ml-4 mb-2 flex items-center font-semibold">
          <HelpIcon
              style={{width:18,  color: "#8C98A4" ,marginRight:2 }}
            />
            HELP ARTICLES</div>
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
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#8C98A4",
                }}
              >
                How to Add or Edit a member?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "677788",
                }}
              >
                Click on "ADD" button or "Edit" option as required on dashboard
                page. more
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />
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
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#8C98A4",
                }}
              >
                How to enable ERI manually?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "677788",
                }}
              >
                You need to login to Income-tax portal to activate or
                de-activate ERI. Refer the step-wise guide. more
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />
          <div className="p-4">
            <div className="font-semibold flex items-center"> 
            <WhatsAppIcon style={{width:20,marginRight:2}}/>
            
            CHAT</div>
            <p className="text-xs leading-4 mt-2 tracking-wide">
              For quick assistance chat with our support team.{" "}
              <button className="text-[#377DFF]">Click here to chat</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
