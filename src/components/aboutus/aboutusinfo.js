import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">About Us</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Curating value for our clients with our strong network of platform partnerships</p>
                </div>
                <div className="flex justify-center grid-cols-2 sm:col-span-1 max-w-full gap-y-10 gap-x-8 py-4">
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
                    <div className="col-start-2 grid grid-cols-1 gap-x-8 w-2/4">
                        <h1 className="text-slate-800  text-5xl font-bold mb-3">We Are Digital Explorers</h1>
                        <p className="text-slate-700  text-1xl font-300 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <form action="#" method="POST">
                            <div className="py-5">
                                <div className="grid grid-cols-2">
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                    <div className="bg-gray-100 w-2/3 hover:shadow-2xl flex items-center p-2 mb-4 hover:ml-5 hover:bg-[#4154f1] hover:text-white transition-all">
                                        <div className=" h-8 w-8 bg-[#4154f1] mr-2 flex justify-center items-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="font-300 text-sm">Recommender systems</p>
                                    </div>                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
