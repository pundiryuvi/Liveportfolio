import React from 'react';



const Education = () =>{
    return(
        <>
            <section id="education">
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto d-flex justify-content-center">
                        <h1 className="main-heading">My Education</h1>
                    </div>
                </div>
            </div>
            <div className="container col-10">
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <div className="timeline">
                    <a href="https://www.lpu.in/" className="timeline-content">
                        <span className="timeline-year">2017-21</span>
                        <div className="timeline-icon">
                          <img src="https://img.icons8.com/ios-filled/60/ffffff/graduation-cap.png" alt="graduate"/>
                        </div>
                        <h3 className="title">B.Tech (Computer Science)</h3>
                        <h5 className="description">
                            Lovely Professional University (Phagwara)
                        </h5>
                        <h4 className="cgpa">
                            7.46 CGPA
                        </h4>
                    </a>
                </div>
                <div className="timeline">
                    <a href="https://apsthanabhawan.com/" className="timeline-content">
                        <span className="timeline-year">2013-14</span>
                        <div className="timeline-icon">
                           <img src="https://img.icons8.com/glyph-neue/64/ffffff/school-building.png" alt="school-icon"/>
                        </div>
                        <h3 className="title">XII (C.B.S.E)</h3>
                        <h5 className="description">
                            Arpan Public School (Thanabhawan)
                        </h5>
                        <h4 className="cgpa">
                            7.06 CGPA
                        </h4>
                    </a>
                </div>
                <div className="timeline">
                    <a href="https://apsthanabhawan.com/" className="timeline-content">
                        <span className="timeline-year">2011-12</span>
                        <div className="timeline-icon">
                        <img src="https://img.icons8.com/ios/60/ffffff/graduation-scroll.png" alt="degree-icon"/>
                        </div>
                        <h3 className="title">X (C.B.S.E)</h3>
                        <h5 className="description">
                            Arpan Public School (Thanabhawan)
                        </h5>
                        <h4 className="cgpa">
                            7.6 CGPA
                        </h4>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
        </>
    );
};

export default Education;