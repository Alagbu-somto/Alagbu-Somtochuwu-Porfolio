import NavBar from "./components/NarBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import Services from "./components/Services";
import Snowflakes from "magic-snowflakes";
import Footer from "./components/Footer";
function App() {
  const snowflakes = new Snowflakes({ zIndex: -10, count: 7 });
  snowflakes.start();
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Services />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
