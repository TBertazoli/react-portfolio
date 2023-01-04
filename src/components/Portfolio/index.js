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
            name: "Horiseon",
            description: ""
        },
        {
            name: "Lab Notebook",
            description: ""
        },
    ]);
    return (
        <section className='my_work'>
            <div className="title">
                <h2>Portfolio</h2>
            </div>
            <div className="projects">
                {projects.map((image, i) => {
                    (<img src={require(`../../assets/Projects/${i}.png`)}
                        alt={image.name}
                        className="prework box"
                        // onClick={() => openLink(image, i)}
                        key={image.name} />)
                })}

            </div>
        </section>


    )
}

export default Portfolio;
