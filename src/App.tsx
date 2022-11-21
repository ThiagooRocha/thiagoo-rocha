import "./style/global.css";

//Pages
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";

//Components
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useRef } from "react";

export function App() {

  const refe = useRef<any>()

  function t (section: any) {
    const targetLine = scrollY + innerHeight / 2
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    console.log(targetLine)
    console.log(sectionTop)
    console.log(sectionHeight)
  }

  //useEffect(()=> {
    //if(refe.current) {
      //t(refe.current)
    //}
  //})

  return (
    <div className="App">
      <header ref={refe}>
        <div className="wrappler">
          <Navbar />
        </div>
      </header>
      <Home />
      <About />
      <Projects />
      <Footer/>
    </div>
  );
}
