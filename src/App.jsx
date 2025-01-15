import "./index.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Type from "./components/Type";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Build from "./components/Build";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Home />
      <Projects />
      <Partners />
      <Type />
      <Build />
      <Footer />
    </div>
  );
}

export default App;
