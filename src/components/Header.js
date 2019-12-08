import React from 'react';
import NavbarComponent from "../components/navbar";


const Header = (props) =>{
    return(
        <React.Fragment>
            <header>
                <NavbarComponent/>
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