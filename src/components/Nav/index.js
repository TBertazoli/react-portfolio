import React from "react";



function Nav(props) {
    const {
        setContactSelected
    } = props;
    return (
        <header>
            <h2>
              React Professional Portofolio
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </header >
    );
}

export default Nav;