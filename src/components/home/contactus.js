import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function IndustryLeading() {
    return (
        <div className="contactus">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center grid-cols-2 sm:col-span-1 max-w-full bg-[#0a0a0abf]	gap-y-10 gap-x-8 py-4">
                    <div className="pb-10 w-2/5 flex justify-center items-start flex-col">
                        <div className="text-left pb-10">
                            <h1 className="text-white text-5xl font-bold leading-tight italic">Contact us</h1>
                            <p className="text-white text-1xl font-300 mt-4 italic leading-7">Curating value for our clients with our strong network of platform partnerships</p>
                        </div>
                    </div>
                    <div className="col-start-2 grid grid-cols-1 gap-x-8 w-2/4">
                        {/* <div className="mt-10 sm:mt-0 flex justify-center items-center "> */}
                            {/* <div className="w-2/5"> */}
                                {/* <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div> */}
                                {/* <div className="mt-5 md:col-span-2 md:mt-0"> */}
                                    <form action="#" method="POST">
                                        <div className="overflow-hidden shadow border border-white ">
                                            <div className="px-4 py-5 sm:p-6">
                                                <div className="grid grid-cols-1">
                                                    <div className="col-span-12 mt-3">
                                                        <label htmlFor="first-name" className="block text-sm font-500 text-white">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 block w-full h-10 bg-transparent text-white border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                                        />
                                                    </div>

                                                    {/* <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full h-10 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                      />
                    </div> */}

                                                    <div className="col-span-12 mt-3">
                                                        <label htmlFor="email-address" className="block text-sm font-500 text-white">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 block w-full h-10 bg-transparent text-white border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                                        />
                                                    </div>

                                                    {/* <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full h-10 border border-gray-300 bg-white px-2 shadow-sm focus:border-gray-300 focus:outline-none sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div> */}

                                                    <div className="col-span-12 mt-3">
                                                        <label htmlFor="street-address" className="block text-sm font-500 text-white">
                                                            Subject
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="street-address"
                                                            id="street-address"
                                                            autoComplete="street-address"
                                                            className="mt-1 block w-full h-10 bg-transparent text-white border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-12 mt-3">
                                                        <label htmlFor="about" className="block text-sm font-500 text-white">
                                                            Message
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="about"
                                                                name="about"
                                                                rows={3}
                                                                className="mt-1 block w-full h-10 bg-transparent text-white border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                                                                placeholder=""
                                                                defaultValue={''}
                                                            />
                                                        </div>
                                                        <p className="mt-2 text-sm text-white">
                                                            Brief description for your profile. URLs are hyperlinked.
                                                        </p>
                                                    </div>

                                                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full h-10 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full h-10 border-gray-300 border focus:border-indigo-300 pl-2 sm:text-sm"
                      />
                    </div> */}
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
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
