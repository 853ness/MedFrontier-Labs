import React from "react";
import{Link} from "react-router-dom"
import './Navbar.css'

 export const Navbar =() => {
    return (
        <nav className="header">
            <Link to="/" className="logo">MedFrontier Labs</Link>
            <ul>
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/diagnostic">Diagnostic</Link>
                </li>
                <li>
                <Link to="/surgery">Surgery</Link>
                </li>
                <li>
                <Link to="/monitoring">Monitoring</Link>
                </li>
            </ul>
        </nav>
    );
};
