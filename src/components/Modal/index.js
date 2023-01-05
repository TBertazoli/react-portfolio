import React from 'react';


const Modal = ({ onClose, currentProject }) => {
    const { name, description, website, repository, index } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img
                    src={require(`../../assets/projects/${index}.png`)}
                    alt="current project"
                />
                <p>{description}</p>
                <p>{website}</p>
                <p>{repository}</p>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
