import images from "../../../public/images"
// import { Button } from "@mui/material";
import _Button from "../common/_Button"
function Card(props){
    return(
        <div>
 <div className=" flex flex-col justify-center items-center  px-8 sm:w-96 " >
            <div
              className="bg-center"
              style={{
                backgroundImage: `url(${images.bg1})`,
                height: 120,
                width: 180,
              }}
            >
              image
            </div>
            <div className="text-2xl font-semibold tracking-wide py-4 sm:text-3xl text-center">{props.headertext}</div>
            <div className="text-base tracking-wider  text-[#858181] text-center ">{props.paragraphtext}</div>
            <_Button
            title={"Start For Free"}
            />

            <div className="text-lg mt-5 text-[#858181]">
            <ul className="list-disc">

              <li>Upload Form 16 and E-file</li>
              <li>Review Income-tax records before filing</li>
              <li>Easy step-wise process</li>
            </ul>
          </div>
          </div>
        </div>

    )
}
export default Card;