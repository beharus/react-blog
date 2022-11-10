import React from "react";
import '../App.css';
import myPhoto from "../img/Group 46.png";

export default function Header(){
    return(
        <>
        <div className=" my-10 mt-48 grid grid-cols-1 md:grid-cols-6 items-center">
            <div className=" col-span-3 mb-10">
                <h1 className=" my-2 sm:w-5/6 font-semibold font-firecode text-[32px] leading-[42px] text-white">Behkruz is a <span className=" text-[#C778DD]">web designer</span> and <span className=" text-[#C778DD]">front-end developer</span></h1>
                <p className=" w-10/12 sm:w-9/12 my-6 font-firecode text-base leading-6 font-normal text-[#ABB2BF]">He crafts responsive websites where technologies meet creativity</p>
                <button className="border border-[#C778DD] px-4 py-2 text-white leading-5 font-medium font-firecode no-underline hover:bg-[#C778DD]/40 duration-300 ease-out">Contact me!!</button>
            </div>
            <div className=" col-span-3 grid ">
                <img className="sm:ml-auto mx-auto lg:max-w-none" src={myPhoto} alt='img' />
                <div className=" mx-auto flex py-2 items-center">
                    <div className=" w-4 h-4 bg-[#C778DD]"></div>
                    <span className=" font-medium text-[#ABB2BF] leading-5 text-base ml-2">Currently working on <span className=" text-white">Portfolio</span></span>
                </div>
            </div>
        </div>
        </>
    )
}
