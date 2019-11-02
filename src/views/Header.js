import React from 'react';


const Header = (props) =>{
    return(
        <React.Fragment>
            <header>
                <nav className="navbar">
                    <div className="brand"><a href="index.html">Auto mart</a></div>
                    <ul className="list">
                    <li className="list-element"><a href="#">Home</a></li>
                    <li className="list-element"><a href="#">Inventory</a></li>
                    <li className="list-element"><a href="#">Pricing</a></li>
                    <li className="list-element"><a href="#">Blog</a></li>
                    <li className="list-element"><a href="#">Dealings</a></li>
                    </ul>
                </nav>
                <div className="text-box">
                    <div className="header_info">
                        <span className="header_info-main">Auto mart</span>
                        <span className="header_info-sub">One Stop For Your Auto Needs</span>
                        <div className="header_link">
                        <a href="signup.html" className="btn btn-main">Become a Dealer</a>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;