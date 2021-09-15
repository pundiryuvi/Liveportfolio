import React from 'react';


const Certificate = () =>{
    return(
        <>
          <section id="certificate" className="align-items-center">
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-10 mx-auto d-flex justify-content-center">
                        <h1 className="main-heading">My Certificates</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center col-10 mb-5">
            <div className="row">
            <div className="certification-div col-md-3 col-sm-6">
            <div className="icons-div">
              <img className="big-icon" src="https://img.icons8.com/color/48/000000/development-skill.png" alt="python"/>
            </div>
            <h2 className="s-heading">THE COMPLETE 2021 WEB DEVELOPMENT BOOTCAMP</h2>
            <a href="file:///C:/Users/admin/Downloads/PythonFlaskDjango.pdf">
            <button type="button" className="LearnMore-btn">View Certificate</button>
            </a>
          </div>
          <div className="certification-div col-md-3 col-sm-6">
            <div className="icons-div">
              <img className="big-icon" src="https://img.icons8.com/fluency/48/000000/web-design.png" alt="web dev"/>
            </div>
            <h2 className="s-heading">USER EXPERIENCE DESIGN ESSENTIALS-ADOBE XD UI/UX DESIGN</h2>
            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-27cc5c4c-e450-482d-b173-3858f1128ef9.jpg">
            <button type="button" className="LearnMore-btn">View Certificate</button>
            </a>
          </div>
          <div className="certification-div col-md-3 col-sm-6">
            <div className="icons-div">
              <img className="big-icon" src="https://img.icons8.com/nolan/64/certificate.png" alt="ui/ux"/>
            </div>
            <h2 className="s-heading">PYTHON, FLASK AND DJANGO COURSE FOR BEGINNERS</h2>
            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-07759fde-c0c6-4870-9a7b-8d353ea7900b.jpg">
            <button type="button" className="LearnMore-btn">View Certificate</button>
            </a>
          </div>
            </div>
        </div>
        </section>   
        </>
    );
};

export default Certificate;