import Intro from "../components/Intro";
import About from "../components/About/About";
import Projects from "../components/ProjectSection/Projects";
import Contact from "../components/Contact/Contact";
import Link from "../components/Link/Link";

function App() {
  return (
    <div className="flex flex-col">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Link />
    </div>
  );
}

export default App;
