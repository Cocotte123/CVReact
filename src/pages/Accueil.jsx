import "../style/Accueil.css";
import Footer from "../components/Footer.js";
import {HashLink as Link} from "react-router-hash-link";


import about from "../img/john-doe-about.jpg"
import {useState} from "react";
import Progressbar from "../components/Progressbar.js";
import Helmet from "../components/Helmet.js";

const Accueil = () => {
    const [skills] = useState ([
        {id: 1, skill: "HTML5", level: 90, color: "red"},
        {id: 2, skill: "CSS3", level: 80, color: "turquoise"},
        {id: 3, skill: "JAVASCRIPT", level: 70, color: "yellow"},
        {id: 4, skill: "PHP", level: 60, color: "green"},
        {id: 5, skill: "REACT", level: 50, color: "blue"},
       
    ]);
    


    return (
     
        <div className="Accueil" style={{marginBottom:"30px"}}>
            <Helmet
                title="Accueil"
            />
            <section className="presentation" >
            <div class="image-overlay" id="fondAccueil">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
           
            <Link to="#AproposCadre" class="btn btn-primary" type="button" >En savoir plus</Link>
            </div>

            </section>
           

           <section id="AproposCadre" class="container col-lg-6">
           <div className="gauche">
           <h2>A propos</h2>
           
           <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
           <p>Basé à Lyon, je suis en recherchhe d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
           <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web. </p>
           
           </div>

           <div className="droit">
           <img src={about}  alt="photo de John Doe"></img>
          
           <h3>Mes compétences:</h3>
            <div className="skill">
                {skills.map((skill)=>(
                <Progressbar skillInfo={skill} />
                ))}
            </div>
            </div>
            
            </section> 
          
            
            <Footer />
        </div>
       

    )
}

export default Accueil;

/*<div class="progress-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.skill} - {skill.level}% </div>*/

