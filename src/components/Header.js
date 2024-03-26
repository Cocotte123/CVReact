import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import "../style/Header.css";
import Accueil from '../pages/Accueil';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Legales from '../pages/Legales';
import Realisations from '../pages/Realisations';
import Services from '../pages/Services';


export default function Header () {

const navLinkStyles = ({isActive}) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'blue' : '#EEE',
        textDecoration : isActive ? 'underline' : 'none',
    }
}

return (
    <div className="header" id="header">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark text-uppercase fw-bolder" >
        <div class="container-fluid">
            <div class="navbar-brand">JOHN DOE</div>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item nav-link">
                    <NavLink style={navLinkStyles} class="nav-link" to="/">Accueil</NavLink>
                </li>
                <li class="nav-item  nav-link">
                    <NavLink style={navLinkStyles} class="nav-link" to="/services">Services</NavLink>
                </li>
                <li class="nav-item  nav-link">
                    <NavLink style={navLinkStyles} class="nav-link" to="/realisations">Réalisations</NavLink>
                </li>
                <li class="nav-item  nav-link">
                    <NavLink style={navLinkStyles} class="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li class="nav-item  nav-link">
                    <NavLink style={navLinkStyles} class="nav-link" to="/contact">Me contacter</NavLink>
                </li>
                
                </ul>
            </div>

        </div>


    </nav>

    <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/#Apropos" element={<Accueil/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/legales" element={<Legales/>}></Route>
        <Route path="/realisations" element={<Realisations/>}></Route>
        <Route path="/services" element={<Services/>}></Route>

    </Routes>
    </div>
);
}