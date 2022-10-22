import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Why Choose Us</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Curating value for our clients with our strong network of platform partnerships</p>
                </div>
                <div className="flex justify-center grid-cols-2 sm:col-span-1 max-w-full gap-y-10 gap-x-8 py-4">
                    
                    <div className="col-start-2 grid grid-cols-1 gap-x-8 w-2/4">
                    <div className=" px-5">
                    <div className="text-start">
                        <h1 className="text-2xl font-extrabold tracking-wide mb-2 mt-5 ">Competitor Analysis</h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been.
                        </p>
                    </div>
                    <div className="text-start">
                        <h1 className="text-1xl font-bold tracking-wide mb-2 mt-5"> Core Development</h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s.
                        </p>
                    </div>
                    <div className="text-start">
                        <h1 className="text-1xl font-extrabold tracking-wide mb-2 mt-5">
                            Define Your Choices
                        </h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy specimen book.
                        </p>
                    </div>                    
                </div>
                    </div>
                    <div className="w-2/5 flex justify-center items-center">
                        <div>
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
