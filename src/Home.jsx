import React from 'react';
import web from "../src/images/immamul-day-2.png";
import { NavLink } from 'react-router-dom';
import Typewriter from "typewriter-effect";


const Home = () => {

    return(
        <>
            <section id="header" className="align-items-center">
                <div className="container-fluid col-10 d-flex justify-content-center mt-5">
                    <div className="img-div">
                      <img src={web} className="profile-img" alt="profile img"/>
                  </div>
                </div>
                <div className="container-fluid col-10 d-flex justify-content-center">
                    <h1>YUVRAJ SINGH PUNDIR</h1>
                </div>
                <div className="container-fluid col-10 d-flex justify-content-center">
                    <h3 className="profile-div">
                    <Typewriter
  
                      onInit={(typewriter)=> {

                      typewriter
   
                      .typeString("UI/UX DESIGN")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("WEB DESIGN")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("REACT DEVELOPMENT")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("DJANGO DEVELOPMENT")
                      .start();
                      }}
                    />
                    </h3>
                </div>
                <div className="container-fluid col-10 d-flex justify-content-center">
                    <NavLink className="btn-div" to="/portfolio">Get Started</NavLink>
                </div>
                <div className="container-fluid col-10 mt-4 d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center">
                        <a href="mailto:yuvrajrpundir@gmail.com">
                            <img className="img-icon" src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="email-icon"/>
                        </a>
                    </div>
                    <div className="icon-div d-flex justify-content-center">
                        <a href="https://www.instagram.com/pundir_yuvi/">
                            <img className="img-icon" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="inst-icon"/>
                        </a>
                    </div>
                    <div className="icon-div d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/yuvraj-singh-pundir-2402">
                            <img className="img-icon" src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="inst-icon"/>
                        </a>
                    </div>
                    <div className="icon-div d-flex justify-content-center">
                        <a href="https://github.com/pundiryuvi">
                            <img className="img-icon" src="https://img.icons8.com/bubbles/50/000000/github.png" alt="inst-icon"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Home;
