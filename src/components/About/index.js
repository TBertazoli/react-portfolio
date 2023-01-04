import React from "react";
import coverImage from '../../assets/Cover image/vecteezy_abstract-technology-background_8680961.jpg'
import profilePic from '../../assets/DSC08249_2.jpg'



function About() {
    return (
        <section>
            <div className="hero">
                <div className="subtitle">
                    <h2> React Professional Portfolio</h2>
                </div>
                <img src={coverImage} className="" style={{ width: "100%", height: "25%" }} alt="cover" />
            </div>
            <div className="about_me">
                <div className="title">
                    <h2>About Me</h2>
                </div>

                <div className="description">
                    <p><img className="box" src={profilePic} alt=""></img>
                        Hello, I am Tatiana Bertazoli and I am a Junior Software Developer.
                        I was born and raised in Brazil where I got a degree in Chemistry. I moved to Canada in 2010 and spent 8 years there whith
                        my family. In 2018 we decided to move to Texas where I decided to pursue a new career in web development.
                        In 2022 I started a bootcamp at Rice University and so far I have been working on some small personal projects to improve my knowledge
                        until I am able to start working in this field.

                        My projects were written using HTML, CSS, JavaScript, Node.js, APIs, SQL, NoSQL, Express.js, React.

                    </p>
                </div>
            </div>
        </section>

    )
}

export default About;
