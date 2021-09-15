import React from 'react';
import {useForm} from 'react-hook-form';


const Contact = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();


    const onSubmit = (values) => {
        console.log(values);
        alert(`Hi ${values.name}! your pnone number is ${values.phone} and email is ${values.email}. Your message is submitted successfully.`);

    };

    

    return(

        
        <>
            <section id="contact">
                 <div className="container-fluid col-10 d-flex justify-content-center mt-5">
                     <div className="row justify-content-center">
                                <div className="detail-div col-sm-3 col-md-5">
                                    <h3 className="det-heading">EMAIL ADDRESS</h3>
                                    <div className="detail-icon">
                                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/apple-mail.png" alt="mail_icon"/>
                                    </div>
                                    <div className="det-div">Yuvrajrpundir@gmail.com</div>
                                </div>
                                <div className="detail-div col-sm-3 col-md-5">
                                <h3 className="det-heading">HOME ADDRESS</h3>
                                    <div className="detail-icon">
                                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/order-delivered.png" alt="home_icon"/>
                                    </div>
                                    <div className="det-div">VILL+POST - NOJAL, DISTT - SHAMLI, UTTAR PRADESH, 247777</div>
                                </div>
                                <div className="detail-div col-sm-3 col-md-5">
                                <h3 className="det-heading">PHONE NUMBER</h3>
                                    <div className="detail-icon">
                                    <img src="https://img.icons8.com/ios-filled/50/4a90e2/apple-phone.png" alt="mobile_icon"/>
                                    </div>
                                    <div className="det-div">+91-9627630798</div>
                                </div>
                            </div>
                        </div>
                 <div className="contact-div container-fluid col-8 justify-content-center mt-5">
                     <div className="main-heading">GET IN TOUCH</div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="row justify-content-center">
                         <div className="input-field col-md-6 col-sm-3 order-sm-1 order-lg-1">
                             <input type="text" 
                             name = "name"
                             placeholder="Full Name" 
                              {...register('name', { required: "Rquired!",
                               minLength: {value: 5, message: "Invalid!"} })}
                             />
                         </div>
                         <div className="error-div er-div col-md-6 col-sm-3">
                             {errors.name && <span>{errors.name.message}</span>}
                         </div>
                         <div className="input-field col-md-6 col-sm-3 order-sm-2 order-lg-2">
                             <input type="text" 
                             name = "subject"
                             placeholder="Subject" 
                             {...register('subject', { required: "Required!",
                              minLength: {value: 10, message: "Less words!"} })}
                             />
                         </div>
                         <div className="error-div col-md-6 col-sm-3">
                              {errors.subject && <span>{errors.subject.message}</span>}
                         </div>
                     </div>
                     <div className="row justify-content-center">
                         <div className="input-field col-md-6 col-sm-3 order-sm-1 order-lg-1">
                             <input type="text" 
                             name = "email"
                             placeholder="Email Address" 
                             {...register('email', { required: "Email Required", 
                             pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid Email!"} })}
                             />
                         </div>
                         <div className="error-div er-div col-md-6 col-sm-3">
                              {errors.email && <span>{errors.email.message}</span>}
                         </div>
                         <div className="input-field col-md-6 col-sm-3 order-sm-2 order-lg-2">
                             <input type="text"
                             name = "phone" 
                             placeholder="Contact Number" 
                             {...register('phone', { required: "Required!", pattern: {value: /^\+(?:[0-9] ?){6,14}[0-9]$/, message: "Not Valid!"} })}  
                             />
                         </div>
                         <div className="error-div col-md-6 col-sm-3">
                              {errors.phone && <span>{errors.phone.message}</span>}
                         </div>
                     </div>
                     <div className="message-field col-10 container-fluid">
                        <textarea
                        name = "messages"
                         rows="3" cols="30" 
                         placeholder="Write your message here"
                         {...register('messages', { required: "Required!",
                          minLength: {value: 20, message: "Require more words"},
                          maxLength: {value: 150, message: "Exceed limit"} })}
                         >
                         </textarea>
                     </div>
                     <div className="error-div er-div col-md-6 col-sm-3">
                          {errors.messages && <span>{errors.messages.message}</span>}
                     </div>
                      <div className="sub-btn container-fluid col-10">
                         <button type="submit" className="submit-button">Send Message</button>
                      </div>
                      </form>
                 </div>
            </section>
        </>
    );

};

export default Contact;