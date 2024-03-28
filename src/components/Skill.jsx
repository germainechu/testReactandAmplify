import { useParams } from "react-router-dom";
import React from "react";
import "./Skill.css"

function Skill() {
  let { id } = useParams(); // Assuming your Route path is "/skill/:id"
  
  return (
    <div className="skills-container">
        {id}
    </div>
  );
}

export default Skill;