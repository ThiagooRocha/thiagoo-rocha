import "./style/global.css";

//Pages
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";

//Components
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export function App() {

  return (
    <div className="App">
      <header>
        <div className="wrappler">
          <Navbar />
        </div>
      </header>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
