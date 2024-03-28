import React from "react";
import map from '../images/map.png';

function Data(){
    return(
        <div className="bg-blue-400 mt-10  ">
            <div className=" ml-20 mr-20 mt-20 flex justify-center">
            <div className=" flex flex-col items-start justify-between space-y-20 md:flex-row gap-30 ">
                <div className="mt-20">
                    <p className="text-white text-5xl font-bold ">
                    Accelerating your <br /> academic growth <br /> overseas
                    </p> <br /><br />
                    <p className="text-white text-md ">
                    Our education consultants can support with excellence in guidance with <br /> education and visa consultancy in Nepal. We’ve been growing since 2003 <br /> with over 50 branches across 15 countries. You can enjoy a wide range of <br /> services for fulfilling your dreams to study in Australia, the UK, Canada and <br /> the US.
                    </p>
                </div>
                <div className="h-30 w-30 ">
                    <div className="" >
                    <img src={map} alt="Location where Expert Education Located " className="mt-20 h-30 w-30" />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-20 ml-2">
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
                <hr  className="w-1/4 h-10 border-t-2 border-white"/>
            </div>
            <div className="flex justify-center ml-20 mr-20 ">
            <div className="flex flex-col items-start justify-between  md:flex-row gap-20 mb-20">
                <div className="mr-20">
                    <p className="uppercase text-white text-md ">international student <br /> assisted </p>
                    <p className="text-white text-5xl font-bold"> 100,000+</p>
                </div>
                <div className="mr-20">
                    <p className="uppercase text-white text-md">
                        scholorship <br /> approved
                    </p>
                    <p className="text-white text-5xl font-bold">10,000+</p>
                </div>
                <div >
                    <p className="uppercase text-white text-md " >
                    ENROLLED IN <br />
                    IELTS/PTE PREPARATION CLASSES
                    </p>
                    <p className="text-white text-5xl font-bold">
                    25,000+
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Data;