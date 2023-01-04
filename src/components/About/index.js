import React from "react";
import coverImage from '../../assets/Cover image/vecteezy_abstract-technology-background_8680961.jpg'


function About() {
    return (
        <section>
            <div>
                <img src={coverImage} className="my-2" style={{ width: "100%", height:"25%" }} alt="cover" />


            </div>
            <div className="my-5">
                <h2 id="about">About Me</h2>
            </div>
            <div>
                <p>Hello, I am Tatiana Bertazoli and I am a Junior Software Developer.
                    I was born and raised in Brazil where I got a degree in Chemistry. I moved to Canada in 2010 and spent 8 years there whith
                    my family. In 2018 we decided to move to Texas where I decided to pursue a career in web development.
                    In 2022 I started a bootcamp at Rice University and so far I have been working on some small personal projects to improve my knowledge
                    until I am able to start working in this field.

                    My experience includes HTML, CSS, JavaScript, Node.js, APIs, SQL, NoSQL, Express.js, React.

                </p>
            </div>
        </section>

    )
}

export default About;
