import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


function Contact() {

  return (
    <section>
      < div>
        <h2>Contact Me</h2>
        <a href="mailto:tatianabertazoli@gmail.com"><AiOutlineMail /></a>
        <a href="https://github.com/TBertazoli"><AiOutlineGithub /></a>
        <a href="tel:713-858-6951"><AiOutlinePhone /></a>
      </div >
    </section>
  )
}



export default Contact;
