import React from "react";



export default function Intro (props) {
    return (
        <div className="intro" style={{marginTop:"0"}}>
            <img src={props.introInfo.image} class="img-fluid"></img>
            <div style={{textAlign:"center", marginBottom:"30px", marginTop:"30px"}} >
            <h1 style={{fontSize:"48px", fontWeight:"600", color:"black"}}>{props.introInfo.titre}</h1>
            <p class="font-weight-normal" style={{fontSize:"18px"}} >{props.introInfo.texte}</p>
            <hr style={{backgroundColor: "#0d6efd",height: "5px", width:"15%", margin:"auto",}} ></hr>
            </div>

        </div>

)}