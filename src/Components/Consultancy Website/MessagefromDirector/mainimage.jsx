import React from "react";
import img from '../images/badri-aryal.png';


function MainImage(){
    return(
        <div>
            <div className="flex justify-center ml-20 mr-20 h-100 w-100" >
                    <img src={img} alt="Picture of Director - Mr Badri Aryal" className="" />
                </div>
        </div>
    )
}

export default MainImage;