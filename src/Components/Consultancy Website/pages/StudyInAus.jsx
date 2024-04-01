import React from "react";
import Nav from "../Home/nav";
import StudyInAusHeader from "../StudyInAus/Header";
import bg from '../images/australia.jpg'; 
import AusBlog from "../StudyInAus/AusBlog";
import AusPage from "../StudyInAus/page";
import Footer from '../Home/footer';


function StudyInAus(){
    return(
        <div>
            <div className="w-full  h-full bg-cover bg-center bg-gradient-* " style={{backgroundImage: `url(${bg})`}}>
                <Nav/>
                <StudyInAusHeader/>
            </div>
            <div className=" flex mb-20 ">
            <div className="inline-flex gap-20">
           <AusPage/>
           <AusBlog/>
           </div>
            </div>
            <Footer/>
        </div>
    )
}

export default StudyInAus;