import images from "../../../public/images"
import Image from "next/image"
export default function _Table(props){
    return(
        <div className="flex justify-between  items-center mt-0.5">
        <p className="text-sm ">
        <span className="mr-5">{props.number}.</span>{props.title}
        </p>
        <div className="flex justify-between ">
          <div className="">
          <div className="w-14 h-10 border border-current flex justify-center items-center">
          <Image
              src={images.checkmark}
              alt="Picture of the author"
              width={20}
              height={22}
            />
          </div>
          </div>
          <div className=" ml-5">
            <div className="w-14 h-10 border border-current"></div>
          </div>
        </div>
      </div>
    )
}