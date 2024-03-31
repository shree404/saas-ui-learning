import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import logo from '../images/expertLogo.png';
import HandleHover from "../footer/hoverfacebook";
import HandleHoverInsta from "../footer/hoverinsta";
import HandleHoverLD from "../footer/hoverlinkedin";
import HandleHoverTW from "../footer/hoverTwitter";


function Footer(){
    return(
        
        <div className="px-4 pt-10 pb-18 bg-black" >
            <div className="flex justify-center ">
            <div className="flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0 gap-10 ">
                <div>
            <div className="text-3xl uppercase tracking-wide text-heading font-bold ">
                STUDENT <br /> SERVICES
              </div>
              <div className="mt-6 space-y-3 font-medium">
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Overseas University Enrollment
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Visa Application
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    PTE Test Preparation
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    IELTS Training
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Study Abroad Accomodation
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Student Health Insurance
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Banking in Australia
                  </a>
              </div>
              </div>
              <div>
              <div className="text-3xl uppercase tracking-wide text-heading font-bold ">
                about
              </div>
              <div className="mt-6 space-y-3 font-medium">
              <Link to="/about">
              <div
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    About Us
                  </div>
                  </Link>
                  <Link to="/message-from-director">
              <div
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Message From Director
                  </div>
                  </Link>
              </div>
              </div>
              <div>
              <div className="text-3xl uppercase tracking-wide text-heading font-bold ">
                Quick links
              </div>
              <div className="mt-6 space-y-3 font-medium" >
              <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Events
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Blogs
                  </a>
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Contact Us
                  </a>
              </div>
              </div>
              <div>
              <div>
              <Menu as="div" className="relative inline-block text-left gap-5 ">
              <Menu.Button onClick={() => window.location.href = "https://www.facebook.com/experteducationau"}>
                <HandleHover/>
              </Menu.Button>
              <Menu.Button onClick={() => window.location.href = "https://www.instagram.com/experteducationofficial/"}>
                <HandleHoverInsta/>
              </Menu.Button>
              <Menu.Button onClick={() => window.location.href = "https://twitter.com/eevsHQ"}>
                <HandleHoverTW/>
              </Menu.Button>
              <Menu.Button onClick={() => window.location.href = "https://www.linkedin.com/company/experteducation/"}>
                <HandleHoverLD/>
              </Menu.Button>
            </Menu>
              </div>
              <div className="h-20 w-20 mt-10">
              <img src={logo} alt="Logo of Expert Education"  />
            </div>
            </div>
            </div>
            </div>
            <div className="mt-5 ml-4">
            <div className="flex justify-center mt-10 ml-2">
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
            </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex flex-col items-start justify-between space-y-20 md:flex-row md:space-y-0 md:space-x-20 ">
                    <div className="text-white justify-start text-md  mr-20">
                        <p className="">Copyright © 2024. Expert Education & Visa Services. </p>
                        <p className="">All Rights Reserved | MARN: 0852737</p>
                    </div>
                  <div className="flex  gap-10">
                    <div className="text-white  text-md">
                    <p>Privacy Policy</p>
                    </div>
                    <div className="text-white text-md">Code of Conduct</div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;