import React from "react";
import goal1 from '../images/goal1.jpg';
import goal2 from '../images/goal2.jpg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Goals(){
    return(
        <div className="flex justify-center">
            
            <div className="flex ml-20 mt-20 gap-20 mb-20 ">
            <div className=" ">
                <div>
                    <p className="text-5xl text-black font-bold ">
                    Commence with your <br /> goals
                    </p>
                    <p className="text-lg text-black mt-10">Expert Education offers you the best education consultancy <br /> in Nepal.</p>
                </div>
                <div className="flex mt-8 gap-3">
                <ArrowRightIcon className="text-blue-600" />
                <div>
                <p className="text-lg text-blue-600 font-bold"> Visa consultation</p>
                <p className="text-lg">We provide professional visa consulting experts to assist you <br /> with all details and requirements specific to your goals.</p>
                </div>
                </div>
                <div className="flex mt-8 gap-3 ">
                <ArrowRightIcon className="text-blue-600" />
                <div>
                <p className="text-lg text-blue-600 font-bold"> Admissions advice</p>
                <p className="text-lg">We’ll guide you from the very beginning till you gain admission <br /> in a college or university suitable to you.</p>
                </div>
                </div>
                <div className="flex mt-8  gap-3">
                <ArrowRightIcon className="text-blue-600" />
                <div>
                <p className="text-lg text-blue-600 font-bold"> Travel and stay</p>
                <p className="text-lg">Need the best accommodation while studying abroad? We’ve<br /> got you covered.</p>
                </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center gap-2 md:flex-col">
                    <div className="space-x-20 -space-y-20 ">
                  <img
                    src={goal1}
                    alt="GRaduation"
                    className=" "
                  />
                  <img
                    src={goal2}
                    alt="Group of studeents are walking while studying"
                    className=" "
                  />
                </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Goals