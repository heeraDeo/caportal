import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function WhoWeAre() {
    return (
        <div className="relative pt-8 pb-6">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Who We Are</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna. </p>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="group relative flex justify-center border border-transparent hover:ml-3 transition-all bg-[#012970] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Read More
                        <span className=" inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
