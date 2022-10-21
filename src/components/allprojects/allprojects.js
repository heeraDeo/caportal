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

export default function OurLatestWorks(props) {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">All Projects</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna. </p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        
                            
                        <span className="latestworkimage">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Development</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                        </span>
                    </div>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        <span className="latestworkimage">
                            <Image
                                src={images.work4}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext text-center">
                                <p>React</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        
                            
                        <span className="latestworkimage">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Development</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                        </span>
                    </div>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        <span className="latestworkimage">
                            <Image
                                src={images.work4}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext text-center">
                                <p>React</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        
                            
                        <span className="latestworkimage">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext">
                                <p>Development</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                        </span>
                    </div>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-3 gap-x-8 w-full">
                        <span className="latestworkimage">
                            <Image
                                src={images.work4}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer"
                                width={300}
                                height={400}
                            />
                            <span className="latestworktext text-center">
                                <p>React</p>
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
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
                                <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="group relative flex justify-center border border-transparent  transition-all bg-white py-2 px-4 text-sm font-medium text-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Read More                                   
                                </button>
                            </div>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
