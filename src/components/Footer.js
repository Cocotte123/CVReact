import React from "react";
import { Link} from "react-router-dom";
import "../style/Footer.css";
import { FcNext } from "react-icons/fc";
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
        <div id="footerCadre" class="bg-light">
        <footer  class="container-fluid">
            <div class="footer-col">
                <h2 class="text-left fw-bolder">John Doe</h2>
               <address>
                <p class="text-left">40 Rue Laure Diebold</p>
                <p class="text-left">69009 Lyon, France</p>
                <p class="text-left">Téléphone: 06 20 30 40 50</p>
                </address>
                <div id="reseauxSociaux">
                <a href={items.html_url} target="_blank"><AiOutlineGithub /></a>
                <a href="#" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                <a href="#"><AiFillTwitterSquare /></a>
                </div>
            </div>
            <div className="pagesFooter" class="footer-col">
            <h2 class="text-left fw-bolder">Liens utiles</h2>
            <Link class="nav-link" to="/"><FcNext />Accueil</Link>
            <Link class="nav-link" to="/#AproposCadre"><FcNext />A propos</Link>
            <Link class="nav-link" to="/services"><FcNext />Services</Link>
            <Link class="nav-link " to="/contact"><FcNext />Me contacter</Link>
            <Link class="nav-link" to="/legales"><FcNext />Mentions légales</Link>
            
            </div>
            <div className="realisationsFooter" class="footer-col">
            <h2 class="text-left fw-bolder">Mes dernières réalisations</h2>
            <Link class="nav-link" to={'/blog/' + 6}><FcNext />Réalisations</Link>
            </div>
            <div className="blogFooter" class="footer-col">
            <h2 class="text-left fw-bolder">Mes derniers articles</h2>
            <Link class="nav-link"><FcNext style={{fontWeight:"bold"}} />Blog</Link>
            </div>
            <div onClick={top} className="scrollTop">^</div>
            <div id="copyright" class="bg-dark">
                <p class="font-weight-bold text-white">©Designed by John Doe.</p>
            </div>
        </footer>
        
        
    
        </div>
    )
}

