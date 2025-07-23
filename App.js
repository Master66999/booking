import logo from "./logo.svg";
import "./App.css";
// import "./unit.js"; // Remove unnecessary import
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import BookingForm from './BookingForm';
import Main from './Main'; // Add this import

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Homepage</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container">
                        <div className="header">
                            <h2>My Header</h2>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 3</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit
                                nisl laoreet facilisis aliquet. Potenti dignissim litora eget
                                montes rhoncus sapien neque urna. Cursus libero sapien integer
                                magnis ligula lobortis quam ut.
                            </p>
                        </div>
                        <div className="footer">
                            <h4>Footer</h4>
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
