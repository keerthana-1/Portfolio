import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">
    <div className="splitScreen">
      <div className="leftpane"> <Header />
      </div>
      <div className="rightpane">
        <Introduction />
        <About />
        <br></br>
        <Skills/>
        <br></br>
        <Timeline />
      </div>

    </div>
   
    
    </div>

  );
}

export default App;
