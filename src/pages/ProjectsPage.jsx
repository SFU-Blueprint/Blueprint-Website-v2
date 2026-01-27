import React from "react";
import PageContainer from "../components/layout/PageContainer";

const ProjectsPage = () => {
  return (
    // All margin values are placeholder
    <PageContainer>
      {/* Title */}
      <section className="m-4"> 
        <h1>all projects</h1>
      </section>

      {/* current projects*/}
      <section className="m-4">
        <h2>Current projects</h2>
        <ul>
          <li>Project Card Placeholder</li>
          <li>Project Card Placeholder</li>
          <li>Project Card Placeholder</li>
        </ul>
      </section>

      {/* Completed projects */}
      <section className="m-4">
        <h2>Completed projects</h2>
        <ul>
          <li>Project Card Placeholder</li>
          <li>Project Card Placeholder</li>
          <li>Project Card Placeholder</li>
        </ul>
      </section>

      {/* Partner info link */}
      <section className="m-4">
        <h2>Launch a Project Placeholder</h2>
      </section>
    </PageContainer>
  );
};

export default ProjectsPage;