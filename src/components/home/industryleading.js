import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function IndustryLeading() {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">                            
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Industry leading digital platforms</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Curating value for our clients with our strong network of platform partnerships</p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-4 gap-x-8">
                        <div className="h-60 w-full hover:shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] hover:border-b-4 mb-4">
                            <Image
                                src={images.adobemagento}
                                alt="Picture of the author"
                                className="object-contain cursor-pointer"
                                width={100}
                                height={100}
                            />
                            <p className="text-center text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                        <div className="h-60 w-full hover:shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-amber-600 hover:border-b-4 mb-4">
                            <Image
                                src={images.salesforcenew}
                                alt="Picture of the author"
                                className="object-contain cursor-pointer"
                                width={100}
                                height={100}
                            />
                            <p className="text-center text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                        <div className="h-60 w-full hover:shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-amber-600 hover:border-b-4 mb-4">
                            <Image
                                src={images.outsystems2}
                                alt="Picture of the author"
                                className="object-contain cursor-pointer"
                                width={100}
                                height={100}
                            />
                            <p className="text-center text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                        <div className="h-60 w-full hover:shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-amber-600 hover:border-b-4 mb-4">
                            <Image
                                src={images.microsoft}
                                alt="Picture of the author"
                                className="object-contain cursor-pointer"
                                width={100}
                                height={100}
                            />
                            <p className="text-center text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>                        
                    </div>
                </div>                
            </div>
        </div>
    )
}
