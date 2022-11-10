import React from "react";
import telegram from '../img/Telegram.png';
import img from '../img/Email.png';

export default function Contact(){
    return<>
    <div className="flex mt-24 py-12 items-center col-span-1 sm:col-span-2">
        <h2 className="font-medium font-firecode text-[32px] leading-[42px] text-white"><span className="text-[#C778DD]">#</span>about-me</h2>
        <div className="h-px w-1/2 sm:w-1/5 md:w-3/5 mx-5 bg-[#C778DD]"></div>
    </div>
    <div className=" grid font-firecode grid-cols-1 gap-24 md:grid-cols-2 pb-28">
                <div>
                    <p className=" md:w-full xl:w-8/12 text-[#ABB2BF] leading-5 font-medium text-base">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className=" w-fit border border-[#ABB2BF] flex flex-col p-4 gap-4 items-start font-firecode">
                        <h2 className=" text-white font-semibold">Message me here</h2>
                        <div>
                        <a className="flex items-center hover:text-[#C778DD] ease-out duration-300" href="https://t.me/Beha_coder">
                        <div className=" w-full pr-2">
                            <img className="" src={telegram} />
                        </div>
                            @Beha_coder</a>
                        </div>
                        <div>
                            <a className="flex items-center hover:text-[#C778DD] ease-out duration-300" href="https://mail.google.com/mail/u/0/?tab=rm#inbox">
                            <div className=" w-full pr-2">
                                <img className="" src={img} />
                            </div>
                            sd979141@gmail.com</a>
                        </div>
                    </div>
                </div>
    </div>
    </>
}