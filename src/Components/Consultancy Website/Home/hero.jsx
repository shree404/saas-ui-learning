import React from "react";
import Herobutton from "./herobutton";

function Hero(){
    return(
        <div className="mt-10 ml-20">
          <section className="relative">
            <div className="text-sm font-semibold uppercase tracking-tightfont-bold text-white">
              <p className="ml-10 text-xl">Expert Education </p>
              <hr className="w-1/5 border-white p-1 h-2"/>
            </div>
            <div>
            <h1 className="font-display relative z-10 mt-4 text-4xl text-white font-bold leading-tight tracking-tight text-heading lg:mt-8 lg:text-6xl">
              Explore your <br /> <span>dreams overseas</span>
            </h1>
            </div>
            </section>
            <div className="flex mt-8">
              <div className="mr-5">
              <Herobutton/>
              </div>
              <div>
                <p className="text-white text-md font-bold">Discover your options</p>
              </div>
            </div>
          </div>
        
    )
}

export default Hero;