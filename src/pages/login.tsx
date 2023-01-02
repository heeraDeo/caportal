import Image from "next/image";
import images from "../../public/images";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import _Button from "../components/common/_Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });
  

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-3 flex flex-col justify-center items-center">
      <div className="mt-10 sm:w-1/3 w-full ">
        <p className="text-[22px] text-center font-semibold">
          Sign up to myITreturn Income tax efiling
        </p>
        <p className="text-sm text-center font-semibold text-[#999] mt-1">
          Login to myITreturn income tax return filing account
        </p>

        <div className="text-[16px] text-[#377dff]  mt-10 bg-[#377DFF1A] rounded-md hover:bg-[#377dff] hover:text-white cursor-pointer">
          <div className="py-[14px] text-center    tracking-wider flex justify-center ">
            <Image
              src={images.googleicon}
              alt="Picture of the author"
              width={16}
              height={16}
            />
            <p className="ml-2"> Log in with Google</p>
          </div>
        </div>
        <div className=" text-[14px] text-[#8C98A4] mt-1 pl-1 ">
          Google login may not work on some machines. Use email to login or{" "}
          <button className="text-[#377dff]"> sign up </button> as a new user
        </div>

        <div className=" mt-10 flex justify-between items-center">
          <hr className="bg-slate-400 h-[2px] sm:w-48 w-36 "></hr>
          <div className="text-[#8494a5]">OR</div>
          <hr className="bg-slate-400 sm:w-48 w-36 h-[2px]"></hr>
        </div>

        <div className="mt-10">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              marginBottom: 2,
            }}
          >
            <TextField fullWidth label="Your email" id="fullWidth" />
          </Box>
          <div className="text-right">
            <button className="py-2 font-bold text-[#377dff] text-sm">
              Forgot Password?
            </button>
          </div>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className="full bg-[#377dff] item-center text-white cursor-pointer rounded-md mt-6 ">
          <p className="text-center py-3.5"> Continue</p>
        </div>
        <p className="text-center text-[#757474] mt-4">
          {" "}
          Don't have an account yet?
        </p>
        <div className="text-[16px] text-[#377dff]   flex justify-center items-center py-4 ">
          <p className=" hover:bg-[#377dff] hover:text-white cursor-pointer py-2.5 text-center sm:w-1/2 w-52 bg-[#377DFF1A] rounded-md">
            New User? Sign up here
          </p>
        </div>
      </div>

      <div className="sm:px-10 mt-10">
        <p className="sm:text-3xl text-2xl text-center font-semibold mt-10 tracking-wide ">
          Common Questions
        </p>
      </div>
      <div className="mt-10  sm:mb-20">
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
              Is myITreturn authorised eRI by incometax.gov.in?
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
              Is my data safe with myITreturn?
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
              What if I forget my username or password?
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
              What if Google Sign In does not work?
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
              Do I have to enter my Income-tax website credentials on this page?
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
  );
}
