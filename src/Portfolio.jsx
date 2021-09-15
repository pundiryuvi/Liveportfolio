import React from 'react';
import Certificate from './Components/Certificate';
import Education from './Components/Education';
import Skill from './Components/Skill';
import About from './Components/About';

const Portfolio = () => {
    return(
        <> 
            <About/>
            <Skill/>
            <Education/>
            <Certificate/>
        </>
    );

};

export default Portfolio;