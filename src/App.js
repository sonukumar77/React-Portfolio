import './App.css';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
function App() {


  let arr = ["sonu",true,10,"anything"]
  return (
    <main>
      <Bio />
      <hr/>
      <Contact />
      <hr/>
      <Experience />
      <hr/>
      <Skills />
      <hr/>
    </main>
  );
}

export default App;
