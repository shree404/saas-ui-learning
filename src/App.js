import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/Consultancy Website/pages/Landing";
import AboutExpertPage from "./Components/Consultancy Website/pages/AboutExpertpage";
import MessageFromDirector from "./Components/Consultancy Website/pages/MessagefromDirector";
import StudyInAus from "./Components/Consultancy Website/pages/StudyInAus";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"   element= {<LandingPage/>} />
      <Route path="/about"   element= {<AboutExpertPage/>} />
      <Route path="/message-from-director"   element= {<MessageFromDirector/>} />
      <Route path="/study-in-australia"   element= {<StudyInAus/>} />
    </Routes>
  </BrowserRouter>
    // <div>
    //   <LandingPage/>
    //   <AboutExpertPage/>
    // </div>
  );
}

export default App;
