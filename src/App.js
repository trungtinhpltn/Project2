import "./styles.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./components/ContextAPI/ContextAPI";
function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="container-fluid">
          <div className="row">
            <Left />
            <Right />
          </div>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;