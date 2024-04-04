import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";

function StudyInAusHeader(){
    return(
        <div  className="mt-10 ml-20">
             <section className="relative">
            <div> <br /><br />
            <h1 className=" ml-20 font-display relative z-10 mt-4 text-4xl text-white font-bold leading-tight tracking-tight  lg:mt-8 lg:text-6xl">
            Study in Australia
            </h1>
            </div>
            </section>
            <div className="flex justify-between gap-30" >
              <div className="flex mt-8"> <br /><br />
                <p className="text-white text-xl ml-20">Education Consultancy in Nepal for Australia</p> <br /> <br />
                <br /><br /><br />
              </div>
              <div className="text-white  mr-20">
                <div className="flex gap-3">
                <Link to="/">
                <HomeIcon className=""/>
                </Link>
                <ArrowForwardIcon/>
                <p className="text-white twxt-md">
                Study in Australia
                </p>
                </div>
            </div>
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

export default StudyInAusHeader;