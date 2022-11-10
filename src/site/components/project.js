import React from "react";
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';

export default function Project(){
    return(
        <>
        <div className=" my-28 md:my-auto">
            <div className=" grid items-center grid-cols-2 sm:grid-cols-3">
                <div className=" flex items-center col-span-1 sm:col-span-2">
                    <span className="font-medium font-firecode text-[32px] leading-[42px] text-white"><span className="text-[#C778DD]">#</span>projects</span>
                    <div className=" hidden sm:block h-px w-2/5 md:w-1/2 mx-5 bg-[#C778DD]"></div>
                </div>
                <a href="#" className=" text-end font-firecode col-span-1 font-medium text-base leading-5 text-white">View all ~~&gt;</a>
            </div>
            <div className=" py-12 grid sm:grid-cols-2 gap-x-4 grid-cols-1 lg:grid-cols-3">
                <div className=" justify-self-center max-w-sm min-w-[270px] relative border border-[#ABB2BF]">
                    <img className=" h-[45%] w-full object-cover" src={project1} />
                    <div className=" border-y py-2 border-[#ABB2BF]">
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] mx-2 my-2 text-base">Html</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] mx-2 my-2 text-base">Css</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] mx-2 my-2 text-base">Javascript</span>
                    </div>
                    <div className=" px-4 pb-20 py-4">
                    <h2 className=" text-2xl font-medium font-firecode text-white">English Course</h2>
                    <p className=" text-base font-normal leading-5 font-firecode my-4 text-[#ABB2BF]">First and Regestration page of online course</p>
                    <a href='https://magical-english.netlify.app/' className="border border-[#C778DD] px-3 py-2 absolute bottom-4 left-4 text-white leading-5 font-medium font-firecode no-underline hover:bg-[#C778DD]/40 duration-300 ease-out">Live &lt;~&gt;</a>
                    <span className=" font-firecode text-[#ABB2BF] cursor-pointer text-base leading-5 font-medium px-3 py-2 absolute left-32 bottom-4 border border-[#ABB2BF]">Cached &gt;=</span>
                    </div>
                </div>
                <div className=" hidden sm:block max-w-sm min-w-[270px] relative border border-[#ABB2BF]">
                    <img className=" h-[45%] w-full object-cover" src={project2} />
                    <div className=" border-y py-2 border-[#ABB2BF]">
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Sass</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Html</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Javascript</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Git</span>
                    </div>
                    <div className=" px-4 pb-20 py-4">
                    <h2 className=" text-2xl font-medium font-firecode text-white">First Portfolio</h2>
                    <p className=" text-base font-normal leading-5 font-firecode my-4 text-[#ABB2BF]">An exapmle of my portfolio</p>
                    <a href='https://portfolio2007.netlify.app/' className="border border-[#C778DD] px-3 py-2 absolute bottom-4 left-4 text-white leading-5 font-medium font-firecode no-underline hover:bg-[#C778DD]/40 duration-300 ease-out">Live &lt;~&gt;</a>
                    <span className=" font-firecode text-[#ABB2BF] cursor-pointer text-base leading-5 font-medium px-3 py-2 absolute left-32 bottom-4 border border-[#ABB2BF]">Cached &gt;=</span>
                    </div>
                </div>
                <div className=" hidden lg:block max-w-sm min-w-[270px] relative border border-[#ABB2BF]">
                    <img className=" h-[45%] w-full object-cover" src={project3} />
                    <div className=" border-y border-[#ABB2BF] flex flex-wrap">
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Javascript</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Telegram_bot</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Json</span>
                        <span className=" font-normal font-firecode leading-5 text-[#ABB2BF] pl-2 text-base">Node.js</span>
                    </div>
                    <div className=" px-4 pb-20 py-4">
                    <h2 className=" text-2xl font-medium font-firecode text-white">Telegram_bot</h2>
                    <p className=" text-base font-normal leading-5 font-firecode my-4 text-[#ABB2BF]">You can see code in the Github</p>
                    <a href='https://github.com/beharus/example-bot' className="border border-[#C778DD] px-3 py-2 absolute bottom-4 left-4 text-white leading-5 font-medium font-firecode no-underline hover:bg-[#C778DD]/40 duration-300 ease-out">Github &lt;~&gt;</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}