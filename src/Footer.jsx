import React from 'react';


var currentDate = new Date();
var year = currentDate.getFullYear();

const Footer =()=>{
    return(
        <>
            <section id="footer">
                <div className="container-fluid col-12 footer-div">
                    <h6>Made with Love</h6>
                        <div className="copr-div">
                         <p>
                         <img className="img-icon" src="https://img.icons8.com/ios-glyphs/30/000000/copyright.png" alt="copr-img"/>
                         <span>{year}</span>
                          . All Rights Reserved | Terms and Conditions
                         </p>
                        </div>
                </div>
            </section>
        </>
    );
};

export default Footer;