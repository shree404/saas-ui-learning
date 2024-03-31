import React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


function AboutBlog(){
    return(
        <div className="">
        <div className="flex justify-center mt-20 mb-20">
        <div className="flex gap-20">
            <div className="h-60 w-60 shadow-md bg-gray-100 ">
                <div className=" "> <br />
                      <button className=" flex  h-20 w-20 ml-20  aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2.5 font-semibold text-white hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-20 child-svg:w-20 dark:focus:ring-white/80">
                         <GroupsIcon className="h-20 w-20  " />
                      </button>
                      <p className="text-5xl font-bold flex justify-center mt-5 ">1000+
                      </p>
                      <p className="text-md flex justify-center mt-5">
                      Global Team Members
                      </p>
                 </div>
            </div>
            <div className="h-60 w-60 shadow-md bg-gray-100 ">
                <div className=" "> <br /> 
                      <button className=" flex  h-20 w-20 ml-20 space-y-20  aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2.5 font-semibold text-white hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-20 child-svg:w-20 dark:focus:ring-white/80">
                         <PersonIcon className="h-20 w-20  " />
                      </button>
                      <p className="text-5xl font-bold flex justify-center mt-5 ">20+
                      </p>
                      <p className="text-md flex justify-center mt-5">
                          Registered Migration Agents
                      </p>
                 </div>
            </div>
            <div className="h-60 w-60 shadow-md bg-gray-100 ">
                <div className=" "> <br /> 
                      <button className=" flex  h-20 w-20 ml-20 space-y-20  aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2.5 font-semibold text-white hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-20 child-svg:w-20 dark:focus:ring-white/80">
                         <HouseIcon className="h-20 w-20  " />
                      </button>
                      <p className="text-5xl font-bold flex justify-center mt-5 ">60+
                      </p>
                      <p className="text-md flex justify-center mt-5">
                      Branch Offices
                      </p>
                 </div>
            </div>
            <div className="h-60 w-60 shadow-md bg-gray-100 ">
                <div className=" "> <br /> 
                      <button className=" flex  h-20 w-20 ml-20 space-y-20  aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2.5 font-semibold text-white hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-20 child-svg:w-20 dark:focus:ring-white/80">
                         <GroupAddIcon className="h-20 w-20  " />
                      </button>
                      <p className="text-5xl font-bold flex justify-center mt-5 ">400+
                      </p>
                      <p className="text-md flex justify-center mt-5">
                      Global Partners
                      </p>
                 </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default AboutBlog;