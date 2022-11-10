import React from "react";
import Navbar from './components/Navbar';
import Header from './components/header';
import Quote from "./components/Quote";
import Project from "./components/project";
import Skills from "./components/skills";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";



export default function FullPage(){
    return(
        <>
        <div className='mx-auto max-w-[2560px]  grid justify-center '>
          <div className="w-11/12 md:w-10/12 m-auto z-40">
          <Navbar />
          <Header />
          <Quote />
          <Project />
          <Skills />
          <AboutMe />
          <Contact />
          <Footer />
          </div>
        </div>
        </>
    )
}