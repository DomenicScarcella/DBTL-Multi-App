// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
// import { BracketModular } from "./Bracket/BracketModular";
// import { ListModular } from "./List/ListModular";
import "./App.css";

export function App() {
  return (
    <div>

      <div className="header">
        <h1>#DontBuryTheLead</h1>
        <h1>
          <Header />
        </h1>
      </div>

      <div className="modular">
        {/* <Router>
          <Routes>
            <Route index element={<div id="nullbg" />} />
            <Route path="whitebg" element={<div id="whitebg" />} />
            <Route path="bracketreveal" element={<BracketModular />} />
            <Route path="listreveal" element={<ListModular />} />
          </Routes>
        </Router> */}
        <div id="null" />
      </div>
      
      <div className="footer">
        <h1><Footer /></h1>
      </div>

    </div>
  )
}
