import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { title } from "process";
let Newcard = (props) => {
  console.log(props)
  return (
    
    <div className={`w-[${props.width}]  mx-2 rounded-lg mb-5 bg-white`}  >
      <div className="p-5">
        <div>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </div>
        <div className="text-xl font-semibold py-3 ">{props.Htext}</div>
        <div className="text-base text-[#777373]">{props.Ptext}</div>
      </div>
    </div>
  );
};
export default Newcard;
