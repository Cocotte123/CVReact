import React from "react";
import "../style/intro.css"



export default function Intro (props) {
    return (
        <div id="intro" style={{marginTop:"0"}}>
            <img src={props.introInfo.image} class="img-fluid"></img>
            <div style={{textAlign:"center", marginBottom:"30px", marginTop:"30px"}} >
            <h1 style={{fontWeight:"600", color:"black"}}>{props.introInfo.titre}</h1>
            <p class="font-weight-normal" style={{textAlign:"center"}} >{props.introInfo.texte}</p>
            
            </div>

        </div>

)}