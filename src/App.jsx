import { BracketModular } from "./Bracket/BracketModular";
import { ListModular } from "./List/ListModular";
import "./App.css";

export function App() {
  return (
    <div>
      <div className="header">
        <h1>#DontBuryTheLead</h1>
        <h1>SPECIAL:</h1>
      </div>
      <div className="modular">
        {/* <BracketModular /> */}
        <ListModular />
      </div>
      <div className="footer">
        <h1>Who Would Win a Real Fight?</h1>
      </div>
    </div>
  )
}
