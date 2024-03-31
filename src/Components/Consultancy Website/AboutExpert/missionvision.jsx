import React from "react";

function MissionVision(){
    return(
        <div className="flex justify-center mt-10 mb-20">
            <div className="flex gap-20">
                <div className="h-60 w-80 shadow-md bg-slate-700"> 
                <p  className="  text-white text-lg font-bold flex justify-center"> <br /> Our Mission </p> <br />
                    <p className="text-white text-md flex justify-center ml-10 mr-10 " > 
                    Our mission is to provide tailored advice and support to  international students in all areas above and beyond education, empowering them to make the best decisions for their future.
                    </p>
                </div>
                <div className="h-60 w-80 shadow-md bg-slate-700"> 
                <p  className="  text-white text-lg  font-bold flex justify-center"> <br /> Our Vision </p> <br />
                    <p className="text-white text-md flex justify-center ml-10 mr-10 " > 
                    Our vision is to assist international students in attaining their abroad study goals and guide them in achieving their career goals to set up a bright future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MissionVision;