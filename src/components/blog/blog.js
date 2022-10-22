
import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link"

const articles = [
  {
    name: 'Steven Smith',
    date: 'oct 22,2022',
    description: 'Work from home accessories',
    subdescription: 'Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Steven Smith',
    date: 'oct 22,2022',
    description: 'Journals and note-taking',
    subdescription: 'Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Steven Smith',
    date: 'oct 22,2022',
    description: 'Daily commute essentials',
    subdescription: 'Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Blog() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center">
            <h1 className="text-slate-800  text-5xl font-bold leading-tight">Insights</h1>
            <p className="text-slate-700  text-1xl font-300 mt-4 leading-7">Curating value for our clients with our strong network of platform partnerships</p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-6 lg:max-w-none">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {articles.map((article) => (
              <div key={article.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    height={450}
                    width={400}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  By: <span className="text-[#4154f1]">{article.name} </span>/ {article.date}
                </h3>
                <p className="text-base font-semibold my-2 text-gray-900">{article.description}</p>
                <p className="text-sm font-300 text-gray-500">{article.subdescription}</p>
                <div className="flex justify-start mt-1">
                  <Link href="/blogdetails"

                  >
                    <span className="group relative cursor-pointer flex justify-center border border-transparent hover:ml-3 transition-all py-2 text-sm font-medium text-[#4154f1]  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Read More
                      <span className=" inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

