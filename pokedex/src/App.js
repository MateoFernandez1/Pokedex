import './App.css';
import Appnav from './components/Appnav';
import Appbody from './components/Appbody';

function App() {
  return (
    <main className="App">
      <Appnav/>
      <input type="text" name="Buscar"></input>      
      <Appbody/>
    </main>
  );
}

export default App;
