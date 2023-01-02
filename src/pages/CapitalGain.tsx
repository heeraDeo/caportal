import Image from "next/image";
import * as React from "react";
import _Button from "../components/common/_Button";
import images from "../../public/images";
import Newcard from "../components/common/Newcard";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    // style: {
    //   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //   width: 250,
    // },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function () {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="bg-[#f8f9fd] sm:px-20 mb-16">
      <div className=" flex justify-center flex-col ">
        <div className="sm:flex sm:justify-center sm:flex-row-reverse mt-8 sm:items-center ">
          <div className=" flex justify-center px-5">
            <Image
              src={images.Capital}
              alt="Picture of the author"
              width={550}
              height={400}
            />
          </div>
          <div className="px-5 sm:w-[600px]  ">
            <p className="sm:text-[42px] text-2xl font-bold sm:font-semibold sm:leading-[45px] ">
              Capital Gain Importing Tool for Income-tax return filing
            </p>
            <p className="sm:text-base text-sm tracking-wide text-[#858181] py-3">
              Import your broker Capital Gain template into this page and system
              will auto-read all details and import them into your tax filing
              form.
            </p>
            <div className="sm:flex sm:justify-start text-center mr-3 ">
              <_Button
                title={"Convert Online"}
                padding={"8px 25px"}
                fontSize={"16px"}
              />
              <div className="sm:ml-4">
                <_Button
                  title={"Convert Offline using Excel sheet"}
                  padding={"8px 28px"}
                  fontSize={"16px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-20 mt-8 px-5 py-5">
          <div className="sm:text-3xl text-[21px]  font-bold sm:font-semibold px-6">
            Steps for Converting Online
          </div>
          <div className="mt-3 sm:flex sm:justify-evenly ">
            <div className="sm:w-[260px]  mx-2 rounded-lg mb-5 bg-white">
              <div className="p-5">
                <div>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </div>
                <div className="text-xl font-semibold py-3 ">Step 1</div>
                <div className="text-base text-[#777373] py-2">
                  Select the name of your Broker. If you have multiple brokers,
                  repeat the steps for each broker separately.
                </div>
              </div>
            </div>

            <div className={`sm:w-[260px]  mx-2 rounded-lg mb-5 bg-white`}>
              <div className="p-5">
                <div>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </div>
                <div className="text-xl font-semibold py-3 ">Step 2</div>
                <div className="text-base text-[#777373] py-2">
                  Follow the instructions to download the template from your
                  Broker login. Exactly same file to be downloaded and only non
                  edited excel version to be uploaded.
                </div>
              </div>
            </div>

            <div className={`sm:w-[260px]  mx-2 rounded-lg mb-5 bg-white`}>
              <div className="p-5">
                <div>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </div>
                <div className="text-xl font-semibold py-3 ">Step 3</div>
                <div className="text-base text-[#777373] py-2">
                  Browse and upload the broker template. Please ensure it is
                  excel file that you are uploading.
                </div>
              </div>
            </div>

            <div className={`sm:w-[260px]  mx-2 rounded-lg mb-5 bg-white`}>
              <div className="p-5">
                <div>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </div>
                <div className="text-xl font-semibold py-3 ">Step 4</div>
                <div className="text-base text-[#777373] py-2">
                  Review your Imported details. Rectify if required. Click on
                  "Import" button to finish process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-md mx-8 bg-white mb-5 ">
        <div className="mb-10">
          <p className="text-2xl font-semibold p-8">
            STEP 1: Select Name of Broker
          </p>
          <hr></hr>
          <p className="text-base text-[#777373] mt-1 p-6 tracking-wide">
            Select the name of the broker / trader below. If your broker is not
            listed, click the 'report an error' at the bottom of the page and
            let us know. We will incorporate it for you.
          </p>
          <div className=" sm:w-[350px] px-5 pb-8">
            <FormControl sx={{ width: "100%" }}>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                style={{ height: 45 }}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>--Select--</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
}
