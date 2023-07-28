import React from "react";
import { Card } from "../Component/Card";
import { MobileCard } from "../Component/Card";

import "./home.css";
import Skill from "../Component/skillData";
// import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className=" py-[40px] px-[8.5vw]" id="skill">
      <h2 className="text-4xl font-bold text-[#020617]  mb-6">
        My <span className="text-[#00488C]">skills</span>
      </h2>
      <div className="cardContainer">
        {/* <Fade bottom> */}
        {Skill?.map((data, i) => (
          <>
            <div key={i} className="web-lg">
              <Card data={data} />
            </div>
            <div className="mob-sm">
              <MobileCard data={data} />
            </div>
          </>
        ))}
        {/* </Fade> */}
      </div>
    </div>
  );
};
export default Skills;
