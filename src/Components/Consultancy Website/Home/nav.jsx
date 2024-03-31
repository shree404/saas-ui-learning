import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import bg from '../images/studying.jpg';
import Aboutmenu from "../Nav/aboutmenu";
import StudyAbroadMenu from "../Nav/studyabroadmenu";
import StudentServicesMenu from "../Nav/studentservicesmenu";
import Visamenu from "../Nav/visamenu";
import ContactUsmenu from "../images/contactusmenu";
import Eventmenu from "../Nav/eventmenu";
import Blogmenu from "../Nav/blogmenu";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/expertLogo.png';

function Nav(){
    return(
        <div className="">
            <div className=" ">
              {/* <div className="h-20 w-20">
              <div className=" h-20 w-20  ">
                <br />
                <img src={logo} alt="Logo of expert education and visa services" className="ml-10 " />
              </div>
              </div> */}
            <div className="mx-auto w-full max-w-6xl lg:mt-0">

        {/* Nav */}
        <nav className=" flex shrink-0 items-center -space-x-2">
          <div className=" -space-x-10 mt-10 ">
            <img
              src={logo}
              alt="Expert logo"
              className="h-10 lg:h-12 -space-x-5"
            />
            </div>
          <div className="flex-1"></div>
          <div >
          <div className="hidden space-x-4 ml- 10 mt-10 lg:flex  font-bold text-white
           ">
            <div className="text-lg hover:text-heading focus:text-heading">
            <Aboutmenu/>
            </div>
            <div
              className="text-lg hover:text-heading focus:text-heading"
            >
              <StudyAbroadMenu/>
            </div>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <StudentServicesMenu/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <Visamenu/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <Eventmenu/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <Blogmenu/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <ContactUsmenu/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              <SearchIcon/>
            </a>
          </div>
          </div>
          </nav>
        </div>
        </div>
        </div>
    );
}


export default Nav;