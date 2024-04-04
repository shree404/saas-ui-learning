import React from "react";
import Nav from "../Home/nav";
import bg from '../images/canada.jpg';
import StudyInCanHero from "../studyincan/Hero";
import StudyInCanMenu from "../studyincan/menu";
import SyudyInCanFormHeader from "../studyincan/formheader";
import AusForm from "../StudyInAus/form";



function StudyInCan(){
    return(
        <div>
            <div className="w-full  h-full bg-cover bg-center bg-gradient-* " style={{backgroundImage: `url(${bg})`}} >
                <Nav/>
                <StudyInCanHero/>
            </div>
            <StudyInCanMenu/>
            <SyudyInCanFormHeader/>
            <AusForm/>
        </div>
    )
}

export default StudyInCan;