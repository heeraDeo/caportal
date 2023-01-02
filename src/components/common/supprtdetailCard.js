import DraftsIcon from "@mui/icons-material/Drafts";
export default function SupportDetailCard(){
    return(
        <div className="sm:w-64 sm:h-44 h-56 bg-white rounded-lg flex flex-col justify-center items-center my-5 sm:my-0">
          <DraftsIcon style={{ width: 45, height: 45, color: "#7fa3f2" }} />
          <p className="text-xl font-semibold mt-1">Email Support</p>
          <p className="text-[#777373] py-2">support@myitreturn.com</p>
        </div>
    )
}