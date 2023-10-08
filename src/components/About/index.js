import React from "react";
import profilePic from "../../assets/DSC08249_2.jpg";
import Footer from "../Footer";

function About() {
  return (
    <section>
      <div id="about" className="about_me">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="description">
          <img src={profilePic} alt=""></img>
          <p className="lh-lg">
            Greetings! I'm Tatiana Bertazoli, a Junior Software Developer with a
            unique journey. Originally from Brazil, I initially pursued a degree
            in Chemistry. However, in 2010, my family and I relocated to Canada,
            where we spent 8 wonderful years. In 2018, we made another
            life-changing move, this time to Texas, and that's when I decided to
            embark on a new career path in web development. I took the plunge in
            2022 by enrolling in a bootcamp at Rice University. Since then, I've
            been diligently working on various small personal projects to
            enhance my skills and prepare for a career in this exciting field.
            My projects have been crafted using a variety of technologies,
            including HTML, CSS, JavaScript, Node.js, APIs, SQL, NoSQL,
            Express.js, and React. I'm eager to continue learning and grow as a
            web developer.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default About;
