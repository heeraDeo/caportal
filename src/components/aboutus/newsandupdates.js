import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function NewsAndUpdates() {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
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
                        <h1 className="text-slate-800  text-5xl font-bold leading-tight italic">Dont Miss Our News And Updates</h1>
                            <p className="text-slate-700  text-1xl font-300 mt-4 italic leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow border border-white ">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-1">
                                        <div className="col-span-12 mt-3">
                                            <label htmlFor="email-address" className="block text-sm font-500 text-slate-700">
                                                Your Email
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 block w-full h-10 bg-transparent text-slate-700 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                            />
                                        </div>
                                        <div className="px-4 py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                                        </div>
                                </div>
                                
                            </div>
                        </form>
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
