import "./App.css";
import AllPages from "./pages/AllPages";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  /* Utilisateur
  Il aura un login
  */

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AllPages />
      </BrowserRouter>
    </div>
  );
}

export default App;
