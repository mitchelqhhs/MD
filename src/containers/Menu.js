import React from 'react';
import './Menu.css';



const Menu = ( { onRouteChange }) => {

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <h4 onClick={() => onRouteChange('home')} className="navbar-brand">mijnDOMein</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <h3 className="nav-link" onClick={() => onRouteChange('options')}>Opties</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="nav-link" onClick={() => onRouteChange('groups')}>Groepen</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="nav-link" onClick={() => onRouteChange('login')}>Log Uit</h3>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Menu;