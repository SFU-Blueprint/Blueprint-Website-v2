import React from "react";
import PageContainer from "../components/layout/PageContainer";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";


const NonprofitsPage = () => {
  return (
    <PageContainer>
    {/* Hero Section */}
    <section className="mb-[180px] flex flex-row">
      <div className="gap-[24px] w-[939px]">
        <h1 className="text-blueprint-black text-[96px]/[100%] font-[400] font-poppins tracking-[-1.92px]">
          <strong>Partner</strong> with us
        </h1>
        <p className="font-poppins font-[400] text-[30px]/[100%] text-black tracking-[-0.6px] w-[726px]">
          by working with us, your organization will [] gain fresh perspectives of your business, [] increase community engagement with local students, 
          and [] bring your vision for social good to life through innovative ways, all free of charge.
        </p>
      </div>
      <div className="w-[100%]">
        <PolaroidPhoto imageSrc="https://placehold.co/398x298" caption="placeholder" alt="placeholder"/>
      </div>
    </section>

    {/* Project Trait and BP approach grouping */}
    <section className="m-4">
      {/* Project Traits Section*/}
      <section className="m-4">
        <h2>can your idea become a project?</h2>
        <p>We consider the following aspects when evaluating potential projects.</p>
        <ul>
          <li>
            <h3>Organizational Need</h3>
            <p>Organizational Need PLACEHOLDER</p>
          </li>
          <li>
            <h3>Technical Feasibility</h3>
            <p>Technical Feasibility PLACEHOLDER</p>
          </li>
          <li>
            <h3>Community Impact</h3>
            <p>Community Impact PLACEHOLDER</p>
          </li>
        </ul>
      </section>

      {/* BP Approach sections*/}
      <section className="m-4">
        <h2>our approach</h2>
        <ol>
          <li>1 Discover PLACEHOLDER</li>
          <li>2 Build PLACEHOLDER</li>
          <li>3 Clean Finish PLACEHOLDER</li>
        </ol>
      </section>
    </section>

    {/* NPO project proposal */}
    <section className="m-4">
      <h2>are you part of an NPO with a project idea in mind?</h2>
      <hr/>
      <h3>submit yout project proposal through the form!</h3>
      <p>additional info PLACEHOLER</p>
      <button>PROPOSAL FORM BTN PLACEHOLDER</button>
    </section>
    </PageContainer>
  );
};

export default NonprofitsPage;