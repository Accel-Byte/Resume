import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Projects from "./components/Projects/Projects";
import Expertise from "./components/Expertise/Expertise";
import WorkExperience from "./components/Experience/WorkExperience";
import "./App.css";
import Education from "./components/Education/Education";
import { ScrollToHash } from "./components/ScrollToHash";

function App() {
  return (
    <Router>
      <div className="background font-raleway overflow-x-hidden">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutMe />
                <Expertise />
                <Projects />
              </>
            }
          />

          <Route path="/education" element={<Education />} />

          <Route path="/experience" element={<WorkExperience />} />
        </Routes>
        <footer className="mt-24 text-custom-white-text p-8">
          <p className="text-center font-medium">
            &#169; {new Date().getFullYear()} Cheris Patel.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
