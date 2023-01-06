import React, { useState } from 'react';
import coverImage from '../../assets/cover image/vecteezy_abstract-technology-background_8680961.jpg'
import Modal from '../Modal';


function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: "Prework Study Guide",
            description: "teste",
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

        <section>
            <div className="cover">
                <h2 className="subtitle">React Professional Portfolio</h2>
                <img src={coverImage} className="cover_image" alt="cover" />
            </div>
            <div className="portfolio" id="portfolio">
                <div className="title">
                    <h2>Portfolio</h2>
                </div>
                <div>
                    {isModalOpen && (
                        <Modal onClose={openLink} currentProject={currentProject} />
                    )}
                    <div>
                        <div >
                            {projects.map((image, i) =>
                            (<div className="project_wrap"><img src={require(`../../assets/projects/${i}.png`)}
                                alt={image.name}
                                className="prework"
                                onClick={() => openLink(image, i)}
                                key={image.name} />
                                <h3 className='project_name'>{image.name}</h3></div>                                
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Portfolio;
