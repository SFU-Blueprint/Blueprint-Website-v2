import React from "react";
import PageContainer from "../components/layout/PageContainer";
import EvaluationCard from "../components/shared/EvaluationCard";

const NonprofitsPage = () => {
  return (
    <PageContainer>
        <EvaluationCard title="Organizational Need" body="What measurable improvements would this product deliver to current operations? 
        How does it align with long-term organizational goals? How urgent is its development?" />
        <EvaluationCard title="Organizational Need" body="What measurable improvements would this product deliver to current operations? 
        How does it align with long-term organizational goals? How urgent is its development?" />
        <EvaluationCard title="Organizational Need" body="What measurable improvements would this product deliver to current operations? 
        How does it align with long-term organizational goals? How urgent is its development?" />  
        {/* <EvaluationCard title="Technical Feasibility" body="Are the desired features commonly built-in software products or near the frontiers of what can be built? Some examples of solutions we can achieve include: Mobile apps, Websites, In-browser games, Information databases, & AI/machine learning solutions." /> */}


      
    {/* Hero Section */}
    <section class="m-4">
      <h1>Partner with us</h1>
      <p>Why work with blueprint description PLACEHOLDER</p>
    </section>

    {/* Project Traits Section*/}
    <section class="m-4">
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

    {/* Blueprinter Trait sections*/}
    <section class="m-4">
      <h2>our approach</h2>
      <ol>
        <li>1 Discover PLACEHOLDER</li>
        <li>2 Build PLACEHOLDER</li>
        <li>3 Clean Finish PLACEHOLDER</li>
      </ol>
    </section>

    {/* NPO project proposal */}
    <section class="m-4">
      <h2>are you part of an NPO with a project idea in mind?</h2>
      <hr/>
      <h3>submit yout project proposal through the form!</h3>
      <p>additional info PLACEHOLER</p>
      <btn>PROPOSAL FORM BTN PLACEHOLDER</btn>
    </section>
    </PageContainer>
  );
};

export default NonprofitsPage;