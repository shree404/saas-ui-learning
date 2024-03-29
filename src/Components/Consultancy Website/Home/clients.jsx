import React from "react";
import AG from '../images/avatarGreen.png';
import AR from '../images/avatarRed.png';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Clients(){
    return(
        <div className="mt-20 mb-20">
            <div>
                <div className= " mt-10 text-5xl font-bold flex justify-center">
                What our clients love about us
                </div>
                <div className="flex justify-center mt-20 mb-20 ">
                <div className="flex gap-20 ">
                    <div className="h-100 w-100 bg-white   md:box-content  ">
                        <div className=" flex gap-10 mt-5 ml-5 mr-5">
                            <div className="h-12 w-12 rounded-full">
                                <img src={AG} alt="Avatar with Green Background" />
                            </div>
                            <p className="text-blue-500 text-md ">Kritisha Pandey</p>
                        </div>
                        <p className="mt-5 mr-5 ml-5 flex justify-center">
                        Great service , very <br />knowledgable and healpful <br />staff . Extermely reliable <br />and trustworthy <br />consultancy . One of <br />the best Consultancy I have <br /> ever come through. <br />Receive very helpful <br />advice throughout my visa <br /> Process . I would strongly <br /> recommend international <br />student to get advice  <br />from Expert Education and <br />Prashanna dai for their <br /> future plans. <br /> <br />
                        </p>
                        <div className="flex justify-center">
                        <Stack spacing={1}>
                         <Rating name="half-rating" defaultValue={5} precision={0.5} />
                         </Stack> 
                         </div>
                    </div>
                    <div className="h-100 w-100  bg-white    md:box-content ">
                        <div className=" flex gap-10 mt-5 ml-5 mr-5">
                            <div className="h-12 w-12 rounded-full">
                                <img src={AR} alt="Avatar with Green Background" />
                            </div>
                            <p className="text-blue-500 text-md ">Tilly Dunage</p>
                        </div>
                        <p className="mt-5 mr-5 ml-5 flex justify-center">
                        I applied my TR and was <br /> Granted the visa within 3 <br /> weeks time . I only had to  <br /> visit thw office twicw ,  first <br />  time they give me free  <br /> consulatation plus the check <br /> list , second time i went  <br /> there with documents <br /> that they asked me to <br /> bring and applied on the   <br /> same day . No time  <br /> Wasting , no money ripping <br /> off. Very friendly staff.  <br />They are Very busy but still <br />provide efficient service . I  <br /> will recommend them <br /> 100 % . <br /><br />
                        </p>
                        <div className="ml-5 mr-5 flex justify-center">
                        <Stack spacing={1}>
                         <Rating name="half-rating" defaultValue={5} precision={0.5} />
                         </Stack>
                         </div>
                         <br />
                    </div>
                    <div className="h-100 w-100  bg-white    md:box-content ">
                        <div className=" flex gap-10 mt-5 ml-5 mr-5">
                            <div className="h-12 w-12 rounded-full">
                                <img src={AG} alt="Avatar with Green Background" />
                            </div>
                            <p className="text-blue-500 text-md ">Umair Khan</p>
                        </div>
                        <p className="mt-5 mr-5 ml-5 flex justify-center">
                        Expert Education provides  <br /> full support to their clients. <br /> They have a very good  <br /> reputation and they <br /> prepare your visa  <br /> application  very<br /> professonlly. I  <br /> successfully received my  <br /> second  student visa <br /> through them and did not   <br /> have any problem at all.<br /> The migrating agents there <br /> are very friendly and help   <br /> full speciallly Upama who<br />handled my case  <br /> personally . They provide  <br /> clients with insights and   <br /> knowledge based on their<br /> experience to make the <br /> case stronger . I would <br />refer to them  again for any <br /> kind of visa application . <br /> 
                        </p>
                        <div className="ml-5 mr-5 flex justify-center">
                        <Stack spacing={1}>
                         <Rating name="half-rating" defaultValue={5} precision={0.5} />
                         </Stack>
                         </div>
                         <br />
                    </div>
                    <div className="h-80 w-80  bg-white    ">
                        <div className="flex justify-center">
                        <div className=" flex gap-10 mt-5 ml-5 mr-5">
                            <div className="h-12 w-12 rounded-full">
                                <img src={AG} alt="Avatar with Green Background" />
                            </div>
                            <p className="text-blue-500 text-md ">Pratikshya Bhandari</p>
                        </div>
                        </div>
                        <p className="mt-5 mr-5 ml-5 flex justify-center">
                        Very happy with the work <br /> of expert education and  <br />  visa consultancy . Very<br /> overwhelming and <br /> experienced staffs. Good <br /> professionalism. Quality<br />  serviced . Good and   <br /> comfortable environment. <br />
                        </p>
                        <div className="ml-5 mr-5 flex justify-center">
                        <Stack spacing={1}>
                         <Rating name="half-rating" defaultValue={5} precision={0.5} />
                         </Stack>
                         </div>
                         <br />
                    </div>
                </div>
                </div>
                </div>
            </div>
    )
}

export default Clients;