import {useState} from 'react';

import Intro from '../components/Intro.js';
import "../style/Services.css";
import Footer from "../components/Footer.js";
import Helmet from '../components/Helmet.js';
import { BsSearch, BsDisplay, BsFileCodeFill } from "react-icons/bs";

const Services = () => {


        const [services] = useState([
            {id: 1, titre:'UX DESIGN',icon:<BsDisplay /> ,image:require('../img/icons8-pc-30.png'), description:"L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."},
            {id: 2, titre:'DEVELOPPEMENT WEB',icon:<BsFileCodeFill /> , image:require('../img/icons8-code-file-48.png'), description:"Le développement de sites web repose sur l'utilisation des langages HTML, CSS, Javascript, et PHP"},
            {id: 3, titre:'REFERENCEMENT',icon:<BsSearch /> , image:require('../img/icons8-search-16.png'), description:"Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa poistion dans les résultats des moteurs de recherche."},
        ]);
            const [introductions] = useState ([
        {titre: "MON OFFRE DE SERVICES", texte:"Voici les prestations sur lesquelles je peux intervenir", image:require ('../img/banner.jpg')}
    ])

    

   

    return (
        <div id="servicesPage" style={{marginBottom:"30px"}}>
        <Helmet
                title="Services"
            />
        <div className="introductionServices" class="mt-3">
            {introductions.map((introduction)=>(
            <Intro introInfo={introduction}/>
            ))}
        </div>
        <div  id="serviceCard" >
                <div class="row">
                    <div class="col cards">
                        {services.map((service)=>(
                
                    <div class ="card text-center card border-light mb-3 mt-3  vertical-center" >
                        <span id="iconServices">{service.icon}</span>                    
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{service.titre}</h5>
                            <p class="card-text">{service.description}</p>
                        </div>
                    
                    </div>
                    ))}</div>
                </div>
                
            
        </div>
        <Footer />
        </div>

    )
}

export default Services;

/*{services.map((service)=>(
                <p>{service.service}</p>
                ))}*/