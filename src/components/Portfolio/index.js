import React, { useState } from 'react';
// import prework from '../../assets/Projects/Prework.png'
// import runBuddy from '../../assets/Projects/Horieson.png'
// import labRats from '../../assets/Projects/lab-rats.png'



function Portfolio() {
    const [projects] = useState([
        {
            name: "Prework Study Guide",
            description: ""
        },
        {
            name: "Run Buddy",
            description: ""
        },
        {
            name: "Horieson",
            description: ""
        },
    ]);



    return (
        <section className='my_work'>
            <div className="title">
                <h2>Portfolio</h2>
            </div>
            <div className="description">
                {projects.map((image, i) => (
                    <img src={require(`../../assets/Projects/${image}${i}.png`)}
                        alt={image.name}
                        className="prework box full_width full_height"
                        key={image.name}
                    />
                ))}
                {/* <div >
                     className="" />
                        <a href="https://tbertazoli.github.io/prework-study-guide/"></a>
                </div> */}
                {/* <div class="run_buddy box">
                    <img class="full_width full_height" src="assets/images/run-buddy.png">
                        <a href="https://tbertazoli.github.io/run-buddy/">Run Buddy</a>
                </div>
                <div class="horiseon box">
                    <img class="full_width full_height" src="assets/images/Horiseon2.png">
                        <a href="https://tbertazoli.github.io/Horiseon/">Horiseon</a>
                </div>
                <div class="bikini box">
                    <img class="full_width full_height" src="./assets/images/Bikinibodybabes.png">
                        <a href="https://tbertazoli.github.io/Project-Fitness/">Bikini Body Babes</a>
                </div>
                <div class="lab box">
                    <img class="full_width full_height" src="./assets/images/lab-rats.png">
                        <a href="https://obscure-lake-69191.herokuapp.com/">Lab Bench Buddy</a>
                </div> */}
            </div>
        </section>


    )
}

export default Portfolio;
