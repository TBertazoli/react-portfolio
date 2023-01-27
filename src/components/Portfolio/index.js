import React, { useState } from 'react';
import Modal from '../Modal';
import Footer from '../Footer'

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: "Prework Study Guide",
            description: "This project was an introduction of HTML and CSS",
            website: "https://tbertazoli.github.io/prework-study-guide/",
            repository: "https://github.com/TBertazoli/prework-study-guide"
        },
        {
            name: "Run Buddy",
            description: "This project was to develop a complete website using only HTML and CSS",
            website: "https://tbertazoli.github.io/run-buddy/",
            repository: "https://github.com/TBertazoli/run-buddy"
        },
        {
            name: "Horiseon",
            description: "",
            website: "https://tbertazoli.github.io/Horiseon/",
            repository: "https://github.com/TBertazoli/Horiseon"
        },
        {
            name: "Pizza Hunt",
            description: "This project wa to develop a website where you can create new pizzas and add comments",
            website: "https://pizza-bertazoli.herokuapp.com/",
            repository: "https://github.com/TBertazoli/pizza-hunt"
        },
        {
            name: "Project Fitness",
            description: "On this project I was responsible for writting the front-end JavaScript functionality. Created local storage and functions to store the weight, height and date. Created a function to calculate BMI and added a calendar to track the workout progress page.",
            website: "https://tbertazoli.github.io/Project-Fitness/",
            repository: "https://github.com/TBertazoli/Project-Fitness"
        },        
        {
            name: "Lab Notebook",
            description: "This project was to develop a virtual lab notebook where users can create projects and experiments",
            website: "https://obscure-lake-69191.herokuapp.com/",
            repository: "https://github.com/emsaw721/lab-rats"
        },
        {
            name: "Oinc",
            description: "This project was to develop a budget app where users can add income and expenses and add budget",
            website: "https://guarded-gorge-65763.herokuapp.com/",
            repository: "https://github.com/emsaw721/stacks-on-stacks"
        },
        
    ]);

    const openLink = (image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section>         
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
                            (<div key={image.name} className="project_wrap"><img src={require(`../../assets/Projects/${i}.png`)}
                                alt={image.name}
                                className="prework"
                                onClick={() => openLink(image, i)}
                               />
                                <h3 className='project_name'>{image.name}</h3></div>                                
                            )
                            )}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>            
        </section>


    )
}

export default Portfolio;
