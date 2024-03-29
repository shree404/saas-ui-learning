import React from "react";
import Nav from "../Home/nav";
import Hero from "../Home/hero";
import bg from '../images/studying.jpg';
import Description from "../Home/description";
import Blog from "../Home/blog";
import Data from "../Home/data";
import Footer from "../Home/footer";
import Clients from "../Home/clients";
import Choose from "../Home/choose";
import Goals from "../Home/Goals";


function LandingPage(){
    return(
        <div>
        <div className="h-screen bg-cover bg-center " style={{backgroundImage: `url(${bg})`}}>
        <Nav/>
        <Hero/>
        </div>
        <Description/>
        <Blog/>
        <Data/>
        <Goals/>
        <Choose/>
        <Clients/>
        <Footer/>
      </div>
    )
}

export default LandingPage;