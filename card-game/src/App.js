import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h3>Start Your Card Game</h3>
        <button type="button" class="btn btn-danger" onClick={()=>navigate('/home')}>
          Start Game
        </button>
      </header>
    </div>
  );
}

export default App;
