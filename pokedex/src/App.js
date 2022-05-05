import './App.css';
import Appnav from './components/Appnav';
import Appbody from './components/Appbody';
import Appimput from "./components/Appimput";


function App() {
  return (
    <main className="App">
      <Appnav/>
      <Appimput/>
      <Appbody/>
    </main>
  );
}

export default App;
