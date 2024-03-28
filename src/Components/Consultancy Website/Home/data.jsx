import React from "react";
import map from '../images/map.png';

function Data(){
    return(
        <div className="bg-blue-400 mt-10 flex justify-center">
            <div className="flex justify-between gap-20">
                <div className=" h-80 max-w-4xl mt-20 justify-start
                ">
                    <h2 className="font-bold text-white text-4xl justify-start "> Accelerating your academic growth  overseas</h2>
                    <p className="text-md mt-10">Our education consultants can support with excellence in guidance with education and visa consultancy in Nepal. We’ve been growing since 2003 with over 50 branches across 15 countries. You can enjoy a wide range of services for fulfilling your dreams to study in Australia, the UK, Canada and the US.</p>
                </div>
                <div className="h-30 w-30 justify-end ">
                    <div className="" >
                    <img src={map} alt="Location where Expert Education Located " className="mt-20 h-30 w-30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;