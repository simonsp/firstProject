import React from 'react'
import logo from '../logosaltala.png';
import '../components/styles/Logo.css';
import Nav from '../components/Nav'

const Welcome = () => (
    <div>
        <div>
            <Nav />
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <header className="App-header">
                <img src={logo} className="App-logo rounded-circle mb-2" alt="logo" />
                <p>
                    <code>Primer Proyecto con ReactJS en Sáltala!</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Aprende React
        </a>
            </header>
        </div>
    </div>
)

export default Welcome