import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
