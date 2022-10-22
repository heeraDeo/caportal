import Image from "next/image";
import images from "../../../public/images";

const teams = [
    {
        id: 1,
        name: 'John Smith',
        href: '#',
        imageSrc: '/images/LatestWorks/work6.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        role: 'Web Developer',
    },
    {
        id: 2,
        name: 'Eva',
        href: '#',
        imageSrc: '/images/LatestWorks/work6.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        role: 'Manager'
    },
    {
        id: 3,
        name: 'Steven',
        href: '#',
        imageSrc: '/images/LatestWorks/work6.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        role: 'Web Developer',
    },

]

export default function OurTeam() {
    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center pb-10">
                    <h1 className="text-slate-800 text-5xl font-bold leading-tight">Meet Our Team</h1>
                    <p className="text-slate-700 text-1xl font-500 mt-4 leading-snug">Curating value for our clients with our strong network of platform partnerships</p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {teams.map((team) => (
                        <div key={team.id} className="group relative">
                            <div className=" w-full overflow-hidden  group-hover:opacity-75 lg:aspect-none ">
                                <Image
                                    src={team.imageSrc}
                                    alt={team.imageAlt}
                                    height={450}
                                    width={400}
                                    className="h-full w-full object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col items-center justify-center">
                                <div>
                                    <p className="mt-1 text-xl font-bold text-gray-800">{team.name}</p>
                                </div>
                                <p className="text-sm text-gray-600">{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
