import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from "../../../public/images";
import Link from "next/link";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Testimonials(props) {
    return (
        <div className="bg-[#f6f9ff]">
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Testimonials</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Some Lovely Feedback From Our Clients. </p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-1 gap-x-8 w-full">
                        <div className="w-full">
                            <Carousel
                                swipeable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={3000}
                                rewindWithAnimation={true}
                                keyBoardControl={true}
                                customTransition="transform 800ms ease-in-out"
                                transitionDuration={1000}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                deviceType={props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className="bg-white flex shadow-lg rounded-lg items-baseline flex-col justify-start p-5 m-5">
                                    <span>
                                        <p className="text-sm font-300 text-gray-900 italic leading-7">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.”
                                        </p>
                                    </span>
                                    <span className="flex mt-4">
                                        <span>
                                            <Image
                                                src={images.work2}
                                                alt="Picture of the author"
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                width={40}
                                                height={40}


                                            />
                                        </span>
                                        <span className="ml-2">
                                            <h3 className="text-lg font-bold text-gray-900">Jon Nessham</h3>
                                            <p className="text-sm font-300 text-[#012970]">Manager</p>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={10} fill="#ff612f">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </div>                                
                                <div className="bg-white flex shadow-lg rounded-lg items-baseline flex-col justify-start p-5 m-5">
                                    <span>
                                        <p className="text-sm font-300 text-gray-900 italic leading-7">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.”
                                        </p>
                                    </span>
                                    <span className="flex mt-4">
                                        <span>
                                            <Image
                                                src={images.work2}
                                                alt="Picture of the author"
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                width={40}
                                                height={40}


                                            />
                                        </span>
                                        <span className="ml-2">
                                            <h3 className="text-lg font-bold text-gray-900">Jon Nessham</h3>
                                            <p className="text-sm font-300 text-[#012970]">Manager</p>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={10} fill="#ff612f">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </div>                                
                                <div className="bg-white flex shadow-lg rounded-lg items-baseline flex-col justify-start p-5 m-5">
                                    <span>
                                        <p className="text-sm font-300 text-gray-900 italic leading-7">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.”
                                        </p>
                                    </span>
                                    <span className="flex mt-4">
                                        <span>
                                            <Image
                                                src={images.work2}
                                                alt="Picture of the author"
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                width={40}
                                                height={40}


                                            />
                                        </span>
                                        <span className="ml-2">
                                            <h3 className="text-lg font-bold text-gray-900">Jon Nessham</h3>
                                            <p className="text-sm font-300 text-[#012970]">Manager</p>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={10} fill="#ff612f">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </div>                                
                                <div className="bg-white flex shadow-lg rounded-lg items-baseline flex-col justify-start p-5 m-5">
                                    <span>
                                        <p className="text-sm font-300 text-gray-900 italic leading-7">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.”
                                        </p>
                                    </span>
                                    <span className="flex mt-4">
                                        <span>
                                            <Image
                                                src={images.work2}
                                                alt="Picture of the author"
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                width={40}
                                                height={40}


                                            />
                                        </span>
                                        <span className="ml-2">
                                            <h3 className="text-lg font-bold text-gray-900">Jon Nessham</h3>
                                            <p className="text-sm font-300 text-[#012970]">Manager</p>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={10} fill="#ff612f">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </div>                                
                                <div className="bg-white flex shadow-lg rounded-lg items-baseline flex-col justify-start p-5 m-5">
                                    <span>
                                        <p className="text-sm font-300 text-gray-900 italic leading-7">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.”
                                        </p>
                                    </span>
                                    <span className="flex mt-4">
                                        
                                        <span>
                                            <Image
                                                src={images.work2}
                                                alt="Picture of the author"
                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                width={40}
                                                height={40}


                                            />
                                        </span>
                                        <span className="ml-2">
                                            <h3 className="text-lg font-bold text-gray-900">Jon Nessham</h3>
                                            <p className="text-sm font-300 text-[#012970]">Manager</p>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={10} fill="#ff612f">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </span>
                                        </span>
                                        
                                    </span>
                                </div>                                
                            </Carousel>
                            {/* <div className="flex justify-center mt-10">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent hover:ml-3 transition-all bg-[#012970] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    View More Project
                                    <span className=" inset-y-0 left-0 flex items-center pl-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
