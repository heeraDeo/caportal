
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';const Header=(props)=>{
    return(
<div className="sm:px-10 mt-10">

          <div className="sm:text-3xl text-2xl text-center font-semibold mt-10  ">
          {props.Htitle}
          </div>
          <div className="text-lg text-center p-2 text-[#777373] ">
            {props.Ptitle}
          </div>
        </div>
    )
}
export default Header;