import React from "react";
import PageContainer from "../components/layout/PageContainer";

const HomePage = () => {
  return (
    // All margin values are placeholder
    <PageContainer>
      {/* Hero Section */}
      <section className="m-4">
        <h1>we are sfu blueprint</h1>
        <p>we build tech for social good.</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Mission Statement */}
      <section className="m-4">
        <p>Introduction paragraph placeholder</p>
        <ul>
          <li>ALL NGO sectors Placeholder</li>
          <li>Local partnerships Placeholder</li>
          <li>Pro-bono Placeholder</li>
        </ul>
        <hr />
      </section>

      {/* Projects preview */}
      <section className="m-4">
        <h2>our partnerships</h2>
        <ul>
          <li>partnership card placeholder</li>
          <li>partnership card placeholder</li>
        </ul>
        <p>See all our projects placeholder</p>
      </section>

      {/* Partner info */}
      <section className="m-4">
        <h2>launch a project for your non profit</h2>
        <p>Blueprint partner description placeholder</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Blueprint Events */}
      <section className="m-4">
        <h2>for students: turn real projects into real opportunities.</h2>
        <p>blueprinters internship stats placeholder</p>
        <button>Join us placeholder</button>
        <p>upcoming events placeholder</p>
      </section>
    </PageContainer>
  );
};

export default HomePage;