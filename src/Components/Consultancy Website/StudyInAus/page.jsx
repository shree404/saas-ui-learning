import React from "react";
import StudyInAusMenu  from "./menu";
import AusFromHeader from "./formheader";
import AusForm from "./form";

function AusPage(){
    return(
        <div className="ml-20  ">
            <StudyInAusMenu/>
            <AusFromHeader/>
            <AusForm/>
        </div>
    )
}

export default AusPage;