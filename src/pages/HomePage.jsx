import React from "react";
import PageContainer from "../components/layout/PageContainer";

const HomePage = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section>
        <h1>we are sfu blueprint</h1>
        <p>we build tech for social good.</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Mission Statement */}
      <section>
        <p>Introduction paragraph placeholder</p>
        <ul>
          <li>ALL NGO sectors Placeholder</li>
          <li>Local partnerships Placeholder</li>
          <li>Pro-bono Placeholder</li>
        </ul>
        <hr />
      </section>

      {/* Projects preview */}
      <section>
        <h2>our partnerships</h2>
        <p>partnership card placeholder</p>
        <p>partnership card placeholder</p>
        <p>Sell all our projects placeholder</p>
      </section>

      {/* Partner info */}
      <section>
        <h2>launch a project for your non profit</h2>
        <p>Blueprint partner description placeholder</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Blueprint Events */}
      <section>
        <h2>for students: turn real projects into real opportunities.</h2>
        <p>blueprinters internship stats placeholder</p>
        <button>Join us placeholder</button>
        <p>upcoming events placeholder</p>
      </section>
    </PageContainer>
  );
};

export default HomePage;