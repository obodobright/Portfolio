import React from "react";
import "./style.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Card = ({ data }) => {
  return (
    <div className="card shadow">
      <div className="iconHolder">{data.icon}</div>
      <h3 className="text-xl tracking-wide">{data.skill}</h3>
    </div>
  );
};

export const MobileCard = ({ data }) => {
  return (
    <div className="mobileCard">
      <>
        <div className="iconHolder" data-tip={data.skill.toLowerCase()}>
          {data.icon}
        </div>
        <ReactTooltip data-place="bottom" data-type="light" />
      </>
    </div>
  );
};
