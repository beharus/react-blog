import React from "react";
import '../App.css';
import myPhoto from "../img/quote.png";

export default function Quote() {
    return(
        <div className="">
            <div className="">
            <img className=" my-10 md:my-28 mx-auto" src={myPhoto} alt='img' />
            </div>
        </div>
    )
}