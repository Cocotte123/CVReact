import {useState} from 'react';
import Footer from "../components/Footer.js";
import "../style/Realisations.css";
import Intro from '../components/Intro.js';
import Helmet from '../components/Helmet.js';


const Realisations = () => {
    const [realisations] = useState([
        {id: 1, image: require('../img/portfolio/fresh-food.jpg'), titre: 'Fresh Food', description: "Réalisation d'un site avec commande en ligne.", info: 'Site réalisé avec PHP et MySQL'},
        {id: 2, image: require('../img/portfolio/restaurant-japonais.jpg'), titre: 'Restaurant Akira', description: "Réalisation d'un site vitrine.", info: 'Site réalisé avec WordPress'},
        {id: 3, image: require('../img/portfolio/espace-bien-etre.jpg'), titre: 'Espace bien-être', description: "Réalisation d'un site vitrine pour un praticien de bien-être", info: 'Site réalisé en HTML/CSS'},
        
    ]);

    const [introductions] = useState ([
        {titre: "PORTFOLIO", texte:"Voici quelques-unes de mes réalisations", image: require('../img/banner.jpg')}
    ])

    return (
        <div id="realisationsPage" class="container-fluid  gx-0">
            <Helmet
                title="Réalisations"
            />
            <div className="introductionRealisations" class="mt-3">
                {introductions.map((introduction)=>(
                <Intro introInfo={introduction}/>
                ))}
            </div>
            <div  id="realisationCard" >
                <div  class="row">
                    
                        <div class="col cards">
                            {realisations.map((realisation)=>(
                            <div class ="card text-left border-light mb-3 mt-3" key={realisation.id}>
                                <img src={realisation.image} alt={realisation.titre} class="card-img-top"></img>
                                <div class="card-body d-flex flex-column">
                                <h5 class="card-title">{realisation.titre}</h5>
                                <p class="card-text">{realisation.description}</p>
                                
                                <a href="#"  class="btn btn-outline-primary mx-auto mt-auto">Voir</a>
                                </div>
                                <div class="card-footer text-muted">{realisation.info}</div>
                
                            </div>
                        ))}</div>
                    
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Realisations;
