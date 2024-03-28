import React from "react";
import Nav from "./Components/Consultancy Website/Home/nav";
import Hero from "./Components/Consultancy Website/Home/hero";
import LandingPage from "./Components/Consultancy Website/Home/landingpage";
import bg from './Components/Consultancy Website/images/studying.jpg';
import Description from "./Components/Consultancy Website/Home/description";
import Blog from "./Components/Consultancy Website/Home/blog";
import Data from "./Components/Consultancy Website/Home/data";
import Footer from "./Components/Consultancy Website/Home/footer";
import Goals from "./Components/Consultancy Website/Home/Goals";
import Choose from "./Components/Consultancy Website/Home/choose";


function App() {
  return (
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
      <Footer/>
    </div>
  );
}

export default App;
