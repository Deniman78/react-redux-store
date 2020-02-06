import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="d-flex justify-space-around collapse navbar-collapse">
                <div className="navbar-nav mr-auto">
                    <Link className="nav-link" to="/">
                        Home Page
                    </Link>
                    <Link className="nav-link" to="/sportshoes/">
                        Sport Shoes
                    </Link>
                    <Link className="nav-link" to="/sportballs/">
                        Sport Balls
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/cart">
                        <i className="fa-2x fa fa-shopping-cart"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
