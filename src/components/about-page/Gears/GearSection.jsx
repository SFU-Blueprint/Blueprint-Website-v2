import React from "react";
import GearTrain from "./GearTrain";
import "./GearSection.css";

const gearsData = [
  { imageURL: "/gears/gear-4.svg", innerText: "PEOPLE FIRST", diameter: 254 },
  {
    imageURL: "/gears/gear-1.svg",
    innerText: "PERPETUAL GROWTH",
    yOffset: -110,
    diameter: 424,
    angleToPrevious: 225,
    initialAngle: 16,
    rotationSpeed: 0.82,
  },
  {
    imageURL: "/gears/gear-2.svg",
    innerText: "CHERISH EACH OTHER",
    yOffset: -260,
    diameter: 325,
    angleToPrevious: 315,
    initialAngle: 20,
    rotationSpeed: 0.95,
  },
  {
    imageURL: "/gears/gear-3.svg",
    innerText: "ALWAYS INNOVATE",
    yOffset: -410,
    diameter: 333,
    angleToPrevious: 225,
    initialAngle: 23,
  },
  {
    imageURL: "/gears/gear-5.svg",
    innerText: "BE HUMBLE",
    yOffset: -560,
    diameter: 256,
    angleToPrevious: 315,
    initialAngle: 30,
  },
];

const GearSection = () => {
  return (
    <div className="gear-section">
      <div className="gear-train">
        <img
          src="/gears/gear_bg.png"
          className="gear-background"
          alt="gear background"
        />
        <GearTrain gears={gearsData}></GearTrain>
        <div className="curly-text">
          Our interlocking values work together to propel us forward.
        </div>
      </div>

      <div className="text-column">
        <div className="text-field" style={{ top: "92px" }}>
          We prioritize the interests of the people we serve over our own
          interest. Our success is measured by the positive impact we generate.
        </div>
        <div className="text-field" style={{ top: "238px" }}>
          Our community fosters continuous learning to support academic, social,
          and personal growth. We strive to offer a helping hand and push each
          other to succeed.
        </div>
        <div className="text-field" style={{ top: "365px" }}>
          We value individuals and appreciate our differences. Our time spent
          together build us meaningful relationships that extend beyond the
          scope of the organization.
        </div>
        <div className="text-field" style={{ top: "450px" }}>
          We are committed to innovate and emphasize effective solutions to
          remain relevant - nothing is sacred. No idea is off-limits, and
          diverse thinking is always encouraged.
        </div>
        <div className="text-field" style={{ top: "500px" }}>
          Embracing imperfections, we value feedback and approach challenges
          with humility. We recognize that anyone, regardless of knowledge or
          skill level, can contribute to social good.
        </div>
      </div>
    </div>
  );
};

export default GearSection;
