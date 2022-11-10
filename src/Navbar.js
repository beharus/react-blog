import React from "react";

export default function Navbar({ fixed }) {
  return (
    <>
      <nav data-aos="zoom-in-down" class="navbar fixed top-0 left-0 w-full bg-slate-500 shadow z-50">
        <div class="container m-auto flex justify-between items-center py-4">
            <div class="menu hidden md:col-span-10 md:flex md:justify-between md:items-center">
                <ul class=" md:flex md:mr-16">
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Home</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">About</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">pricing</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Blog</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Faq</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">contact</li>
                </ul>
            <div class="button md:w-auto border-blue-500 border-2 w-3/4  rounded-3xl py-3 px-4 bg-blue-500 text-center ease-out duration-700 text-white font-oswald font-normal cursor-pointer hover:text-black hover:bg-transparent">Purchase template</div>
            </div>
            <button class="block md:hidden px-4 py-3 mx-2 ease-in rounded-lg focus:outline-none hover:bg-gray-200 group">
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="absolute -right-96 top-0 h-screen w-8/12 bg-white border shadow-sm transform opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <div class="menu flex flex-col items-center cursor-pointer w-full pt-20">
                        <ul class="w-full">
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Home</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">About</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">pricing</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Blog</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Faq</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">contact</li>
                        </ul>
                    <div class="button md:w-auto border-blue-500 border-2 w-3/4  rounded-3xl py-3 px-4 bg-blue-500 text-center ease-out duration-700 text-white font-oswald font-normal cursor-pointer hover:text-black hover:bg-transparent">Purchase template</div>
                    </div>
                </div>
            </button>
        </div>
    </nav><nav data-aos="zoom-in-down" class="navbar fixed top-0 left-0 w-full bg-white shadow z-50">
        <div class="container m-auto flex justify-between items-center py-4">
            <div class="menu hidden md:col-span-10 md:flex md:justify-between md:items-center">
                <ul class=" md:flex md:mr-16">
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Home</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">About</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">pricing</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Blog</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Faq</li>
                    <li class="mr-3 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">contact</li>
                </ul>
            <div class="button md:w-auto border-blue-500 border-2 w-3/4  rounded-3xl py-3 px-4 bg-blue-500 text-center ease-out duration-700 text-white font-oswald font-normal cursor-pointer hover:text-black hover:bg-transparent">Purchase template</div>
            </div>
            <button class="block md:hidden px-4 py-3 mx-2 ease-in rounded-lg focus:outline-none hover:bg-gray-200 group">
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="w-6 h-1 bg-black mb-1 rounded-2xl"></div>
                <div class="absolute -right-96 top-0 h-screen w-8/12 bg-white border shadow-sm transform opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <div class="menu flex flex-col items-center cursor-pointer w-full pt-20">
                        <ul class="w-full">
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Home</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">About</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">pricing</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Blog</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">Faq</li>
                            <li class="py-4 px-6 w-full hover:bg-blue-200 uppercase ease-in duration-500 font-oswald font-normal cursor-pointer hover:text-blue-500 ">contact</li>
                        </ul>
                    <div class="button md:w-auto border-blue-500 border-2 w-3/4  rounded-3xl py-3 px-4 bg-blue-500 text-center ease-out duration-700 text-white font-oswald font-normal cursor-pointer hover:text-black hover:bg-transparent">Purchase template</div>
                    </div>
                </div>
            </button>
        </div>
    </nav>
    </>
  );
}
