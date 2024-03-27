import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import bg from './images/studying.jpg';

function Nav(){
    return(
        <div className="">
            <div className=" ">
            <div className="mx-auto w-full max-w-6xl lg:mt-0">
        {/* Nav */}
        <nav className="relative z-20  flex shrink-0 items-center space-x-2">
          {/* <a href="#">
            <img
              src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664089637/saasblocks-tdg1/assets/logos/penta_full.png"
              alt="penta logo"
              className="h-8 lg:h-12"
            />
          </a> */}

          <div className="flex-1"></div>
          <div >
          <div className="hidden space-x-10 mt-10 lg:flex  font-bold text-white
           ">
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              STUDY ABROAD
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              STUDENT SERVICES
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              VISA
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              EVENT
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              CONTACT US
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