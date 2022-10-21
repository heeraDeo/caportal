import React from "react";
import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f9ff] pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >

      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/6 px-4 mb-2 flex justify-between">
            <div>
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src={images.Logo}
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </Link>
                <h1 className=" mt-3 ml-5 mb-3 text-3xl font-bold text-[#012970]">Magnisys</h1>
              </div>

              <div className="mt-2">
                <p className="text-sm leading-6 text-slate-600">
                  Established in 2021 with the aim to provide the best IT solutions at a competitive price.
                  We provide IT services in various domains like Mobile App Development, Web App Development, etc.
                </p>
                <p className="text-sm leading-6 text-slate-600">Contact us for any details of any of our services.</p>
                <div className="mt-2">
                    <button
                      className=" text-white w-4 h-4  outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#666"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                      </svg>
                    </button>

                    <button
                      className=" text-white w-4 h-4  outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#666"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </button>
                    <button
                      className=" text-white w-4 h-4 outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#666"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </button>
                    <button
                      className=" text-white w-4 h-4  outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="#666"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                      </svg>
                    </button>                    
                </div>
                <text className="text-xs text-slate-700">BV:10.12.00</text>
              </div>

            </div>

            <div className="h-full lg:border-r-[0.5px] mr-10" />
          </div>

          <div className="w-full lg:w-2/3">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full sm:w-2/6 lg:w-1/4 px-4">
                <span className="block uppercase text-slate-800 text-sm font-semibold mb-4">
                  USEFUL LINKS
                </span>

                <ul className="list-unstyled">
                  <li className="text-slate-800 hover:text-[#4154f1] block pb-2 text-sm">
                    <Link href="/home">
                      <span className="cursor-pointer flex hover:pl-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
                          <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>

                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="text-slate-800 hover:text-[#4154f1] block pb-2 text-sm">
                    <Link href="">
                      <span className="cursor-pointer flex hover:pl-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
                          <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                        About
                      </span>
                    </Link>
                  </li>
                  <li className="text-slate-800 hover:text-[#4154f1] block pb-2 text-sm">
                    <Link href="">
                      <span className="cursor-pointer flex hover:pl-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
                          <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                        Services
                      </span>
                    </Link>
                  </li>

                  <li className="text-slate-800 hover:text-[#4154f1]  block pb-2 text-sm">
                    <Link href="">
                      <span className="cursor-pointer flex hover:pl-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
                          <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                        Contact Us
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-2/6 lg:w-2/6 px-4">
                <span className="block uppercase text-slate-800 text-sm font-semibold mb-4">
                  OUR SERVICES
                </span>
                <ul className="list-unstyled">
                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all block pb-2 text-sm">
                    <Link href="">
                      App Development
                    </Link>
                  </li>

                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all  block pb-2 text-sm">
                    <Link href="">Web Development
                    </Link>
                  </li>

                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all  block pb-2 text-sm">
                    <Link href="">Cloud & DevOps
                    </Link>
                  </li>

                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all  block pb-2 text-sm">
                    <Link href="">Digital Marketing
                    </Link>
                  </li>

                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all block pb-2 text-sm">
                    <Link href="">Production Support
                    </Link>
                  </li>
                  <li className="text-slate-800 hover:text-[#4154f1] hover:pl-2 transition-all  block pb-2 text-sm">
                    <Link href="">Design</Link>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-2/6 lg:w-2/5 px-4">
                <span className="block uppercase text-slate-800 text-sm font-semibold mb-4">
                  CONTACT US
                </span>
                <p className="text-slate-800 block pb-2 text-sm">Vaishali Nagar <br /> Jaipur, 302022 <br /> India</p>
                <p className="text-slate-800 block pb-2 text-sm"><span className="font-semibold">Phone:</span> +91 9521373179</p>
                <p className="text-slate-800 block pb-2 text-sm"><span className="font-semibold">Email:</span> magnisysindia@outlook.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center text-slate-800">
          <div className="w-full text-xs md:w-12/12 px-4 mx-auto text-center">
            <div className="text-xs text-slate-800 py-1">
              © Copyright {new Date().getFullYear()}{" "}<span className="font-bold text-[#012970]">Magnisys Technologies.</span> All Rights Reserved{" "}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
