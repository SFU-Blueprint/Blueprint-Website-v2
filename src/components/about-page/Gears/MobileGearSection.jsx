import React from "react";
import "./MobileGearSection.css";

const MobileGearSection = () => {
  return (
    <div className="gear-section">
      <img
        src="/gears/mobile_gear_bg.png"
        className="mobile-gear-image"
        alt="mobile version geartrain"
      />
      <div className="mobile-value-title mt-3">PEOPLE FIRST</div>
      <div className="mobile-value-body">
        We prioritize the interests of the people we serve over our own
        interest. Our success is measured by the positive impact we generate.
      </div>
      <div className="mobile-value-title">PERPETUAL GROWTH</div>
      <div className="mobile-value-body">
        Our community fosters continuous learning to support academic, social,
        and personal growth. We strive to offer a helping hand and push each
        other to succeed.
      </div>
      <div className="mobile-value-title">CHERISH EACH OTHER</div>
      <div className="mobile-value-body">
        We value individuals and appreciate our differences. Our time spent
        together build us meaningful relationships that extend beyond the scope
        of the organization.
      </div>
      <div className="mobile-value-title">ALWAYS INNOVATE</div>
      <div className="mobile-value-body">
        We are committed to innovate and emphasize effective solutions to remain
        relevant - nothing is sacred. No idea is off-limits, and diverse
        thinking is always encouraged.
      </div>
      <div className="mobile-value-title">BE HUMBLE</div>
      <div className="mobile-value-body">
        Embracing imperfections, we value feedback and approach challenges with
        humility. We recognize that anyone, regardless of knowledge or skill
        level, can contribute to social good.
      </div>
    </div>
  );
};

export default MobileGearSection;
