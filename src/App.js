import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your Routes in a Router component */}
        <Routes> 
        <Route path="/" element={<img src="https://openseauserdata.com/files/7d5d665f92c09858439458678bc879a4.gif"></img>}></Route>
          <Route path="/skill/:id" element={<Skill/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
