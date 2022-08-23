import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';
import resume from "../../assets/images/CURTIS_WONG_RESUME_FALL2022.pdf";
import "./css/contact.css"

const Contact = () => {
    const form = useRef;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_l4juqb9", e.target, "8mGVXzo77MLLMclo2")
            .then((res) => {
                console.log(res.text);
            }, (err) => {
                console.log(err.text);
            });

            document.getElementById('contact-forms').reset();
    };

    return (
        // EmailJS?
        <div className='contact'>
            <h1 className='contact-list-header'>CONTACT</h1>
            <div className='contact-container'>
                <div className='contact-list'>
                    <p>Location: San Francisco</p>
                    <p>Email: <a className="contact-list-link" href='mailto:cwong990@berkeley.edu'>cwong990@berkeley.edu</a></p>
                    <p>Phone: 415-990-6637</p>
                    <p><a className="contact-list-link" href="https://www.linkedin.com/in/curtiswong990/" target={"_blank"}>LinkedIn</a></p>
                    <p><a className="contact-list-link" href='https://github.com/cwong6854' target={"_blank"}>GitHub</a></p>
                    <p><a className="contact-list-link" href={resume} target={"_blank"}>Resume</a></p>
                </div>
                <div className="contact-form">
                    <form id="contact-forms" ref={form} onSubmit={sendEmail}>
                        <label className='contact-label'>Full Name</label>
                        <input className='contact-field' type="text" name="fullName"></input>
                        <label className='contact-label'>Email</label>
                        <input className='contact-field' type="email" name="email"></input>
                        <label className='contact-label'>Message</label>
                        <textarea className='contact-field message' name="message"/>
                        <br/>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;