import React from 'react';
import Nav from '../Home/nav';
import DirectorHero from '../MessagefromDirector/hero';
import Footer from '../Home/footer';

import Main from '../MessagefromDirector/main';

function MessageFromDirector(){
    return(
        <div>
            <div className='bg-blue-600'>
                <Nav/>
                <DirectorHero/>
            </div>
            <div className='flex justify-center mb-20'>
               <Main/>
            </div>
            <Footer/>
        </div>
    )
}

export default MessageFromDirector;