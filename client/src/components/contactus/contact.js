import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import "../contactus/contact.css"

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_iamad6s', 'template_5zh3yev', form.current
      , 'user_424QRbyntfeicOfcjX99p')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <>
      <div className='contactpage'>
      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <div><label>Name</label></div>
        <div><input className='inputcontact' placeholder='Please write your name' type="text" name="user_name" /></div>
        <div><label>Email</label></div>
        <div><input className='inputcontact' type="email" placeholder='Please write your email' name="user_email" /></div>
        <div><label>Message</label></div>
        <div><textarea rows="6" cols="23" className='textcontact' placeholder='Please write your query' name="message" /></div>
        <div><button className='contactsend' type="submit" placeholder='Please write your query' value="Send">Send</button></div>
      </form>
      </div>
      </>
    );
  };
  
  export default ContactUs;
