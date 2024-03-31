import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";

function DirectorHero(){
    return(
        <div>
                 <section className="relative  ml-20">
            <div className="text-sm   tracking-tightfont-bold text-white">
              <p className="ml-10 text-5xl mt-20 font-bold">Message from Director </p>
            </div>
            <div className="flex justify-between gap-30">
            <div> <br /><br /> <br />
            </div> 
            <div className="text-white  mr-20">
                <div className="flex gap-3">
                <Link to="/">
                <HomeIcon className=""/>
                </Link>
                <ArrowForwardIcon/>
                <p className="text-white twxt-md">
                <Link to="/about">
                About Us
                </Link>
                </p>
                <ArrowForwardIcon/>
                <p className="text-white twxt-md">
                Message from Director
                </p>
                </div>
            </div>
        </div>
            </section> <br /><br />
        </div>
    )
}

export default DirectorHero;