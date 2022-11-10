import React from "react";
import Union from '../img/Union.png';
import telegram from '../img/Telegram.png';
import img from '../img/Email.png';
import figma from '../img/Figma.png';

export default function Footer() {
    return<>
    <footer className=" relative justify-between w-full border-[#ABB2BF] grid md:grid-cols-12 grid-cols-1 font-firecode py-8">

        <div className=" col-span-10">
            <div className="flex text-base leading-5 text-white cursor-pointer font-firecode">
            <img src={Union}/>
            <span className=" font-firecode font-semibold ml-5">Beha_rus</span>
            <span className="text-[#ABB2BF] px-8 font-normal">sd979141@gmail.com</span>
            </div>
            <p className=" text-white my-4">Web designer and front-end developer based in Ukraine</p>
        </div>
        <div className=" col-span-1 md:col-span-2 mb-8">
            <h1>Media</h1>
            <div className=" w-4/12 md:w-full flex justify-end">
                            <div className=" w-full pr-2">
                                <img className="" src={img} />
                            </div>
                            <div className=" w-full pr-2">
                                <img className="" src={telegram} />
                            </div>
                            <div className=" w-full pr-2">
                                <img className="" src={figma} />
                            </div>
            </div>
        </div>
        <div className="text-[#ABB2BF] col-span-1 md:col-span-12 md:text-center absolute left-0 right-0 mx-auto bottom-4">© Copyright 2022. Made by Elias</div>
    </footer>
    </>
}