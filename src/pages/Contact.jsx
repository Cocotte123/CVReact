import {useState} from 'react';
import "../style/Contact.css";
import Intro from '../components/Intro.js';
import background2 from "../img/contact-bg.jpg";
import { BsFillGeoAltFill, BsPhone } from "react-icons/bs";
import Footer from "../components/Footer.js";
import Helmet from '../components/Helmet.js';


const Contact = () => {
    
    const [introductions] = useState ([
        {titre: "ME CONTACTER", texte:"Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."}
    ])

    
    return (
        <div class="container-fluid  gx-0">
            <Helmet
                title="Contact"
            />
            <div className="presentation" style={{ backgroundImage: `url(${background2})`,backgroundSize:"cover", }}>
            <div class="image-overlay" id='fondContact'>
            <div class="container rounded" id='contactContainer' >
            <div className="introduction" class="row mt-3">
                {introductions.map((introduction)=>(
                <Intro introInfo={introduction}/>
                ))}
            </div>
            <section id="detailContact" class="container row mt-5">
                <div class ="col-lg-6 mb-4">
                    <div class="form">
                        <h2>Formulaire de contact</h2>
                        <hr style={{backgroundColor: "#0d6efd",height: "5px",paddingLeft:"20px",}} ></hr>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Votre nom" required="true"></input>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Votre adresse mail" required="true"></input>
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control" placeholder="Votre numéro de téléphone" required="true"></input>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Sujet" required="true"></input>
                        </div>
                        <div class="mb-3">
                        <textarea class="form-control" placeholder='Votre message' rows="5" required="true"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mb-3" >Envoyer</button>
                    </div>
                </div>

                <div class ="col-lg-6 mb-4">
                        <div class="map">
                        <h2>Mes coordonnées</h2>
                        <hr style={{backgroundColor: "#0d6efd",height: "5px",paddingLeft:"20px",}} ></hr>
                        <address>
                        <p style={{fontSize:"18px"}}><BsFillGeoAltFill /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                        <a href="tel:+0620304050" style={{textDecoration:"none", color:"black"}}><BsPhone /> 0620304050</a>
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540442!2d4.796403975818926!3d45.778665712402706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1710602690049!5m2!1sfr!2sfr" style={{width:"100%", height:"260px", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                        </div>
                </div>
              
            </section>
            
            
                


               
        
           </div>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default Contact;
