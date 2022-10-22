import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">                            
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Contact Us</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Curating value for our clients with our strong network of platform partnerships</p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 gap-x-8">
                        <div className="h-60 w-full shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] hover:border-b-4 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" fill="#4154f1">
                                <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                            <p className="text-center text-slate-800 text-2xl font-bold mb-2 mt-3">Email Here</p>
                            <p className="text-center text-slate-700 text-sm">admin@magnisys.com</p>
                            <p className="text-center text-slate-700 text-sm">magnisysindia@outlook.com</p>
                        </div>
                        <div className="h-60 w-full shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] hover:border-b-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" fill="#4154f1">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </svg>
                            <p className="text-center text-slate-800 text-2xl font-bold mb-2 mt-3">Call Here</p>
                            <p className="text-center text-slate-700 text-sm">+123 456 7890 </p>
                            <p className="text-center text-slate-700 text-sm">+241 452 4526</p>
                        </div>
                        <div className="h-60 w-full shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] hover:border-b-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" fill="#4154f1">
                            <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/>
                        </svg>
                            <p className="text-center text-slate-800 text-2xl font-bold mb-2 mt-3">Open Hours</p>
                            <p className="text-center text-slate-700 text-sm">Monday - Saturday</p>
                            <p className="text-center text-slate-700 text-sm">9:00AM - 06:00PM</p>
                        </div>                                              
                        <div className="h-60 w-full shadow-2xl bg-white flex justify-center items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] hover:border-b-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30" fill="#4154f1">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
                        </svg>
                            <p className="text-center text-slate-800 text-2xl font-bold mb-2 mt-3">Location Here</p>
                            <p className="text-center text-slate-700 text-sm">Vaishali Nagar</p>
                            <p className="text-center text-slate-700 text-sm">Jaipur, 302022, India</p>
                        </div>                                              
                    </div>
                </div>                
            </div>
        </div>
    )
}
