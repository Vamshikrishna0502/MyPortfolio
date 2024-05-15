import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import './App.css';

function App() {
  return (
    <div >
     <Header/>
     <Home/>
     <Projects/>
     <Skills/>
     <Contact/>
     <AboutMe/>
    </div>
  );
}

export default App;
