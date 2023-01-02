import Header from "../common/Header"
import _Button from "../common/_Button"
import CheckIcon from "@mui/icons-material/Check";
export default function OurPlans(){
    return(

      <div className="py-8  ">
      <div className="sm:mx-[370px]">
        <Header
          Htitle={"Our Pricing Plans"}
          Ptitle={
            "A small fee to ensure Safe and Accurate Income Tax Filing We do not sell your data like other free portals"
          }
        />
      </div>
      <div className="sm:flex sm:justify-center sm:flex-row mt-16 flex flex-col items-center">
        <div className=" w-80 sm:w-60 bg-white mx-3 rounded-lg mb-5  p-6 ">
          <div className="text-xl font-semibold">Free</div>
          <div className="flex justify-center h-[350px]">
            <ul className="space-y-2 text-sm text-[#777373] mt-2">
              <li>
                <CheckIcon />
                Unemployed
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon /> Student
              </li>
              <li>
                <CheckIcon />
                Retired
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="flex text-lg font-semibold">
              ₹ <div className="pt-1 text-3xl">0</div>
            </div>
            <_Button title={"Start Now"} padding={"10px 60px"} />
          </div>
        </div>

        <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
          <div className="text-xl font-semibold">Free</div>
          <div className="flex justify-center h-[350px]">
            <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
              <li>
                <CheckIcon />
                Unemployed
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon /> Student
              </li>
              <li>
                <CheckIcon />
                Retired
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="flex text-lg font-semibold">
              ₹ <div className="pt-1 text-3xl">0</div>
            </div>
            <_Button title={"Start Now"} padding={"10px 60px"} />
          </div>
        </div>

        <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
          <div className="text-xl font-semibold">Free</div>
          <div className="flex justify-center h-[350px]">
            <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
              <li>
                <CheckIcon />
                Unemployed
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon /> Student
              </li>
              <li>
                <CheckIcon />
                Retired
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="flex text-lg font-semibold">
              ₹ <div className="pt-1 text-3xl">0</div>
            </div>
            <_Button title={"Start Now"} padding={"10px 60px"} />
          </div>
        </div>

        <div className="w-80 sm:w-64 bg-white mx-3 rounded-lg mb-5  p-6 ">
          <div className="text-xl font-semibold">Free</div>
          <div className="flex justify-center h-[350px]">
            <ul className="space-y-2 text-sm text-[#777373] mt-2  w-56 ">
              <li>
                <CheckIcon />
                Unemployed
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon /> Student
              </li>
              <li>
                <CheckIcon />
                Retired
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
              <li>
                <CheckIcon />
                Widow with family pension
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="flex text-lg font-semibold">
              ₹ <div className="pt-1 text-3xl">0</div>
            </div>
            <_Button title={"Start Now"} padding={"10px 60px"}/>
          </div>
        </div>
      </div>
    </div>
    )
}