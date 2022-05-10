import './App.css';
import HomePage from "./pages/HomePage";
import Card from "./pages/Card";
import DATA from "./components/DATA"; 


import {
  BrowserRouter as Router,

  Route,
  Routes,
} from "react-router-dom";





export default function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "pokemon/:name" component={DATA}  element={<Card />}  />
      </Routes>
    </Router>
  );
}