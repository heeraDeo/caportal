import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function Features() {
    return (
        <div className="relative bg-[#f6f9ff] pt-4 pb-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-center grid-cols-2 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="pb-10 w-2/5 flex justify-center items-start flex-col">
                        <h1 className="text-slate-800 text-5xl font-bold leading-tight">Features</h1>
                        <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Our great features and values which keeps us ahead of others </p>
                        <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className="col-start-2 grid grid-cols-2 gap-x-8 w-2/4">
                        <div className="mt-10">
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-violet-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-violet-600 flex justify-center items-center mb-3 rounded-full hover:bg-violet-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">Enterprise Architecture</h1>
                            </div>
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-amber-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-amber-600 flex justify-center items-center mb-3 rounded-full hover:bg-amber-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">Post Production Support</h1>
                            </div>
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-lime-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-lime-600 flex justify-center items-center mb-3 rounded-full hover:bg-lime-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">Zero Defect Code</h1>
                            </div>
                        </div>
                        <div>
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-yellow-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-yellow-600 flex justify-center items-center mb-3 rounded-full hover:bg-yellow-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">On Time Delivery</h1>
                            </div>
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-sky-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-sky-600 flex justify-center items-center mb-3 rounded-full hover:bg-sky-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">Customer Satisfaction</h1>
                            </div>
                            <div className="h-40 w-full bg-white flex justify-center items-center flex-col hover:ml-3 transition-all cursor-pointer p-5 rounded-lg border-orange-600 border-b-4 mb-4">
                                <div className="h-10 w-10 border-2 border-orange-600 flex justify-center items-center mb-3 rounded-full hover:bg-orange-600 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h1 className="text-slate-800 text-1xl font-bold leading-tight">Value for Money</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
