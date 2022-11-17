import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
//  let Box=(props)=>{                //arrow
    const _Box=function(props){         //expression
    // function Box(props){           //declaration
    return(
        <div>
            <div className="flex flex-col items-center justify-center">
<div className='mb-2'><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></div>
<div className="text-[#858181] text-center  w-40 sm:w-44">{props.title}</div>
</div>
        </div>
    )
}
export default _Box;