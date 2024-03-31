import React from "react";
import MainImage from "./mainimage";
import MainMessage from "./mainmessage";


function Main(){
    return(
        <div className="flex row mt-20 mb-20">
            <MainImage/>
            <MainMessage className="mt-20" /> 
        </div>
    )
}

export default Main;