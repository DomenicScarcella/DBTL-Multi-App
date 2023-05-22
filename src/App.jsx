import { BracketModular } from "./Bracket/BracketModular";
import { ListModular } from "./List/ListModular";
import "./App.css";

export function App() {
  return (
    <div>
      <div className="header">
        <h1>#DontBuryTheLead</h1>
        <h1>RECAP:</h1>
      </div>
      <div className="modular">
        {/* <BracketModular />
        <ListModular /> */}
        <div id="null" />
      </div>
      <div className="footer">
        <h1>WWE Night of Champions - May 27, 2023</h1>
      </div>
    </div>
  )
}
