
import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link"

const articles = [
  {
    id: 1,
    name: 'Steven Smith',
    date: 'oct 22,2022',
    description: 'How To Boost Your Digital Marketing Agency',
    subdescription: 'Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const widgets = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    date: 'oct 22, 2022',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    date: 'oct 22, 2022',
    imageSrc: '/images/LatestWorks/work6.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

export default function BlogDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center">
            <h1 className="text-slate-800  text-5xl font-bold leading-tight">Insights</h1>
            <p className="text-slate-700  text-1xl font-300 mt-4 leading-7">Curating value for our clients with our strong network of platform partnerships</p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-6 lg:max-w-none">
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {articles.map((article) => (
              <div key={article.name} className=" col-span-2 group relative">
                <div className="relative h-80 w-full overflow-hidden  bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    height={600}
                    width={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="font-bold text-gray-800">Posted On :</span>
                    <span className="text-gray-500">  {article.date} </span>
                    <span className="text-gray-800 font-bold ml-2">Posted By :</span>
                    <span className="text-gray-500">  {article.name} </span>
                  </h3>
                  <p className="text-2xl font-semibold my-4 text-gray-900">{article.description}</p>
                  <p className="text-sm font-300 text-gray-500 mb-3 leading-6">{article.subdescription}</p>
                  <p className="text-2xl font-semibold my-4 text-gray-900">{article.description}</p>
                  <p className="text-sm font-300 text-gray-500 mb-3 leading-6">{article.subdescription}</p>
                  <p className="text-2xl font-semibold my-4 text-gray-900">{article.description}</p>
                  <p className="text-sm font-300 text-gray-500 mb-3 leading-6">{article.subdescription}</p>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-between text-base py-2 text-gray-900">
                  <span className="flex items-center ">
                    <span className="h-4 w-4 bg-indigo-600 mr-3"></span>
                    <span className="text-sm hover:text-indigo-600 tracking-widest">Fashion, Games, Travel</span>
                  </span>
                  <span className="font-300 tracking-widest flex items-center">
                    <span className="text-gray-600 mr-2">Share: </span>
                    <button
                      className=" text-white flex justify-center text-white w-8 h-8 bg-gray-100 p-2 rounded-full outline-none focus:outline-none mr-3"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#666"
                        className="w-5 h-5"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                      </svg>
                    </button>

                    <button
                      className=" text-white flex justify-center text-white w-8 h-8  bg-gray-100 p-2 rounded-full outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#666"
                        className="w-5 h-5"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </button>
                    <button
                      className=" text-white flex justify-center text-white w-8 h-8  bg-gray-100 p-2 rounded-full outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#666"
                        className="w-5 h-5"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </button>
                    <button
                      className=" flex justify-center text-white w-8 h-8 bg-gray-100 p-2 rounded-full  outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="#666"
                        className="w-5 h-5"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex items-stretch w-full mb-4">
                      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                      <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <p className="text-lg font-medium text-gray-900 border-b border-indigo-600">Popular Posts</p>
                </div>

                <div className="mt-8 border-b border-gray-200 pb-4">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {widgets.map((widget) => (
                        <li key={widget.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image
                              src={widget.imageSrc}
                              alt={widget.imageAlt}
                              width={150}
                              height={150}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <p className="mt-1 text-sm text-gray-500">{widget.date}</p>
                              <p className="mt-1 text-base font-medium text-gray-900">{widget.name}</p>

                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
                <div className="border-b border-gray-200 py-6">
                  <div className="flex items-start justify-between">
                    <p className="text-lg font-medium text-gray-900 mb-2 border-b border-indigo-600">Categories</p>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Business</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Privacy</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Technology</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Tips</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Uncategorized</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <div className="flex items-start justify-between">
                    <p className="text-lg font-medium text-gray-900 border-b border-indigo-600">Recent Comments</p>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Business</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Privacy</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Technology</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Tips</span>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <span className="h-3 w-3 bg-indigo-600 mr-3"></span>
                    <span className="font-300 tracking-widest">Uncategorized</span>
                  </div>
                </div>
                <div className="py-6">
                  <div className="flex items-start justify-between">
                    <p className="text-lg font-medium text-gray-900 border-b border-indigo-600">Tags</p>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <button
                      type="submit"
                      className="inline-flex justify-center border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      IT (3)
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center ml-2 border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center ml-2 border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none "
                    >
                      Taiker (3)
                    </button>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <button
                      type="submit"
                      className="inline-flex justify-center border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center ml-2 border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <button
                      type="submit"
                      className="inline-flex justify-center border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                  </div>
                  <div className="flex items-center text-base py-2 text-gray-900">
                    <button
                      type="submit"
                      className="inline-flex justify-center border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center ml-2 border  hover:bg-indigo-600 py-2 px-4 text-sm font-medium text-gray-700 hover:text-white border-gray-200 shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                      Taiker (3)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

