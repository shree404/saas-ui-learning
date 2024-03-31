import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Consult(){
    return(
        <div className="bg-blue-600">
        <div className="flex justify-center " > 
        <div className=" flex gap-20">
            <div className="">  <br /> <br /><br /> <br />
                <h1 className="text-white text-5xl font-bold">From Nepal to the excellence in <br /> education abroad</h1>
                <p className="text-white text-md  mt-5">
                See where you land with the able assistance of Expert Education.
                </p>  <br /><br /><br /> <br />
            </div>
            <div> <br /><br /><br /> <br />
            <button className="inline-flex gap-2 cursor-pointer items-center justify-center rounded-xl border border-white bg-transparent px-3 py-2 text-xs  font-semibold text-text shadow-sm hover:text-white focus:text-white focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80">
                <p className="text-lg text-white ">
                Get Consulted Now <br />    
                </p>  
    <ArrowForwardIcon className=""/>
  </button>
            </div>
        </div>   <br /><br /><br />
        </div>
    </div>
    )
}

export default Consult;