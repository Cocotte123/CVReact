import React from "react";
import "../style/Card.css";


export default function Card (props) {

    
return (
    <div class ="card col-lg-4 col-md-4 col-sm-6 text-center card border-light mb-3 mt-3" style={{
        width:"25rem",}}>
        <img src={props.cardInfo.image} class="card-img-top"></img>
        <div class="card-body d-flex flex-column">
        <h5 class="card-title">{props.cardInfo.titre}</h5>
        <p class="card-text">{props.cardInfo.description}</p>
        
        <a href="#"  class="btn btn-primary mx-auto mt-auto">{props.cardInfo.bouton}</a>
        </div>
        <div class="card-footer text-muted">{props.cardInfo.info}</div>
  
    </div>

    )
}