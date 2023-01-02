import Header from "../common/Header";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export default function AboutUs(){
    return(

      <div className="bg-[#e9edf5] py-14 flex flex-col items-center justify-center ">
      <div className="px-10">
        <Header
          Htitle={" See what our users say about us"}
          Ptitle={"Users love our tax filing service"}
        />
      </div>
      <div className="sm:flex  mt-12  ">
        <div className="w-[300px] h-80 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
          <div className="w-[260px] py-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i, index) => {
                return (
                  <div key={index}>
                    <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                  </div>
                );
              })}
            </div>

            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              You guys are the best, awesome ui, smooth transaction, you
              redefined Indian return filing.
            </div>
          </div>

          <div className="pb-3">
            <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
            <p className="text-base font-semibold text-[#777373]">lorem</p>
          </div>
        </div>

        <div className="w-[300px] h-80 bg-white sm:mx-5 rounded-lg mb-5 flex flex-col justify-between px-10">
          <div className="w-[260px] py-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i, index) => {
                return (
                  <div key={index}>
                    <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                  </div>
                );
              })}
            </div>
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              You guys are the best, awesome ui, smooth transaction, you
              redefined Indian return filing.
            </div>
          </div>

          <div className="pb-3">
            <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
            <p className="text-base font-semibold text-[#777373]">lorem</p>
          </div>
        </div>

        <div className="w-[300px] h-80 bg-white  rounded-lg mb-5 flex flex-col justify-between px-10">
          <div className="w-[260px] py-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i, index) => {
                return (
                  <div key={index}>
                    <StarOutlineIcon style={{ width: 20, marginBottom: 3 }} />
                  </div>
                );
              })}
            </div>
            <div className="text-xl font-semibold">Form-16 Upload</div>
            <div className="text-base text-[#777373]">
              You guys are the best, awesome ui, smooth transaction, you
              redefined Indian return filing.
            </div>
          </div>

          <div className="pb-3">
            <p className="text-lg font-semibold">Lorem, ipsum dolor.</p>
            <p className="text-base font-semibold text-[#777373]">lorem</p>
          </div>
        </div>
      </div>
    </div>
    )
}