import React from "react";
import project2 from '../img/rectangles.png';

export default function Project(){
    return(
        <>
        <div className=" my-28">
            <div className=" grid items-center grid-cols-2 sm:grid-cols-3">
                <div className=" flex items-center col-span-1 sm:col-span-2">
                    <span className="font-medium font-firecode text-[32px] leading-[42px] text-white"><span className="text-[#C778DD]">#</span>skills</span>
                    <div className="h-px w-1/2 md:w-2/5 mx-5 bg-[#C778DD]"></div>
                </div>
            </div>
            <div className=" py-12 grid md:grid-cols-5 gap-x-8 grid-cols-1">
                <div className="mx-auto md:col-span-2  justify-self-center md:justify-self-start">
                <img className="" src={project2} />
                </div>
                <div className="md:grid-cols-3 col-span-3 relative grid grid-cols-2 sm:grid-cols-3 grid-rows-9 gap-2 mt-10 md:mt-5 sm:gap-8 md:gap-2 md:w-11/12 justify-self-end">
                    <div className=" sm:row-start-1 sm:row-span-1 border border-[#ABB2BF] text-[#ABB2BF] col-span-1 font-firecode text-base leading-5">
                        <div className="text-white p-2 font-semibold border-b border-[#ABB2BF]">
                            <p>Languages</p>
                        </div>
                        <div className="flex flex-wrap p-1">
                            <p className=" p-1">JSX</p>
                            <p className=" p-1">Python</p>
                            <p className=" p-1">Javascript</p>
                        </div>
                    </div>
                    <div className=" col-start-2 sm:sm:row-start-1 sm:row-span-1 border border-[#ABB2BF] text-[#ABB2BF]  font-firecode text-base leading-5">
                        <div className="text-white p-2 font-semibold border-b border-[#ABB2BF]">
                            <p>Databases</p>
                        </div>
                        <div className="flex flex-wrap p-1">
                            <p className=" p-1">PostgreSQLs</p>
                            <p className=" p-1">SQLite</p>
                            <p className=" p-1">Mongo</p>
                        </div>
                    </div>
                    <div className=" col-start-1 sm:col-start-2 sm:row-start-2 sm:row-span-2 border border-[#ABB2BF] text-[#ABB2BF]  font-firecode text-base leading-5">
                        <div className="text-white p-2 font-semibold border-b border-[#ABB2BF]">
                            <p>Framework</p>
                        </div>
                        <div className="flex flex-wrap p-1">
                            <p className=" p-1">React</p>
                            <p className=" p-1">Vue</p>
                            <p className=" p-1">React Native</p>
                        </div>
                    </div>
                    <div className=" sm:col-start-3 sm:row-start-1 sm:row-span-2 col-span-1 text-[#ABB2BF] border border-[#ABB2BF] font-firecode text-base leading-5">
                        <div className="text-white p-2 font-semibold border-b border-[#ABB2BF]">
                            <p>Tools</p>
                        </div>
                        <div className="flex flex-wrap p-1">
                            <p className=" p-1">VSCode</p>
                            <p className=" p-1">Font Awesome</p>
                            <p className=" p-1">Figma</p>
                            <p className=" p-1">Git</p>
                        </div>
                    </div>
                    <div className=" sm:col-start-3 sm:row-start-3 sm:row-span-2 border border-[#ABB2BF] p- text-[#ABB2BF] 2 font-firecode text-base leading-5">
                        <div className="text-white p-2 font-semibold border-b border-[#ABB2BF]">
                            <p>Other</p>
                        </div>
                        <div className="flex flex-wrap p-1">
                            <p className=" p-1">HTML</p>
                            <p className=" p-1">SCSS</p>
                            <p className=" p-1">CSS</p>
                            <p className=" p-1">Tailwind</p>
                            <p className=" p-1">Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}