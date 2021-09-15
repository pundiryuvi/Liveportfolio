import React from 'react';


const Skill = () =>{
    return(
        <>
            <section id="skill">
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto d-flex justify-content-center">
                        <h1 className="main-heading">My Skills</h1>
                    </div>
                </div>
            </div>
            <div className="container mb-2 mt-3">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">90%</div>
            </div>
            <div className="value-div">HTML/CSS</div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress yellow">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">75%</div>
            </div>
            <div className="value-div">Adobe XD</div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress pink">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">60%</div>
            </div>
            <div className="value-div">Javascript</div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress green">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">
                    80%
                </div>
            </div>
            <div className="value-div">React</div>
        </div>
    </div>
</div>
</section>
        </>
    );
};

export default Skill;