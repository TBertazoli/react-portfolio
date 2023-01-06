import React from 'react';

function Nav(props) {
    const {
        contactSelected,
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
                        <li className={`${contactSelected && 'navActive'}`}>
                            <span
                                onClick={() => {
                                    setContactSelected(false);
                                }}>Portfolio
                            </span>
                        </li>
                        <li className={`${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>
                                Contact
                            </span>
                        </li>
                        <li className={`${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>
                                Resume
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Nav;