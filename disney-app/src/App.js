import "./CSS/App.css";
import Disney from "./pages/disney";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/characters" element={<Disney />}></Route>
          <Route path="/searchCharacters" element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
