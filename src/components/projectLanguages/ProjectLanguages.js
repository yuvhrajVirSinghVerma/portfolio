import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const  ProjectLanguages=({logos})=> {
{
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    >{logo.name}</span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
