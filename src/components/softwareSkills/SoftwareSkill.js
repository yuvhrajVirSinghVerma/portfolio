import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import * as icon from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
const SoftwareSkill =(props)=> {
  const icons =({name})=>{
    console.log("name ",name)
    const iconComponents = {
      Prisma: <icon.SiPrisma />,
      Socket: <icon.SiSocketdotio />,
      React: <icon.SiReact />,
      Node:<icon.SiNodedotjs/>,
      mongo:<icon.SiMongodb/>,
      postgres:<icon.SiPostgresql/>,
      reactNative:<TbBrandReactNative/>,
      express:<icon.SiExpress/>,
      redux:<icon.SiRedux/>,
      jwt:<icon.SiJsonwebtokens/>,
      chartjs:<icon.SiChartdotjs/>,
      javascript:<icon.SiJavascript />,
      java:<FaJava />,
      nextjs:<icon.SiNextdotjs/>,
      docker:<icon.SiDocker/>
    };
    return iconComponents[name] || null;
  }
  console.log("props ",props)
   {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            <div>
            <h5 style={{display:'flex',marginBottom:30}}>My Skills</h5>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {props.logos.map((logo) => {
              console.log("logo ",logo)
              return (
                // <OverlayTrigger
                //   key={logo.skillName}
                //   placement={"top"}
                //   overlay={
                //     <Tooltip id={`tooltip-top`}>
                //       <strong>{logo.skillName}</strong>
                //     </Tooltip>
                //   }
                // >
                //   <li className="software-skill-inline" name={logo.skillName}>
                //     <span
                //       className="iconify"
                //       data-icon={logo.fontAwesomeClassname}
                //       style={logo.style}
                //       data-inline="false"
                //     ></span>
                //   </li>
                // </OverlayTrigger>
                 <div style={{}}>
                 {icons({name:logo.fontAwesomeClassname})}
                 <p style={{fontSize:14,marginLeft:10}}>{logo.skillName}</p>
                 </div>
              );
            })}
            </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
