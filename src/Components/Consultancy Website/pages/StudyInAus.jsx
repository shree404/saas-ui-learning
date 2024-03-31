import React from "react";
import Nav from "../Home/nav";
import StudyInAusHeader from "../StudyInAus/Header";
import bg from '../images/australia.jpg';
import StudyInAusMenu from "../StudyInAus/menu";
import AusForm from "../StudyInAus/form";


function StudyInAus(){
    return(
        <div>
            <div className="w-full  h-full bg-cover bg-center bg-gradient-* " style={{backgroundImage: `url(${bg})`}}>
                <Nav/>
                <StudyInAusHeader/>
            </div>
            <div>
            <StudyInAusMenu/>
            <AusForm/>
            </div>
        </div>
    )
}

export default StudyInAus;