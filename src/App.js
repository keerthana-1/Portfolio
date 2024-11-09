import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Background from "./Components/Background";
import Skills from "./Components/Skills";


function App() {
  return (
    <Router>
   
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/projects" element={<Projects />} />
                <Route path="/background" element={<Background />} />
                <Route path="/skills" element={<Skills />} /> 
            </Routes>
            
    </Router>
  );
}

export default App;
