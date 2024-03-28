import React from "react";
import Nav from "./Components/Day1/nav";
import Hero from "./Components/Day1/hero";
import LandingPage from "./Components/Day1/landingpage";
import bg from './Components/Day1/images/studying.jpg';
import Description from "./Components/Day1/description";
import Blog from "./Components/Day1/blog";
import Data from "./Components/Day1/data";


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
    </div>
  );
}

export default App;
