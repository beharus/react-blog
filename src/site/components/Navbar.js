import React from "react";
import Union from '../img/Union.png';
import close from '../img/close.png';
import telegram from '../img/Telegram.png';
import figma from '../img/Figma.png';
import github from '../img/Github.png';

import '../App.css'

export default function Navbar(){
    return(
        <>
        
    <nav className="grid mx-auto fixed top-0 left-0 w-full bg-[#282C33] z-50 md:py-8">
        <div className="hidden md:block">
            <div className="w-1 rounded-b-full h-[191px] bg-white absolute top-0 left-8">
            </div>
            <div className=" top-[195px] left-5 absolute">
                <a href="https://t.me/Beha_coder">
                <img className="mt-3 cursor-pointer" src={telegram}></img></a>
                <a href="https://www.figma.com/files/user/1082656517743059507?fuid=1082656517743059507">
                <img className="mt-3 cursor-pointer" src={figma}></img></a>
                <a href="https://github.com/beharus">
                <img className="mt-3 cursor-pointer" src={github}></img></a>
                </div>
        </div>
        <div className="w-11/12 md:w-10/12 m-auto flex justify-between items-center py-4">
            <div className="flex text-base leading-5 text-white cursor-pointer font-firecode">
            <img src={Union}/>
            <span className=" font-firecode font-semibold ml-5">Beha_rus</span>
            </div>
            <div className="menu hidden md:col-span-10 md:flex md:justify-between md:items-center">
                <ul className="font-base leading-5 md:flex">
                    <li className="ml-3 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>home</li>
                    <li className="ml-3 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>works</li>
                    <li className="ml-3 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>about-me</li>
                    <li className="ml-3 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>contacts</li>
                </ul>
            </div>
            <button className="block md:hidden px-4 py-3 mx-2 ease-in rounded-lg focus:outline-none hover:bg-gray-700 group">
                <div className="w-6 h-1 bg-white mb-1 rounded-2xl"></div>
                <div className="w-6 h-1 bg-white mb-1 rounded-2xl"></div>
                <div className="w-6 h-1 bg-white mb-1 rounded-2xl"></div>
                <div className="absolute -right-[1000px] top-0 min-[450px]: h-screen w-screen sm:w-10/12 bg-[#282C33] sm:border border-gray-500 shadow-sm transform opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <div className="menu flex flex-col items-center cursor-pointer w-full pt-20">
                        <button className="absolute focus:outline-none top-3 right-10 ease-in px-4 py-4 rounded-lg hover:bg-gray-700 group">
                            <img className=" w-6" src={close} />
                        </button>
                        <ul className="leading-5 w-full text-start mt-8">
                            <li className="py-4 px-6 w-full text-2xl hover:bg-gray-700 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>home</li>
                            <li className="py-4 px-6 w-full text-2xl hover:bg-gray-700 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>works</li>
                            <li className="py-4 px-6 w-full text-2xl hover:bg-gray-700 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>about-me</li>
                            <li className="py-4 px-6 w-full text-2xl hover:bg-gray-700 ease-in duration-500 font-firecode text-white font-normal cursor-pointer pr-8 hover:text-[#C778DD] "><span className="font-firecode font-normal text-[#C778DD] leading-5 text-base">#</span>contacts</li>
                        </ul>
                        <div className="flex absolute bottom-12 justify-center items-center">
                            <a className="hover:bg-slate-700 rounded-full" href="">
                                <img className="mt-5 rounded-full h-12 mx-4 w-12 cursor-pointer" src={telegram}></img></a>
                            <a className="hover:bg-slate-700 rounded-full" href="">
                                <img className="mt-5 rounded-full h-12 mx-4 w-12 cursor-pointer" src={figma}></img></a>
                            <a className="hover:bg-slate-700 rounded-full" href="">
                                <img className="mt-5 rounded-full h-12 mx-4 w-12 cursor-pointer" src={github}></img></a>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    </nav>
        </>
    )
}