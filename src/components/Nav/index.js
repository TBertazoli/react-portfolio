import React from "react";



function Nav(props) {
    const {
        setContactSelected
    } = props;
    return (
        <header>
            <div className="main_title">
            <h1 >
                <a href="https://tbertazoli.github.io">Tatiana Bertazoli</a>
            </h1>
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#resume">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header >
    );
}

export default Nav;