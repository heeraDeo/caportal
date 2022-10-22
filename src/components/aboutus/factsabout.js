import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

export default function FactsAbout() {
    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center grid-cols-1 max-w-full gap-y-10 gap-x-8 py-4">
                    <div className="col-start-2 grid sm:grid-cols-3 md:grid-cols-4  gap-x-8">
                        <div className="h-60 w-72  flex justify-center hover:origin-bottom hover:rotate-6 items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] border-2 border-dashed mb-4">
                            <p className="text-center text-slate-800 text-5xl font-bold mb-4 mt-3">240<sub>+</sub></p>
                            <p className="text-center text-slate-700 text-sm">Project Completed</p>
                        </div>                                                                    
                        <div className="h-60 w-72  flex justify-center hover:origin-bottom hover:rotate-6 items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] border-2 border-dashed mb-4">
                            <p className="text-center text-slate-800 text-5xl font-bold mb-4 mt-3">100<sub>%</sub></p>
                            <p className="text-center text-slate-700 text-sm">Client Satisfaction</p>
                        </div>                                                                    
                        <div className="h-60 w-72  flex justify-center hover:origin-bottom hover:rotate-6 items-center flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] border-2 border-dashed mb-4">
                            <p className="text-center text-slate-800 text-5xl font-bold mb-4 mt-3">5</p>
                            <p className="text-center text-slate-700 text-sm">Awards</p>
                        </div>                                                                    
                        <div className="h-60 w-72  flex justify-center items-center hover:origin-bottom hover:rotate-6 flex-col transition-all cursor-pointer p-5 rounded-lg border-[#4154f1] border-2 border-dashed mb-4">
                            <p className="text-center text-slate-800 text-5xl font-bold mb-4 mt-3">36<sub>+</sub></p>
                            <p className="text-center text-slate-700 text-sm">Expert Members</p>
                        </div>                                                                    
                    </div>
                </div>                
            </div>
        </div>
    )
}
