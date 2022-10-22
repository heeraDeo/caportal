import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from "../../../public/images";
import Link from "next/link";

export default function ProjectDetails(props) {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                {/* <div className="flex flex-wrap"> */}
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Project Details</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna. </p>
                </div>
                <div className="flex justify-center grid-cols-1 max-w-full	gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid grid-cols-2 gap-x-8 w-full">


                        <span className="text-right">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer hover:scale-125 transition-all"
                                width={600}
                                height={400}
                            />
                        </span>
                        <span className="text-left">
                            <Image
                                src={images.work1}
                                alt="Picture of the author"
                                className="object-cover rounded-lg cursor-pointer hover:scale-125 transition-all"
                                width={600}
                                height={400}
                            />
                        </span>
                    </div>
                </div>
                <div className=" px-5">
                    <div className="text-start">
                        <h1 className="text-2xl font-extrabold tracking-wide mb-2 mt-5 ">Competitor Analysis</h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="text-start">
                        <h1 className="text-1xl font-bold tracking-wide mb-2 mt-5"> Core Development</h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="text-start">
                        <h1 className="text-1xl font-extrabold tracking-wide mb-2 mt-5">
                            Define Your Choices
                        </h1>
                        <p className="text-md text-gray-500 leading-8">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="text-start py-8 flex ">
                        <div className="mb-2 mt-5 w-1/5">
                        <p className="text-md font-extrabold tracking-wide">Client</p>
                            <p className=" text-[12px] text-gray-500">Jon Anderson</p>
                        </div>

                        <div className="mb-2 mt-5 w-1/5">
                            <p className="text-md font-extrabold tracking-wide">Category</p>
                            <p className=" text-[12px] text-gray-500 font-300">Network Marketing</p>
                        </div>

                        <div className=" mb-2 mt-5 w-1/5">
                            <p className="text-md font-extrabold tracking-wide">Date</p>
                            <p className=" text-[12px] text-gray-500 font-300">october 21,2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
