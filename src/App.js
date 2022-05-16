import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="category/:ms_id/:c_id" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
