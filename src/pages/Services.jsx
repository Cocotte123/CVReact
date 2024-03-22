import {useState} from 'react';
import Intro from '../components/Intro.js';
import "../style/Services.css";
import Footer from "../components/Footer.js";

const Services = () => {


        const [services] = useState([
            {id: 1, titre:'UX DESIGN', image:require('../img/icons8-pc-30.png'), description:"L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."},
            {id: 2, titre:'DEVELOPPEMENT WEB', image:require('../img/icons8-code-file-48.png'), description:"Le développement de sites web repose sur l'utilisation des langages HTML, CSS, Javascript, et PHP"},
            {id: 3, titre:'REFERENCEMENT', image:require('../img/icons8-search-16.png'), description:"Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa poistion dans les résultats des moteurs de recherche."},
        ]);
            const [introductions] = useState ([
        {titre: "MON OFFRE DE SERVICES", texte:"Voici les prestations sur lesquelles je peux intervenir", image:require ('../img/banner.jpg')}
    ])

    return (
        <div class="container-fluid row gx-0" style={{marginBottom:"30px"}}>
        <div className="introduction" class="mt-3">
            {introductions.map((introduction)=>(
            <Intro introInfo={introduction}/>
            ))}
        </div>
        <div className="service" class="row mt-4 gx-0">
                {services.map((service)=>(
         
            <div class ="card col-lg-4 col-md-4 col-sm-6 text-center card border-light mb-3 mt-3  vertical-center" style={{
            width:"25rem",}}>
            <img src={service.image} class="card-img-top" style={{width:"40px", height:"40px", margin:"auto", paddingTop:"5px"}}></img>
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">{service.titre}</h5>
            <p class="card-text">{service.description}</p>
            
            
            </div>
            
        </div>
         ))}
         </div>
        <Footer />
        </div>

    )
}

export default Services;

/*{services.map((service)=>(
                <p>{service.service}</p>
                ))}*/