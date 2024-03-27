import React from "react";
import aus from './images/australia.jpg';
import can from './images/canada.jpg';
import usa from './images/usa.jpg';
import uk from './images/uk.jpg';
import Box from '@mui/material/Box';
  

function Blog(){
    return(
        <div>
            <div className="mt-20 mb-10  mr-20">
                <div className="mr-20">
                <h2 className="font-bold text-purple-800 text-5xl flex justify-center mr-20 ">Your academic goals are waiting to be achieved</h2>
                <div className="ml-7">
                <p className="text-black mt-10 ml-20">Choose your study destination</p>
                </div>
                </div>
            </div>
            <div>
                <div className="flex gap-5 justify-center" >
                <div className="w-60 h-85 bg-white  shadow-md rounded-lg p-4">
                        <div className=" ">
                            <img src={aus} alt="Picture of Austrila" className="h-32 mt-5 flex justify-center" />
                            <h2 className="font-bold text-purple-800 text-xl flex justify-center">
                            Study in Austrila
                            </h2>
                            <p className="">
                            Widen your career scope by studying in Australia in some of the top most globally ranked universities.
                            </p>
                        </div>
                    </div>
                    <div className="w-60 h-85 bg-white  shadow-md rounded-lg p-4">
                        <div className=" ">
                            <img src={can} alt="Picture of Canada" className="h-32 mt-5 flex justify-center" />
                            <h2 className="font-bold text-purple-800 text-xl flex justify-center">
                            Study in Canada
                            </h2>
                            <p className="">
                            Enjoy quality education and an affordable fee structure while pursuing your studies in Canada.
                            </p>
                        </div>
                    </div>
                    <div className="w-60 h-85 bg-white  shadow-md rounded-lg p-4">
                        <div className=" ">
                            <img src={usa} alt="Picture of USA" className="h-32 mt-5 flex justify-center" />
                            <h2 className="font-bold text-purple-800 text-xl flex justify-center">
                            Study in USA From  Nepal
                            </h2>
                            <p className="">
                            Experience academic excellence with the world's most advanced internet and technology structure in the US.
                            </p>
                        </div>
                    </div>
                    <div className="w-60 h-85 bg-white  shadow-md rounded-lg p-4">
                        <div className=" ">
                            <img src={uk} alt="Picture of UK" className="h-32 mt-5 flex justify-center" />
                            <h2 className="font-bold text-purple-800 text-xl flex justify-center">
                            Study in UK
                            </h2>
                            <p className="">
                            Plenty of research facilities and even more opportunities to explore your career options in the UK.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Blog;