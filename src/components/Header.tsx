import "../style/App.css";
import astronaut from "../astronaut.svg";

export default function Header() {
  return (
    <div className="Header">
      <img src={astronaut} className="App-logo" alt="ctrlaltdeleon" />
    </div>
  );
}
