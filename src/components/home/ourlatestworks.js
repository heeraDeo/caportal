import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from "../../../public/images";
import Link from 'next/link'

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

export default function OurLatestWorks(props) {
    return (
        <div className="bg-[#f6f9ff]">
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Our Latest Works</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna. </p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-1 gap-x-8 w-full">
                        <div className="w-full">
                            <Carousel
                                swipeable={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                // autoPlay={props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={3000}
                                rewindWithAnimation={true}
                                keyBoardControl={true}
                                customTransition="transform 800ms ease-in-out"
                                transitionDuration={1000}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work1}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>Development</p>
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work2}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer pb-3"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>Web Design</p>
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work3}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>eCommerce</p>
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work4}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>React</p>
                                        </span>
                                    </span>

                                </div>
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work5}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>Angular</p>
                                        </span>
                                    </span>

                                </div>
                                <div>
                                    <span className="latestworkimage">
                                        <Image
                                            src={images.work6}
                                            alt="Picture of the author"
                                            className="object-cover rounded-lg cursor-pointer mt-3"
                                            width={400}
                                            height={400}
                                        />
                                        <span className="latestworktext">
                                            <p>Development</p>
                                        </span>
                                    </span>
                                </div>
                            </Carousel>
                            <div className="flex justify-center mt-10">
                                <Link  href="/allproject"                                    
                                    
                                >
                                    <span className="group relative cursor-pointer flex justify-center border border-transparent hover:ml-3 transition-all bg-[#012970] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    View More Project
                                    <span className=" inset-y-0 left-0 flex items-center pl-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* <span className="latestworkimage">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Development</p>
                            </span>
                        </span>
                        <span className="latestworkimage">
                            <Image
                                src={images.work2}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer pb-3"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Web Design</p>
                            </span>
                        </span>
                        <span className="latestworkimage">
                            <Image
                                src={images.work3}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>eCommerce</p>
                            </span>
                        </span> */}
                    </div>
                </div>
                {/* <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8">
                        <span className="latestworkimage">
                            <Image
                                src={images.work4}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>React</p>
                            </span>
                        </span>
                        <span className="latestworkimage">
                            <Image
                                src={images.work5}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Angular</p>
                            </span>
                        </span>
                        <span className="latestworkimage">
                            <Image
                                src={images.work6}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer mt-3"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Development</p>
                            </span>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
