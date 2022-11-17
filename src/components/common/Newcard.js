import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { title } from 'process';
let Newcard=(props)=>{
    return(
        <div className=''>

<div className="sm:w-[350px] bg-white mx-2 rounded-lg mb-5">
  <div className="p-5">
<div><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></div>
<div className="text-xl font-semibold py-3 ">{props.Htext}</div>
<div className="text-base text-[#777373]">{props.Ptext}</div>
</div>
</div>
        </div>
    )
}
export default Newcard