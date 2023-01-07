import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,        
        setAboutMeSelected
    } = props;

    return (
        <header>
            <div className="main_title">
                <h1 >
                    <a href="https://tbertazoli.github.io/react-portfolio">Tatiana Bertazoli</a>
                </h1>
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <a data-testid="about" href="#about" onClick={() => {
                                setAboutMeSelected(true)
                                setPortfolioSelected(false)
                                setContactSelected(false)
                            }}>
                                About me
                            </a>
                        </li>
                        <li className={`${portfolioSelected && 'navActive'}`}>

                            <span data-testid="portfolio" onClick={() => {
                                setAboutMeSelected(false)
                                setContactSelected(false);
                                setPortfolioSelected(true);
                            }}>Portfolio</span>
                        </li>
                        <li className={`${contactSelected && 'navActive'}`}>
                            <a href="#contact" onClick={() => {
                                setAboutMeSelected(false)
                                setPortfolioSelected(false)
                                setContactSelected(true)
                            }}>
                                Contact
                            </a>
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