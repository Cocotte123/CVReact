import {useState} from 'react';
import "../style/Legales.css";
import Intro from '../components/Intro.js';
import Footer from "../components/Footer.js";
import { BsFillGeoAltFill, BsPhone, BsEnvelopeFill, BsGlobe } from "react-icons/bs";
import Helmet from '../components/Helmet.js';


const Legales = () => {
    
    const [introductions] = useState ([
        {titre: "MENTIONS LEGALES"}
    ])
    
    return (
        <div class="container-fluid  gx-0" style={{marginBottom:"30px"}}>
        <Helmet
                title="Mentions légales"
                noIndex={true}
            />
        <div className="introduction" class="row mt-3">
            {introductions.map((introduction)=>(
            <Intro introInfo={introduction}/>
            ))}
        </div>

        <div class="accordion mx-auto  accordion-flush">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Editeur du site
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body d-flex flex-column">
                    <h3>John Doe</h3>
                    <address>
                    <p><BsFillGeoAltFill /> 40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <a href="tel:+0620304050"><BsPhone /> 0620304050</a><br />
                    <a href="mailto:john.doe@gmail.com"><BsEnvelopeFill /> john.doe@gmail.com</a>
                    </address>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Hébergeur
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h3>Always Data</h3>
                    <address>
                    <p>91 rue du Faubourg Saint Honoré</p>
                    <p>75008 Paris</p>
                    <a href="http://www.alwaysdata.com"><BsGlobe /> www.alwaysdata.com</a>
                    </address>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Crédits
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>Site développé par John Doe, étudiant du CEF.</p>
                    <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Legales;
