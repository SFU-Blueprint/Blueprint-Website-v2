import React from "react";
import { useParams, Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import { Projects } from "../constants/projects";

export default function IndividualProject() {
  const { slug } = useParams();

  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageContainer className="py-16">
        <h1>Project not found</h1>
        <p>
          <Link to="/projectspage">Back to Projects page</Link>
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-16">
      {/* Back link */}
      <nav style={{ marginBottom: "2rem" }}>
        <Link to="/projectspage">← Back to Projects</Link>
      </nav>

      {/* Project Overview */}
      <header style={{ marginBottom: "3rem" }}>
        <h1>{project.name}</h1>
        <p>{project.date}</p>
      </header>

      {/* About NPO */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>About NPO</h2>
        <p>{project.nonProfitDescription}</p>
        {/* Optional image placeholder */}
        <div style={{ width: "100%", height: "200px", backgroundColor: "#e5e7eb", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          Image placeholder
        </div>
      </section>

      {/* The Problem */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>The Problem</h2>
        <p>Problem description placeholder - to be filled in later.</p>
      </section>

      {/* The Product */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>The Product</h2>
        <p>{project.projectDescription}</p>
        {/* Image placeholders */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <div style={{ width: "100%", height: "200px", backgroundColor: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image placeholder 1
          </div>
          <div style={{ width: "100%", height: "200px", backgroundColor: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image placeholder 2
          </div>
        </div>
      </section>

      {/* Project Team */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Project Team</h2>
        {project.team && project.team.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
            {project.team.map((member, index) => (
              <div key={index}>
                <div style={{ width: "100%", height: "150px", backgroundColor: "#e5e7eb", marginBottom: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Image placeholder
                </div>
                <p><strong>{member.role}</strong></p>
                <p>{member.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No team members available.</p>
        )}
      </section>
    </PageContainer>
  );
}