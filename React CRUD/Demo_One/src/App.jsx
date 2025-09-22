
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Student from './Components/Student';
import View from './Components/View';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Student />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
