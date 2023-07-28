import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { workData } from "../Component/workData";

// import Fade from "react-reveal/Fade";
import "./home.css";
const Work = () => {
  return (
    <div className="py-[40px] px-[8.5vw]">
      <h3 className="text-4xl font-bold text-[#020617]  mb-2">
        My <span className="text-[#00488C]">portfolio</span>
      </h3>
      <div className="work-project grid  gap-4">
        {workData.map((project, i) => (
          <div className=" shadow hover:shadow-md p-4 items-center justify-around w-full ">
            <div className="project-img">
              <img src={project.img} className="img-width" alt="my here" />
            </div>
            <div className="m-res my-4 flex items-center justify-center flex-col">
              <h1 className="text-3xl">{project.title}</h1>
              <h2 className="text-lg text-center">{project.description}</h2>

              <div className="icon-holder">
                {project.stack?.map((icon) => (
                  <>
                    <div
                      data-tip={icon.tooltip}
                      style={{ fontSize: "30px", margin: "5px", color: "#130b43" }}
                    >
                      {icon.icon}
                    </div>
                    <ReactTooltip />
                  </>
                ))}
              </div>

              <div className="flex items-center">
                <h4 className=" url-item">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </h4>
                <span className="text-lg font-bold">|</span>
                <h4 className=" url-item">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;
