import { Routes, Route } from "react-router-dom";
import {Suspense} from "react";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import StudentsPage from "./pages/StudentsPage";
import AlumniPage from "./pages/AlumniPage";
import NonprofitsPage from "./pages/NonprofitsPage";
import IndividualProject from "./pages/IndividualProject";
import FooterRevamp from "./components/footer/FooterRevamp";
import ScrollToHashElement from "./components/shared/ScrollToHash";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <ScrollToHashElement />
      <div className="absolute top-0 left-0 right-0 z-20">
        <NavBar />
      </div>
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/nonprofits" element={<NonprofitsPage />} />
        <Route path="/projects/:slug" element={<IndividualProject />} />
      </Routes>
      </main>
      <FooterRevamp />
    </div>
  );
}

export default function WrappedApp(){
  return (
    <Suspense fallback="...loading">
      <App/>
    </Suspense>
  )
}