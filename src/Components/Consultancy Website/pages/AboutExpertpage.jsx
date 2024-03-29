import React from "react";
import Nav from "../Home/nav";
import bg from '../images/studying.jpg';
import HeroAbout from "../AboutExpert/hero";
import Motto from "../AboutExpert/motto";

function AboutExpertPage(){
    return(
        <div>
            <div className="w-full  h-full bg-cover bg-center " style={{backgroundImage: `url(${bg})`}}>
            <Nav/>
            <HeroAbout/>
            </div>
            <Motto/>
        </div>
    )
}

export default AboutExpertPage;