import React from "react";
import "../style/Progressbar.css"

export default function Progressbar (props) {
return (
    <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" key={props.skillInfo.id}>
       <h4 class="text-secondary" style={{ color: "#000000",
            fontWeight:"bold",
            textAlign: "left",}}>{props.skillInfo.skill} - {props.skillInfo.level}%</h4>
        <div style={{
            width: `${props.skillInfo.level}%`,
            backgroundColor:`${props.skillInfo.color}`,
           borderRadius:"2px",
            height: "15px",
            
            }}></div>
        </div>

)
}


