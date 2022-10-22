import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function Contactus() {
    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 max-w-full  gap-y-10 gap-x-8 py-4">
                    <div className="pb-10 flex justify-center items-start flex-col">
                        <div className="text-left pb-10">
                            <h1 className="text-slate-800  text-5xl font-bold leading-tight italic">Drop Us Message For Any Query</h1>
                            <p className="text-slate-700  text-1xl font-300 mt-4 italic leading-7">Curating value for our clients with our strong network of platform partnerships</p>
                        </div>
                    </div>
                    <div>
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow border border-white ">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-1">
                                        <div className="col-span-12 mt-3">
                                            <label htmlFor="first-name" className="block text-sm font-500 text-slate-700">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full h-10 bg-transparent text-slate-700 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                            />
                                        </div>
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

                                        <div className="col-span-12 mt-3">
                                            <label htmlFor="street-address" className="block text-sm font-500 text-slate-700">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 block w-full h-10 bg-transparent text-slate-700 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-12 mt-3">
                                            <label htmlFor="about" className="block text-sm font-500 text-slate-700">
                                                Message
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="mt-1 block w-full h-10 bg-transparent text-slate-700 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                                    placeholder=""
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-slate-700">
                                                Brief description for your profile. URLs are hyperlinked.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
