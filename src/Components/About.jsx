import React from 'react';
import profimg from "../images/myprofile.png";


const About = () => {
    return(
        <>
            <section id="about" className="align-items-center">
              <div className="about-div container-fluid justify-content-center">
                <h1 className="main-heading">About</h1>
                <div className="row justify-content-center">
                    <div className="col-sm-3 order-sm-1 order-lg-2 prof-div">
                        <img src={profimg} className="prof-img" alt="profile-pic"/>
                    </div>
                    <div className="col-sm-3 order-lg-1 order-sm-2 bio-div">
                        <p className="m-2">I am a Computer Science Engineering student at Lovely Professional University (LPU). Pursuing my specialization in Web Development.
                        Passionate about technology and have a hunger and curiosity to explore out new things. I prefer to comprehend new learnings from roots rather than following paths of shortcuts.
                        Sticking to the roots and continuous introspection is my key to success.
                        Apart from that i am keenly interested in User Interface and Graphic designing.
                        </p>
                    </div>
                </div>
                <div className="row link-div">
                    <div className="col-sm-3 ms-lg-2">
                        <a href="#skill">skill</a>
                    </div>
                    <div className="col-sm-3 ms-lg-2">
                        <a href="#education">Educaton</a>
                    </div>
                    <div className="col-sm-3 ms-lg-2">
                        <a href="#certificate">Certificate</a>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};


export default About;
