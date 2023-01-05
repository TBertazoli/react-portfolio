import React, { useState } from 'react';
import Modal from '../Modal';


function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: "Prework Study Guide",
            description: "",
            website: "https://tbertazoli.github.io/Horiseon/",
            repository: "https://github.com/TBertazoli/Horiseon"
        },
        {
            name: "Run Buddy",
            description: "",
            website: "",
            repository: ""
        },
        {
            name: "Horiseon",
            description: "",
            website: "https://tbertazoli.github.io/Horiseon/",
            repository: ""
        },
        {
            name: "Lab Notebook",
            description: "",
            website: "",
            repository: ""
        },
    ]);

    const openLink = (image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className='my_work'>
            <div className="title">
                <h2>Portfolio</h2>
            </div>
            <div>
                {isModalOpen && (
                    <Modal onClose={openLink} currentProject={currentProject} />
                )}
                <div className="projects">
                    {projects.map((image, i) =>
                    (<img src={require(`../../assets/projects/${i}.png`)}
                        alt={image.name}
                        className="prework box"
                        onClick={() => openLink(image, i)}
                        key={image.name} />)
                    )}
                </div>
            </div>
        </section>


    )
}

export default Portfolio;
