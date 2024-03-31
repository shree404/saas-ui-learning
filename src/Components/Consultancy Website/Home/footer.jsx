import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import logo from '../images/expertLogo.png';

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
                  <a
                  href="#"
                  className="flex gap-2 font-semibold text-text hover:text-heading"
                >
                    <ChevronRightIcon className="h-5 w-5 " />
                    Message from Director
                  </a>
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
              <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white ">
              <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M11.4758 8.88543L11.8904 6.15533H9.2968V4.38446C9.2968 3.63737 9.65845 2.90873 10.8201 2.90873H12V0.58446C12 0.58446 10.9297 0.399994 9.90685 0.399994C7.76986 0.399994 6.37443 1.70786 6.37443 4.07456V6.15533H4V8.88543H6.37443V15.4856C6.85114 15.5613 7.33881 15.6 7.83562 15.6C8.33242 15.6 8.82009 15.5613 9.2968 15.4856V8.88543H11.4758Z" />
                  </svg>
            </Menu.Button>
            <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white ">
            <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14.038 4.78718C14.0442 4.92798 14.0442 5.06238 14.0442 5.20318C14.0504 9.47199 10.9141 14.4 5.17858 14.4C3.48695 14.4 1.82618 13.8944 0.400024 12.9472C0.646978 12.9792 0.893932 12.992 1.14089 12.992C2.54235 12.992 3.90677 12.5056 5.01188 11.6032C3.67833 11.5776 2.5053 10.6752 2.09783 9.35679C2.56704 9.45279 3.0486 9.43359 3.50547 9.29919C2.05461 9.00479 1.01123 7.67998 1.00506 6.13758C1.00506 6.12478 1.00506 6.11198 1.00506 6.09918C1.43723 6.34878 1.92496 6.48958 2.41887 6.50238C1.05445 5.55518 0.628457 3.66717 1.45575 2.18877C3.04243 4.21117 5.37614 5.43358 7.88272 5.56798C7.62959 4.44797 7.97533 3.27037 8.7841 2.47677C10.0374 1.25436 12.013 1.31836 13.1984 2.61757C13.896 2.47677 14.569 2.20797 15.1802 1.83037C14.9456 2.57917 14.4579 3.21277 13.8096 3.61597C14.427 3.53917 15.032 3.36637 15.6 3.11037C15.1802 3.76317 14.6493 4.32637 14.038 4.78718Z" />
                  </svg>
            </Menu.Button>
            <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white ">
            <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z" />
                  </svg>
            </Menu.Button>
            <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white ">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    <path
                      d="M15.6704 4.15287C15.4859 3.46753 14.9456 2.92717 14.2602 2.74266C13.0082 2.39999 7.99997 2.39999 7.99997 2.39999C7.99997 2.39999 2.99175 2.39999 1.7397 2.72948C1.06754 2.91399 0.514001 3.46753 0.329488 4.15287C0 5.40492 0 8.00129 0 8.00129C0 8.00129 0 10.6108 0.329488 11.8497C0.514001 12.535 1.05436 13.0754 1.7397 13.2599C3.00493 13.6026 7.99997 13.6026 7.99997 13.6026C7.99997 13.6026 13.0082 13.6026 14.2602 13.2731C14.9456 13.0886 15.4859 12.5482 15.6704 11.8629C15.9999 10.6108 15.9999 8.01447 15.9999 8.01447C15.9999 8.01447 16.0131 5.40492 15.6704 4.15287Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.40524 10.4L10.57 8.00129L6.40524 5.60262V10.4Z"
                      fill="#1A1D2D"
                    />
                  </svg>
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