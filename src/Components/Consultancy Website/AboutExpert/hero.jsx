import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";


function HeroAbout(){
    return(
        <div >
              <section className="relative  ml-20">
            <div className="text-sm font-semibold  tracking-tightfont-bold text-white">
              <p className="ml-10 text-4xl mt-20">About Expert Education </p>
            </div>
            <div className="flex justify-between gap-30">
            <div>
            <h1 className=" ml-10 font-display relative z-10 mt-2  text-white  leading-tight tracking-tight lg:mt-8 text-lg ">
              Taking you where dreams are made true
            </h1> <br /><br /> <br />
            </div> 
            <div className="text-white  mr-20">
                <div className="flex gap-3">
                <Link to="/">
                <HomeIcon className=""/>
                </Link>
                <ArrowForwardIcon/>
                <p className="text-white twxt-md">
                About Us
                </p>
                </div>
            </div>
        </div>
            </section>
              </div>
    )
}

export default HeroAbout;