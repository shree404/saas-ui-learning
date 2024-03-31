import React from "react";
import Nav from "../Home/nav";
import bg from '../images/studying.jpg';
import HeroAbout from "../AboutExpert/hero";
import Motto from "../AboutExpert/motto";
import AboutBlog from "../AboutExpert/aboutdata";
import Footer from "../Home/footer";
import Welcome from "../AboutExpert/welcome";
import Guide from "../AboutExpert/guide";
import MissionVision from "../AboutExpert/missionvision";
import Consult from "../AboutExpert/consult";

function AboutExpertPage(){
    return(
        <div>
            <div className="w-full  h-full bg-cover bg-center " style={{backgroundImage: `url(${bg})`}}>
            <Nav/>
            <HeroAbout/>
            </div>
            <Motto/>
            <AboutBlog/>
            <Welcome/>
            <Guide/>
            <MissionVision/>
            <Consult/>
            <Footer/>
        </div>
    )
}

export default AboutExpertPage;