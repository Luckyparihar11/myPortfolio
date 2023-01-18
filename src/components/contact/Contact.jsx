import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zpuvfj6', 'template_uragn1r', form.current, 'p7DLKv-_qh9tHR_KZ');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h4 className="headin">Get in Touch</h4>
      <h2 className="subheadin">Contact me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">

            <a href="mailto:pariharlucky41@gmail.com" target="_blank" rel="noreferrer"><MdOutlineEmail className="contact-icons" /></a>

            <h4>Email</h4>
            <h5 className="soo">pariharlucky41@gmail</h5>
            {/* <a href="mailto:kartikg052@gmail.com." target="_blank" className="hk-edit">Send me Email</a> */}
          </article>

          <article className="contact-option">
            <a href="https://www.linkedin.com/in/lucky-parihar-b90425208/" target="_blank" rel="noreferrer"><BsLinkedin className="contact-icons" /></a>

            <h4>Message</h4>
            <h5 className="soo">Linkedin</h5>
            {/* <a href="https://www.linkedin.com/in/kartikay-gupta-1498a7200/" target="_blank" className="hk-edit">Send a message</a> */}
          </article>

          <article className="contact-option">
            <a href="https://wa.link/kv4ozj" target="_blank" rel="noreferrer"><BsWhatsapp className="contact-icons" /></a>

            <h4>Message</h4>
            <h5 className="soo">Whatsapp</h5>
            {/* <a href="https://wa.me/917489657221"target="_blank" className="hk-edit">Send a message</a> */}
          </article>
        </div>
        {/* ENd of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input  type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea  name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary ">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
