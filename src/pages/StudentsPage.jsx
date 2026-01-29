import React from "react";
import PageContainer from "../components/layout/PageContainer";

const StudentsPage = () => {
  return (
  <PageContainer>
    {/* Hero Section */}
    <section class="m-4">
      <h1>join our team</h1>
      <p>Gain real-world experience in the tech industry and work with other passionate students - all while making a positive impact in your community. </p>
      <btn>See open positions placeholder</btn>
      <hr />
    </section>

    {/* Blueprinter Trait sections*/}
    <section class="m-4">
      <p>Blueprint is right for you if you're:</p>
      <ul>
        <li>a post-secondary student in Greater Vancouver</li>
        <li>passionate about creating meaningful impact in your community</li>
        <li>nterested in tech, design, or project management and excited to grow through real, collaborative project work</li>
      </ul>
      <hr />
    </section>

    {/* Experience at Blueprint*/}
    <section class="m-4">
      <h2>A typical experience at Blueprint</h2>

      {/* role description */}
      <section>
        <h3>Work with a team</h3>
        <p>Teams of roughly 10 blueprint members will work together to bring a project from its earliest stages to final client handoff. Cross-functional collaboration is the core of all blueprint projects!</p>
        <ul>
          <li>Project Manager PLACEHOLDER</li>
          <li>Designer PLACEHOLDER</li>
          <li>Developers PLACEHOLDER</li>
        </ul>
      </section>

      {/* timelines description */}
      <section>
        <h3>Work within a timeline</h3>
        <p>Projects typically run for about 8 months. The first 2 months focus on design, followed by development for the remaining 6 months (timelines may vary by project). Students commit around 10 hours per week, with project work intentionally slowing down during midterms and finals to help you balance responsibilities.</p>
      </section>

      {/* Social events description */}
      <section>
        <h3>socialize/attend events</h3>
        <p>Meet new people, build real connections, and join a community that supports your growth—both personally and professionally. </p>
        <ul>
          <li>img PLACEHOLDER</li>
          <li>img PLACEHOLDER</li>
          <li>img PLACEHOLDER</li>
        </ul>
      </section>

      <hr />
    </section>

    {/* Application process */}
    <section class="m-4">
      <h2>the application process</h2>
      <ul>
        <li>
          <h3>Step 1: Learn about Blueprint</h3>
          <p>DESCRIPTION PLACEHOLDER</p>
          <hr />
        </li>
        <li>
          <h3>Step 2: Submit your application</h3>
          <p>DESCRIPTION PLACEHOLDER</p>
          <hr />
          <li>
          <h3>Step 3: Interview with us</h3>
          <p>DESCRIPTION PLACEHOLDER</p>
          <hr />
        </li>
        <li>
          <h3>Step 4: Final Decision</h3>
          <p>DESCRIPTION PLACEHOLDER</p>
          <hr />
        </li>
        </li>
      </ul>
    </section>

    {/* Open Positions */}
    <section class="m-4">
      <h2>Open positions</h2>
      <btn>Senior Dev PLACEHOLDER link</btn>
      <btn>Junior Dev PLACEHOLDER link</btn>
    </section>

    {/* Links */}
    <section class="m-4">
      <h2>Stay updated</h2>
      <ul>
        <li>
          <btn>Discord</btn>
          <p>Join our Discord for hiring updates, announcements, and a place to ask any questions in our #questions channel. </p>
        </li>
        <li>
          <btn>Instagram</btn>
          <p>Follow us on Instagram to stay updated on events and see what our club is working on. </p>
        </li>
        <li>
          <btn>LinkedIn</btn>
          <p>Connect with us on LinkedIn to follow our announcements and keep up with club milestones.</p>
        </li>
      </ul>
    </section>

  </PageContainer>);
};

export default StudentsPage;