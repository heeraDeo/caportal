import Header from "../common/Header"
import Image from "next/image"
import images from "../../../public/images"
let BrandLogo=()=>{
    return(
        <div className="flex flex-col justify-evenly items-center sm:py-14 px-5">
        <Header
          Htitle={"Trusted by employees from over 2000 companies"}
          Ptitle={
            "We are India's oldest income tax e-filing service provider registered with incometax.gov.in"
          }
        />

        <div className="  sm:flex sm:justify-evenly mb-5  mt-10  sm:w-[1000px]">
          <Image 
            alt="Picture of the author"
            src={images.logo1}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image className=""
            alt="Picture of the author"
            src={images.logo2}
            width={180}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
            alt="Picture of the author"
            src={images.logo3}
            width={100}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo4}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo5}
            width={40}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo6}
            width={60}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo7}
            width={130}
            height={60}
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div className=" sm:flex sm:justify-evenly mb-5 sm:w-[1000px] ">
          <Image
            alt="Picture of the author"
            src={images.logo1}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
            alt="Picture of the author"
            src={images.logo2}
            width={180}
            height={60}
            style={{
              position: "absolute",
            }}
          />
          <Image
            alt="Picture of the author"
            src={images.logo3}
            width={100}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo4}
            width={150}
            height={60}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo5}
            width={40}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo6}
            width={60}
            height={50}
            style={{
              position: "absolute",
            }}
          />

          <Image
            alt="Picture of the author"
            src={images.logo7}
            width={130}
            height={60}
            style={{
              position: "absolute",
            }}
          />
        </div>
      </div>

    )
}
export default BrandLogo;