import { BracketModular } from "./Bracket/BracketModular";
import { CarouselFooter } from "./Carousels/CarouselFooter";
import { CarouselHeader } from "./Carousels/CarouselHeader";
import { ListModular } from "./List/ListModular";
import "./App.css";

export function App() {
  return (
    <div>
      <div className="header">
        <h1>#DontBuryTheLead</h1>
        <h1>
          <CarouselHeader />
        </h1>
      </div>
      <div className="modular">
        {/* <BracketModular />
        <ListModular /> */}
        <div id="null" />
      </div>
      <div className="footer">
        <h1><CarouselFooter /></h1>
      </div>
    </div>
  )
}
