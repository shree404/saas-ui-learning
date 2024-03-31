import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";

function StudyInAusMenu(){
    return(
        <div>
            <div>
                <button className="h-10 w-30">
                    <div className="">
                    <p className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5  text-black font-bold text-md shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary hover:text-white ">
                    Universities and Courses available   
                    <div className="ml-2">
                    <button className=" inline-flex aspect-square cursor-pointer items-center justify- h-7 w-7 rounded-full border-none border-primary bg-white p-2 font-semibold text-black shadow-sm hover:border-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-4 child-svg:w-4 dark:focus:ring-white/80">
                    <ChevronRightIcon className="h-5 w-5 " />
                   </button>
                   </div>
                    </p>
                    </div>
                    </button>
            </div>
            <div>
            <button className="h-10 w-30">
                    <div className="">
                    <p className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5  text-black font-bold text-md shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary hover:text-white ">
                    Fees , scholorships and cost of living   
                    <div className="ml-2">
                    <button className=" inline-flex aspect-square cursor-pointer items-center justify- h-7 w-7 rounded-full border-none border-primary bg-white p-2 font-semibold text-black shadow-sm hover:border-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-4 child-svg:w-4 dark:focus:ring-white/80">
                    <ChevronRightIcon className="h-5 w-5 " />
                   </button>
                   </div>
                    </p>
                    </div>
                    </button>
            </div>
            <div>
            <button className="h-10 w-30">
                    <div className="">
                    <p className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5  text-black font-bold text-md shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary hover:text-white ">
                    Admission Process  
                    <div className="ml-10">
                    <button className=" inline-flex aspect-square cursor-pointer items-center justify- h-7 w-7 rounded-full border-none border-primary bg-white p-2 font-semibold text-black shadow-sm hover:border-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-4 child-svg:w-4 dark:focus:ring-white/80">
                    <ChevronRightIcon className="h-5 w-5 " />
                   </button>
                   </div>
                    </p>
                    </div>
                    </button>
            </div>
            <div>
            <button className="h-10 w-30">
                    <div className="">
                    <p className="inline-flex cursor-pointer items-center justify-center rounded-xl   px-4 py-2.5  text-black font-bold text-md shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary hover:text-white ">
                    Life in Australia   
                    <div className="ml-10">
                    <button className=" inline-flex aspect-square cursor-pointer items-center justify- h-7 w-7 rounded-full border-none border-primary bg-white p-2 font-semibold text-black shadow-sm hover:border-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-4 child-svg:w-4 dark:focus:ring-white/80">
                    <ChevronRightIcon className="h-5 w-5 " />
                   </button>
                   </div>
                    </p>
                    </div>
                    </button>
            </div>
        </div>
    )
}

export default StudyInAusMenu;