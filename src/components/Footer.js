import React from "react";
import { Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../style/Footer.css";
import { FcNext } from "react-icons/fc";
import Blog from '../pages/Blog';
import { AiFillLinkedin,AiOutlineGithub,AiFillTwitterSquare } from "react-icons/ai";
import {useState, useEffect} from 'react';

export default function Footer () {
    const [items, setItems] = useState([]);
    useEffect(()=>{
    const fetchUrl = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const data = await res.json();
        setItems(data);
    };

    fetchUrl();
        
    },[]);

    
    window.addEventListener('scroll', function() {
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active",window.scrollY > 200)
    });

    const top = () => {
        window.scrollTo(0,0);
    }



    return (
        <div  className="footer" id="footer" class="bg-light">
        <footer class="container-fluid row">
            <div class ="col-lg-3 col-md-4 col-sm-6">
                <h2 class="text-left fw-bolder">John Doe</h2>
               <address class="lh-base" >
                <p class="text-left">40 Rue Laure Diebold</p>
                <p class="text-left">69009 Lyon, France</p>
                <p class="text-left">Téléphone: 06 20 30 40 50</p>
                </address>
                <div id="reseauxSociaux">
                <a href={items.html_url} target="_blank"><AiOutlineGithub /></a>
                <a href="#" target="_blank"><AiFillLinkedin /></a>
                <a href="#"><AiFillTwitterSquare /></a>
                </div>
            </div>
            <div className="pages" class ="col-lg-3 col-md-4 col-sm-6">
            <h2 class="text-left fw-bolder">Liens utiles</h2>
            <ul class="lh-base">
                <li class="nav-item text-left">
                    <Link class="nav-link" to="/"><FcNext />Accueil</Link>
                </li>
                <li class="nav-item text-left">
                    <Link class="nav-link" to="/#Apropos"><FcNext />A propos</Link>
                </li>
                <li class="nav-item text-left">
                    <Link class="nav-link" to="/services"><FcNext />Services</Link>
                </li>
                <li class="nav-item text-left">
                    <Link class="nav-link " to="/contact"><FcNext />Me contacter</Link>
                </li>
                <li class="nav-item text-left">
                    <Link class="nav-link" to="/legales"><FcNext />Mentions légales</Link>
                </li>
            </ul>
            </div>
            <div className="realisations" class ="col-lg-3 col-md-4 col-sm-6">
            <h2 class="text-left fw-bolder">Mes dernières réalisations</h2>
            <ul >
                <li class="nav-item text-left">
                <Link class="nav-link" to={'/blog/' + 6}>Réalisations</Link>
                </li>
            </ul>
            </div>
            <div className="blog" class ="col-lg-3 col-md-4 col-sm-6">
            <h2 class="text-left fw-bolder">Mes derniers articles</h2>
            <ul >
                <li class="nav-item text-left">
                    <Link class="nav-link" to="/blog">Blog</Link>
                </li>

            </ul>
            </div>
            <div onClick={top} class="scrollTop">^</div>
            <div className="copyright" class="bg-dark">
                <p class="font-weight-bold text-white text-center">©Designed by John Doe.</p>
            </div>
        </footer>
        
    
        </div>
    )
}

