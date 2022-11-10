import React from "react";
import img from '../img/Group 50.png'

export default function AboutMe(){
    return(
        <>
        <div className=" grid grid-cols-1 gap-0 gap-y-10 lg:gap-28 md:grid-cols-2 items-start">
            <div>
                <div className="flex  items-center col-span-1 sm:col-span-2">
                    <h2 className="font-medium font-firecode text-[32px] leading-[42px] text-white"><span className="text-[#C778DD]">#</span>about-me</h2>
                    <div className="h-px w-1/2 sm:w-1/5 md:w-3/5 mx-5 bg-[#C778DD]"></div>
                </div>
                <div>
                <div className=" font-firecode text-base leading-5 mt-12 text-[#ABB2BF]">
                    <p className="pt-3">Hello, I’m Bekhruz!</p>
                    <p className="py-5">I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                    <p>Transforming my creativity and knowledge into a websites has been my passion for over a year and a half. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <p className="py-5">I can speak in English Russian and Uzbek languages :)</p>
                </div>
                <a href="" className="border border-[#C778DD] px-4 py-2 text-white leading-5 font-medium font-firecode no-underline hover:bg-[#C778DD]/40 duration-300 ease-out">Read more -></a>
                </div>
            </div>
            <div className=" w-full flex justify-center sm:justify-end">
                <img className="" src={img} />
            </div>
        </div>
        </>
    )
}