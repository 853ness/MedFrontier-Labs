import{ Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import './Navbar.css'

 export const Navbar =() => {
    //dropdown state and ref
    const [diagnosticOpen, setDiagnosticOpen] = useState(false);
    const diagnosticRef = useRef(null);
    const [surgeryOpen, setSurgeryOpen] = useState(false);
    const surgeryRef = useRef(null);
    const [monitoringOpen, setMonitoringOpen] = useState(false);
    const monitoringRef = useRef(null);

    //close dropdown when cliccking outside
    useEffect(() => {
        const handleClickOutside = e => {
            if (diagnosticRef.current && !diagnosticRef.current.contains(e.target)){
                setDiagnosticOpen(false);
            }
            if (surgeryRef.current && !surgeryRef.current.contains(e.target)){
                setSurgeryOpen(false);
            }
            if (monitoringRef.current && !monitoringRef.contains(e.target)){
                setMonitoringOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return() => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <nav className="header">
            <Link to="/" className="logo">MedFrontier Labs</Link>
            <ul>
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li
                className="dropdown" ref={diagnosticRef} 
                onMouseEnter ={() => setDiagnosticOpen(true)}
                onMouseLeave={() => setDiagnosticOpen(false)}>
                <span
                    className="dropdown-toggle" onClick= {() => setDiagnosticOpen( o => !o)}
                >
                    Diagnostic <i className="fas fa-cerat-down" />
                </span>
                {diagnosticOpen &&(
                    <ul className="dropdown-menu">
                        <li><Link to="/diagnostic/test1">Tools</Link></li>
                        <li><Link to="/diagnostic/test2">Sensors</Link></li>
                        <li><Link to="/diagnostic/test3">Monitoring</Link></li>
                    </ul>
                )}
                </li>
                <li
                className="dropdown" ref={surgeryRef} 
                onMouseEnter={()=> setSurgeryOpen(true)}
                onMouseLeave={() => setSurgeryOpen(false)}>
                <span
                    className="dropdown-toggle" onClick = {() => setSurgeryOpen( o => !o)}
                >
                    Surgery <i className="fas fa-caret-down" />
                </span>
                {surgeryOpen && (
                    <ul className="dropdown-menu">
                        <li><Link to="/surgery/option1">Monitor</Link></li>
                        <li><Link to="/surgery/option2">Treatment</Link></li>
                        <li><Link to="/surgery/option3">Robotics AI</Link></li>
                    </ul>
                )}
                </li>
                <li
                className="dropdown" ref={monitoringRef}
                onMouseEnter={() => setMonitoringOpen(true)}
                onMouseLeave={() => setMonitoringOpen(false)}>
                <span
                    className="dropdown-toggle" onClick={() => setMonitoringOpen( o => !o)}
                >
                    Monitoring <i className="fas fa-caret-down" />
                </span>
                {monitoringOpen && (
                    <ul className="dropdown-menu">
                        <li><Link to="/monitoring/option1">Heart AI </Link></li>
                        <li><Link to="/monitoring/option2">Smart Sensors</Link></li>
                        <li><Link to="/monitoring/option3">Wearable Devices</Link></li>
                        <li><Link to="/monitoring/option4">AI Companions</Link></li>
                    </ul>
                )}
                </li>
            </ul>
        </nav>
    );
};
