import Intro from "../components/Intro";
import About from "../components/About/About";
import Projects from "../components/ProjectSection/Projects";
import Contact from "../components/Contact/Contact";
import Link from "../components/Link/Link";
import Navbar from "../components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Link />
    </div>
  );
}

export default App;
