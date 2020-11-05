import './App.css';
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
       
       <Search />
        <h1>
       Manchester
    <br></br>
    21
        </h1>
        <Weather />
      </header>
    </div>
    </div>
  );
}

export default App;
