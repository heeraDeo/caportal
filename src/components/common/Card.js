import images from "../../../public/images";
import Image from "next/image";
import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import _Button from "../common/_Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Card(props) {
  return (
 
      <div className=" flex flex-col justify-center items-center  px-8 sm:w-[350px]">
        <Image
          alt="calive"
          className="transform transition-all hover:scale-90"
          src={props.image}
          width={props.imgwidth}
          height={props.imgheight}
        />

        <div className="text-2xl font-semibold   py-4 sm:text-[28px] text-center">
          {props.headertext}
        </div>
        <div className="text-[16px] tracking-wide  text-[#858181] text-center ">
          {props.paragraphtext}
        </div>
        <Button
          className="transform transition-all hover:scale-90 "
          style={{
            textTransform: "none",
            padding: props.padding,
            backgroundColor: props.bgcolor,
            fontSize: 15,
            fontWeight: 500,
            marginTop: 22,
          }}
          variant="contained"
        >
          <div className="mr-1 flex justify-center items-center">
            {props.icon}

            {props.title}
          </div>
        </Button>

        <div className="text-base py-8 text-[#858181] ">
          <div className="flex item-start  pb-2">
            <div>
              <CheckCircleIcon
                style={{ width: 20, marginRight: 6, color: "#377DFF" }}
              />
            </div>
            <div> Upload Form 16 and E-file</div>
          </div>
          <div className="flex item-start pb-2">
            <div>
              {" "}
              <CheckCircleIcon
                style={{ width: 20, marginRight: 6, color: "#377DFF" }}
              />
            </div>

            <div> Review Income-tax records before filing</div>
          </div>
          <div className="flex item-start ">
            <div>
              {" "}
              <CheckCircleIcon
                style={{ width: 20, marginRight: 6, color: "#377DFF" }}
              />
            </div>

            <div> Easy step-wise process</div>
          </div>
        </div>
      </div>
  
  );
}
export default Card;
